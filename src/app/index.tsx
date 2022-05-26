import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <main className={styles.scrollArea} />
      </div>
    </div>
  );
};

export default App;
