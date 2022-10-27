// @ts-nocheck
import React from 'react';
import {
  UserArticle,
  UserDescription,
  UserImage,
  UserLink,
  UserName,
  UserSection,
} from './index.styles.js';

function UserProfile({ userId, imageSource }) {
  return (
    <UserSection>
      <UserArticle>
        <UserLink href={`dashboard/${userId}`}>
          <UserImage src={imageSource} />
          <UserName>Marc</UserName>
        </UserLink>

        <UserDescription>test</UserDescription>
      </UserArticle>
    </UserSection>
  );
}

export default UserProfile;
