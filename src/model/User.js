import { USER_MAIN_DATA } from './../mock/mockedData';

/**Constructor Pattern - User
 * @constructor
 * @param {string} userId
 * @param {object} data  contains all user data
 */
export class User {
  constructor(userId, data) {
    this._id = userId;
    this._data = data;
  }
  getId() {
    return this._id;
  }
  get _firstName() {
    let firstName = 'unknown user';
    USER_MAIN_DATA.forEach((user) => {
      if (user.id === parseInt(this._id)) {
        firstName = user.userInfos.firstName;
      }
    });
    return firstName;
  }
  get _keyData() {
    const nutriments = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
    let values = new Array(5);
    const userData = this._data.forEach((user) => {
      if (user.userId === parseInt(this._id)) {
        console.log(user.keyData);
        values = Object.values(user.keyData);
      }
    });

    return { nutriments, values };
  }
}
