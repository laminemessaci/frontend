import PropTypes from "prop-types";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  AverageSessionsContainer,
  AverageSessionsTitle,
  TooltipContainer,
} from "./index.styles.js";
import { USER_AVERAGE_SESSIONS } from "../../mock/mockedData.js";

export function AverageSessionsChart({ sessions, ...props }) {
  let averageSessions = USER_AVERAGE_SESSIONS[1].sessions;
  console.log("sessions::", sessions);

  return (
    <AverageSessionsContainer>
      <AverageSessionsTitle>
        Durée moyenne des
        <br />
        sessions
      </AverageSessionsTitle>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 60"]}
            hide={true}
          />
          <Line
            dataKey="sessionLength"
            // type={`${userId === "18" ? "step" : "monotone"}`}
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </AverageSessionsContainer>
  );
}

AverageSessionsChart.propTypes = {
  // userId: PropTypes.string.isRequired,
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
