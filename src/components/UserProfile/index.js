// @ts-nocheck
import React from 'react';
import { PropTypes } from 'prop-types';
import {
  UserArticle,
  UserDescription,
  UserImage,
  UserLink,
  UserName,
  UserSection,
} from './index.styles.js';

/**
 * Component for showing  User profile
 *
 * @component UserProfile
 * @param   {string}  userId  User Id
 * @param   {string}  imageSource
 * @return {JSX.Element}
 */
function UserProfile({ userId, imageSource, data, api }) {
  return (
    <UserSection>
      <UserArticle>
        <UserLink href={`dashboard/${userId}`}>
          <UserImage src={imageSource} />
          <UserName>
            {api
              ? data?.userInfos?.firstName.split('Mocked')
              : data?.userInfos?.firstName}
          </UserName>
        </UserLink>

        <UserDescription>{data?.userInfos?.age} ans</UserDescription>
      </UserArticle>
    </UserSection>
  );
}

UserProfile.propTypes = {
  userId: PropTypes.number.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default UserProfile;
