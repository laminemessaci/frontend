import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { activitie_radar } from "../../constants/index.js";
import { USER_ACTIVITY, USER_PERFORMANCE } from "../../mock/mockedData.js";
import { theme } from "../../constants";

import { RadarContainer } from "./index.styles.js";
import { formatData } from "../../utils";
import { Activity } from "../../model/Activity.js";
import { useParams } from "react-router";

function RadarActivities({ perf, ...props }) {
  const params = useParams();

  const activities = new Activity(parseInt(params.userId)).getActivitiesById();

  return (
    <RadarContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={activities}
          outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            fill={`${theme.colors.primary500}`}
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </RadarContainer>
  );
}

RadarActivities.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default RadarActivities;
