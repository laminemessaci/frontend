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

function RadarActivities(userId) {
  let activities = USER_PERFORMANCE[0].data;
  console.log("activities", activities);

  const formatedctivities = [];

  // activitie_radar.map((activity, key) => {
  //   console.log(activity, key);
  // });

  activities.forEach((activitie, key) => {
    formatedctivities.push({
      value: activitie.value,
      activity: activitie_radar[key],
    });
  });
  console.log("formated: ", formatedctivities);
  return (
    <RadarContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={formatedctivities}
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

Radar.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default RadarActivities;
