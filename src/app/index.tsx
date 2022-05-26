import styles from './app.module.scss';
import MyHealth from './myHealth';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <main className={styles.scrollArea}>
          <MyHealth />
        </main>
      </div>
    </div>
  );
};

export default App;
