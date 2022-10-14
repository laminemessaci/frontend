import { activitie_radar } from "../constants/index.js";
import { USER_PERFORMANCE } from "../mock/mockedData.js";

export class Activity {
  constructor(userId) {
    this.userId = userId;
  }

  getActivities() {
    const activities = [];
    for (let user of USER_PERFORMANCE) {
      if (user.userId === this.userId) {
        for (let item of user.data) {
          activities.push({
            activity: activitie_radar[item.kind],
            value: item.value,
          });
        }
        return activities;
      }
    }
  }
}
