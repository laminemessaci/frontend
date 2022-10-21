// @ts-nocheck
/**Constructor Pattern - Average session
 * @constructor
 * @param {string} userId
 * @param {object} data - A average session with a day
 */

/**Constructor Pattern - Sessions Chart
 * @constructor
 * @param {string} userId  userId
 * @param {object} data contains all data
 */
export class SessionsAverage {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data;
    console.log('sessions  ' + data);
  }

  /**
   * Formats User sessions from initial data
   *
   * @return  {{day: string, sessionLength:number}}   formatted sessions
   */
  get _sessions() {
    let sessions = [];
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    this._data.map((user) => {
      if (user.userId === parseInt(this._userId)) {
        const item = user.sessions;
        // console.log('item=> ', item);
        item.map((session) => {
          sessions.push({
            day: days[session.day - 1],
            sessionLength: session.sessionLength,
          });
        });
      }
    });

    // console.log('sessions: ', sessions);

    return sessions;
  }
}
