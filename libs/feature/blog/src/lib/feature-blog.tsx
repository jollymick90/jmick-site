import styles from './feature-blog.module.scss';

/* eslint-disable-next-line */
export interface FeatureBlogProps {}

export function FeatureBlog(props: FeatureBlogProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureBlog!</h1>
    </div>
  );
}

export default FeatureBlog;
