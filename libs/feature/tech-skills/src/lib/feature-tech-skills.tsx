import styles from './feature-tech-skills.module.scss';

/* eslint-disable-next-line */
export interface FeatureTechSkillsProps {}

export function FeatureTechSkills(props: FeatureTechSkillsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureTechSkills!</h1>
    </div>
  );
}

export default FeatureTechSkills;
