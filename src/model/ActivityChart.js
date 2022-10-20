import { formatData } from '../utils/index.js';
import { activitie_radar } from './../constants/index';

export default class ActivityChart {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data.userPerformances;
    //console.log('UserPerf', this._data);
  }

  get _activities() {
    let result = {};
    this._data.forEach((performance) => {
      if (performance.userId === parseInt(this._userId)) {
        result = { ...performance };
      }
    });
    return formatData(result);
  }
}
