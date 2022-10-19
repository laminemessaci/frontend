import { theme } from '../constants/index.js';

/**Constructor Pattern - Score
 * @constructor
 * @param {object} score - A score
 */
export class Score {
  constructor(userId, data) {
    this._userId = userId;
    this._data = data.userMainData;
  }

  get name() {
    return 'score';
  }

  get score() {
    let score = 0;
    this._data.forEach((element) => {
      if (element.userId === parseInt(this._userId)) {
        score = element.todayScore;
      }
    });
    //console.log('score::', score);
    return score;
  }

  get fill() {
    return `${theme.colors.primary500}`;
  }
}
