import { USER_MAIN_DATA } from './../mock/mockedData';
class User {
  constructor(id, data) {
    this._id = id;
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
export default User;
