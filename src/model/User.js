import { USER_MAIN_DATA } from "./../mock/mockedData";
class User {
  constructor(id) {
    this._id = id;
  }
  getId() {
    return this._id;
  }
  getFirstName() {
    for (let user of USER_MAIN_DATA) {
      if (user.id == this._id) {
        return user.userInfos.firstName;
      }
    }
    return "test";
  }
}
export default User;
