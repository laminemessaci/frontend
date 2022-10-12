import PropTypes from "prop-types";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import {
  ScoreContainer,
  ScoreLabel,
  ScoreTitle,
  ScoreValue,
} from "./index.styles.js";
import { theme } from "../../constants";

function Score({ userId }) {
  const pieData = [
    { name: "completed", value: 0.12, fillColor: `${theme.colors.primary500}` },
    { name: "not-completed", value: 1 - 0.12, fillColor: "transparent" },
  ];

  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={60}
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
        <ScoreValue>{`${100 * 0.12}%`}</ScoreValue>
        <br />
        de votre
        <br />
        objectif
      </ScoreLabel>
    </ScoreContainer>
  );
}

Score.propTypes = {
  userId: PropTypes.string.isRequired,
};
export default Score;
