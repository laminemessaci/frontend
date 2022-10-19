class Average {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data;
  }
  getSessions() {
    return this._data?.sessions;
  }
}
export default Average;
