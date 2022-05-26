import styles from './app.module.scss';
import AverageScoreGraph from './healthResult/averageScoreGraph';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <main className={styles.scrollArea} />
        <AverageScoreGraph />
      </div>
    </div>
  );
};

export default App;
