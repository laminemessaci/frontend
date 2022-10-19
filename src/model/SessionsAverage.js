import { USER_AVERAGE_SESSIONS } from '../mock/mockedData.js';

/**Constructor Pattern - Average session
 * @constructor
 * @param {object} data - A average session with a day
 */
export class SessionsAverage {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data;
    console.log('userId  ' + userId);
  }

  getFormatedData() {
    let sessions = [];
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    USER_AVERAGE_SESSIONS.map((user) => {
      console.log('userId  ' + user.userId);
      if (user.userId === parseInt(this._userId)) {
        this._data.forEach((session) => {
          sessions.push({
            day: days[session.day - 1],
            sessionLength: session.sessionLength,
          });
        });
      }
    });

    return sessions;
  }
}
