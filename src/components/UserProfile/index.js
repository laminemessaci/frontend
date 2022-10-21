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

function UserProfile() {
  return (
    <UserSection>
    

      <UserArticle>
        <UserLink href="photographer.html?photographer=${this.id}">
          <UserImage src="images/EllieRoseWilkens.jpg" alt="photo de profile" />
          <UserName>Marc</UserName>
        </UserLink>

        <UserDescription>test</UserDescription>
      </UserArticle>
    </UserSection>
  );
}

export default UserProfile;
