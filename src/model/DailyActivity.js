// @ts-nocheck
/**Constructor Pattern - Daily Activities
 * @constructor
 * @param {string} userId  userId
 * @param {object} data contains all data
 * @param {object} dataApi contains data from Api
 */
export class Activity {
  /**
   * Constructor for the class.
   *
   * @param {type} userId - description of parameter
   * @param {type} data - description of parameter
   * @param {type} dataApi - description of parameter
   */
  constructor(userId, data, dataApi) {
    this._userId = userId;
    this._data = data;
    this._dataApi = dataApi;
  }


/**
 * Returns an array of daily activities for a specific user.
 *
 * @return {Array} An array of objects containing the day, kilogram, and calories.
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

 
/**
 * Returns an array of daily activities from the data API.
 *
 * @return {Array} An array of objects containing the day, kilogram, and calories of each activity.
 */
  get _activitiesApi() {
    const dailyActivity = [];
    this._dataApi.map((item) => {
      const [yyyy, mm, dd] = item.day.split('-');
      dailyActivity.push({
        day: `${dd}/${mm}`,
        kilogram: item.kilogram,
        calories: item.calories,
      });
    });
    return dailyActivity;
  }
}
