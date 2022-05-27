import styles from './app.module.scss';
import PredictGraph from './predictGraph';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <main className={styles.scrollArea}>
          <PredictGraph />
        </main>
      </div>
    </div>
  );
};

export default App;
