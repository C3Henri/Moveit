import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEn-RWB6VpNdw/profile-displayphoto-shrink_100_100/0/1602551610367?e=1619654400&v=beta&t=YLjOqu-IF197GYLti1yl9PNPRokQps9aH826HOdYkvQ" alt="César Henrique" />
            <div>
                <strong>César Henrique</strong>

                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}