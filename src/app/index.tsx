import CostPredictionGraph from './healthResult/costPredictionGraph';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <main className={styles.scrollArea}>
          <CostPredictionGraph />
        </main>
      </div>
    </div>
  );
};

export default App;
