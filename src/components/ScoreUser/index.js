import PropTypes from "prop-types";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import {
  ScoreContainer,
  ScoreLabel,
  ScoreTitle,
  ScoreValue,
} from "./index.styles.js";
import { Score } from "../../model/Score.js";
import { theme } from "../../constants";

function ScoreUser({ todayScore }) {
  const scoreData = new Score(todayScore);
  const data = [
    { name: "completed", value: scoreData._score, fillColor: scoreData.fill },
    {
      name: "not-completed",
      value: 1 - scoreData._score,
      fillColor: `${theme.colors.transparent}`,
    },
  ];

  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={67}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
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
        <ScoreValue>{scoreData._score}</ScoreValue>
        <br />
        de votre
        <br />
        objectif
      </ScoreLabel>
    </ScoreContainer>
  );
}

ScoreUser.propTypes = {
  todayScore: PropTypes.number.isRequired,
};
export default ScoreUser;
