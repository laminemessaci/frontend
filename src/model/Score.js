import { theme } from "../constants/index.js";

/**Constructor Pattern - Score
 * @constructor
 * @param {object} score - A score
 */
export class Score {
  constructor(score) {
    this._score = score;
  }

  get name() {
    return "score";
  }

  get score() {
    let score = this._score * 100;
    return score;
  }

  get fill() {
    return `${theme.colors.primary500}`;
  }
}
