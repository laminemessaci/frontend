// @ts-nocheck
import PropTypes from 'prop-types';
import IconComponent from '../IconComponent/index.jsx';
import { MacroContainer } from './index.styles.js';
import { User } from '../../model/User.js';
import React from 'react';

/**
 * Component that displays a list of Nutrition values
 *
 * @param   {string}  userId  User Id
 * @param   {Object}  data   all User data
 *
 * @return {JSX.Element}
 */
function Macros({ userId, data }) {
  // console.log(data);
  const { nutriments, values } = new User(userId, data)._keyData;

  return (
    <MacroContainer>
      {nutriments.map((nutriment, index) => (
        <IconComponent type={nutriment} value={values[index]} key={index} />
      ))}
    </MacroContainer>
  );
}

Macros.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default Macros;
