// @ts-nocheck
import { USER_MAIN_DATA } from './../mock/mockedData';

/**Constructor Pattern - User
 * @constructor
 * @param {string} userId
 * @param {object} data  contains all user data
 */
export class User {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data;
    console.log('User Data :' + this._data);
  }
  /**
   * Gets FirstName from initial data
   *
   * @return  {string}  FirstName
   */
  get _firstName() {
    let firstName = 'unknown user';
    this._data.userMainData.forEach((user) => {
      // console.log('condition userId', user.userId);
      if (user.userId === parseInt(this._userId)) {
        firstName = user.userInfos.firstName;
        console.log('condition userId', user.todayScore);
      }
    });

    return firstName;
  }

  get _toDayScore() {
    let score = 0;
    this._data.userMainData.forEach((user) => {
      if (user.userId === parseInt(this._userId)) {
        score = user.todayScore;
      }
    });

    return score;
  }

  /**
   * Formats User keyData from initial data
   *
   * @return  {{nutriments: Array, values: Array}   { nutriments, values }
   */
  get _keyData() {
    const nutriments = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
    let values = new Array(5);
    const userData = this._data.forEach((user) => {
      if (user.userId === parseInt(this._userId)) {
        // console.log(user.keyData);
        values = Object.values(user.keyData);
      }
    });

    return { nutriments, values };
  }
}
