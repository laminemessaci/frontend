import React from 'react';
import { useParams } from 'react-router';
import User from '../../model/User.js';
import { FirstName, Message, Title } from './index.styles.js';

function UserMessage({ message, isLoading }) {
  const params = useParams();
  const firstName =
    new User(parseInt(params.userId)).getFirstName() || 'unknown user';
  console.log('first Name:', firstName, isLoading);
  return (
    <>
      <Title>
        Bonjour <FirstName>{!isLoading && firstName}</FirstName>
      </Title>
      <Message>
        <span>{!isLoading || (firstName === 'unknown user') ? message : ''}</span>
      </Message>
    </>
  );
}

export default UserMessage;
