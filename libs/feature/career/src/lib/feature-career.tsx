import styles from './feature-career.module.scss';

/* eslint-disable-next-line */
export interface FeatureCareerProps {}

export function FeatureCareer(props: FeatureCareerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureCareer!</h1>
    </div>
  );
}

export default FeatureCareer;
