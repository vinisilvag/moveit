import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengeContext'

import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/58532241?s=460&u=db2c83598aa06aadd59ba4497f205c70934cbd68&v=4" alt="Vinícius Gomes"/>

      <div>
        <strong>Vinícius Gomes</strong>
        <p><img src="icons/level.svg" alt="Level"/>Level {level}</p>
      </div>
    </div>
  );
}