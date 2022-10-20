import PropTypes from 'prop-types';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { theme } from '../../constants';
import ActivityChart from '../../model/ActivityChart.js';

import { RadarContainer } from './index.styles.js';

function RadarActivities({ userId, data }) {
  const performances = new ActivityChart(userId, data)._activities;

  console.log('Performances ==> ', performances);
  return (
    <RadarContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={performances}
          outerRadius={window.innerWidth > 1340 ? '70%' : '60%'}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 10,
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