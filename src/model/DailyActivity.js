// @ts-nocheck
/**Constructor Pattern - Daily Activities
 * @constructor
 * @param {string} userId  userId
 * @param {object} data contains all data
 */
export class Activity {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data;
  }

  /**
   * Formats User daily activities with good formatted date
   *
   * @return  {{day:string, kilogram: number, calories: number}}  dailyActivity
   */
  get _activities() {
    const dailyActivity = [];
    for (let user of this._data) {
      if (user.userId === parseInt(this._userId)) {
        // console.log('dans condition');
        for (let item of user.sessions) {
          // console.log('item: ', item);
          const [yyyy, mm, dd] = item.day.split('-');

          dailyActivity.push({
            day: `${dd}/${mm}`,
            kilogram: item.kilogram,
            calories: item.calories,
          });
        }
        // console.log('dayly activities ::', dailyActivity);
      }
    }
    return dailyActivity;
  }
}
