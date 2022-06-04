import styles from './feature-project.module.scss';

/* eslint-disable-next-line */
export interface FeatureProjectProps {}

export function FeatureProject(props: FeatureProjectProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureProject!</h1>
    </div>
  );
}

export default FeatureProject;
