import styles from './app.module.scss';
import AverageScoreGraph from './healthResult/averageScoreGraph';
import MyHealth from './myHealth';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <h1 className={styles.title}>마이헬스</h1>
        <main className={styles.scrollArea}>
          <MyHealth />
          <AverageScoreGraph />
          <div style={{ height: '200px', backgroundColor: 'yellow' }}>다른컴포넌트</div>
          <div style={{ height: '200px', backgroundColor: 'red' }}>다른컴포넌트</div>
        </main>
      </div>
    </div>
  );
};

export default App;
