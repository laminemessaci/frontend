import { USER_MAIN_DATA } from './../mock/mockedData';
class User {
  constructor(id, data) {
    this._id = id;
    this._data = data;
  }
  getId() {
    return this._id;
  }
  getFirstName() {
    for (let user of USER_MAIN_DATA) {
      if (user.id === this._id) {
        return user.userInfos.firstName;
      }
    }
    return 'unknown';
  }
  getKeyData() {
    const nutriments = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
    const values = Object.values(this._data);
    return { nutriments, values };
  }
}
export default User;
