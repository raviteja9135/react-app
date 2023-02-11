import React, { FC } from 'react';
import styles from './ProfilePic.module.scss';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = () => (
  <div className={styles.ProfilePic} data-testid="ProfilePic">
    ProfilePic Component
  </div>
);

export default ProfilePic;
