import { formatData } from '../utils/index.js';

/**Constructor Pattern - Activities Chart
 * @constructor
 * @param {string} userId  userId
 * @param {object} data contains all data
 */
export class ActivityChart {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data.userPerformances;
    //console.log('UserPerf', this._data);
  }

  /**
   * Formats data and get the activities for specified user
   * @return {Array.<Object>} {activity: string, value:number}
   */
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
