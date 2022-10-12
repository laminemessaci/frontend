import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  ColorBullet,
  DailyActivityContainer,
  DailyActivityLegend,
  DailyActivityTitle,
  LegendDetail,
} from "./index.styles.js";
import { theme } from "../../constants/index.js";
import CustomTooltip from "../CustomTooltip/index.js";
import { USER_ACTIVITY } from "../../mock/mockedData.js";

function DailyActivity({ userId }) {
   let dailyActivity = USER_ACTIVITY[0].sessions;
  console.log(dailyActivity);

  return (
    <DailyActivityContainer>
      <DailyActivityTitle>Activité quotidienne</DailyActivityTitle>

      <DailyActivityLegend>
        <LegendDetail>
          <ColorBullet background={`${theme.colors.neutral800}`}></ColorBullet>
          Poids (kg)
        </LegendDetail>
        <LegendDetail>
          <ColorBullet background={`${theme.colors.primary500}`}></ColorBullet>
          Calories brûlées (kCal)
        </LegendDetail>
      </DailyActivityLegend>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dailyActivity}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={`${theme.colors.neutral200}`}
          />
          <XAxis
            dataKey="day"
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke={`${theme.colors.neutral400}`}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 2"]}
            allowDecimals={false}
            dx={48}
            orientation="right"
            stroke={`${theme.colors.neutral400}`}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 50"]}
            hide={true}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill={`${theme.colors.neutral800}`}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill={`${theme.colors.primary500}`}
            radius={[50, 50, 0, 0]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </DailyActivityContainer>
  );
}

DailyActivity.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DailyActivity;
