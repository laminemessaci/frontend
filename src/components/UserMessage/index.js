import React from 'react';
import PropTypes from 'prop-types';
import User from '../../model/User.js';
import { FirstName, Message, Title } from './index.styles.js';

function UserMessage({ userId, message, isLoading }) {
  const firstName = new User(userId)._firstName || 'unknown user';
  console.log('first Name:', firstName, isLoading);
  return (
    <>
      <Title>
        Bonjour <FirstName>{!isLoading && firstName}</FirstName>
      </Title>
      <Message>
        <span>{!isLoading || firstName === 'unknown user' ? message : ''}</span>
      </Message>
    </>
  );
}

UserMessage.propTypes = {
  userId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default UserMessage;
