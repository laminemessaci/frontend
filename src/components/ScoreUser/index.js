import PropTypes from 'prop-types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import {
  ScoreContainer,
  ScoreLabel,
  ScoreTitle,
  ScoreValue,
} from './index.styles.js';
import { Score } from '../../model/Score.js';
import { theme } from '../../constants';

function ScoreUser({ userId, data }) {
  const scoreData = new Score(userId, data); //userMainData[0].todayScore
  console.log(scoreData);
  const pieData = [
    { name: 'completed', value: scoreData.score, fillColor: scoreData.fill },
    {
      name: 'not-completed',
      value: 1 - scoreData.score,
      fillColor: `${theme.colors.transparent}`,
    },
  ];

  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={67}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <ScoreLabel>
        <ScoreValue>{100 * scoreData.score}</ScoreValue>
        <br />
        de votre
        <br />
        objectif
      </ScoreLabel>
    </ScoreContainer>
  );
}

ScoreUser.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
export default ScoreUser;
