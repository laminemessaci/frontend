import { theme } from '../constants/index.js';


export class Score {
/**
 * Initializes a new instance of the class.
 *
 * @param {type} userId - the user ID
 * @param {type} data - the user data
 * @param {type} dataApi - the API data
 */
  constructor(userId, data, dataApi) {
    this._userId = userId;
    this._data = data.userMainData;
    this._dataApi = dataApi;
  }


  /**
   * Get the name of the object.
   *
   * @return {string} The name of the object.
   */
  get name() {
    return 'score';
  }

  /**
   * Get  user score
   *
   * @return  {number} score number
   */
  get score() {
    let score = 0;
    this._data.forEach((element) => {
      if (element.userId === parseInt(this._userId)) {
        score = element.todayScore;
      }
    });
    return score;
  }

  /**
   * Get the scoreApi property.
   *
   * @return {type} The value of the scoreApi property.
   */
  get scoreApi() {
    return this._dataApi;
  }
  /**
   * Get color
   *
   * @return  {string}
   */
  get fill() {
    return `${theme.colors.primary500}`;
  }
}
