import { activitie_radar } from '../constants/index.js';
import { USER_PERFORMANCE } from '../mock/mockedData.js';

export class Activity {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data;
    console.log('ACTTTTTT: ', data);
    this.getActivities();
  }

  //   function getDailyActivity(userData) {
  //   if (userData) {
  //     const dailyActivity = [];

  //     for (let item of userData) {
  //       // eslint-disable-next-line no-unused-vars
  //       const [yyyy, mm, dd] = item.day.split("-");

  //       dailyActivity.push({
  //         day: `${dd}/${mm}`,
  //         kilogram: item.kilogram,
  //         calories: item.calories,
  //       });
  //     }

  //     return dailyActivity;
  //   }

  //   return getDefaultDailyActivity();
  // }

  getActivities() {
    const dailyActivity = [];
    for (let user of this._data) {
      if (user.userId === parseInt(this._userId)) {
        // console.log('dans condition');
        for (let item of user.sessions) {
          console.log('item: ', item);
          const [yyyy, mm, dd] = item.day.split('-');

          dailyActivity.push({
            day: `${dd}/${mm}`,
            kilogram: item.kilogram,
            calories: item.calories,
          });
        }
        console.log('dayly activities ::', dailyActivity);
        return dailyActivity;
      }
    }
  }
}
