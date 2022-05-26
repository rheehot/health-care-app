import { AiOutlineInfoCircle } from 'react-icons/ai';
import response from '../../data/response.json';
import styles from './myHealth.module.scss';

const MyHealth = () => {
  const { age, sex, resHeight } = response.wxcResultMap.paramMap;

  return (
    <section>
      <h1 className={styles.title}>마이헬스</h1>
      <div className={styles.contents}>
        <div className={styles.healthScore}>
          <span>김헬스님의 건강점수</span>
          <AiOutlineInfoCircle className={styles.infoIcon} size='18' color='#7d7d79' />
        </div>
        <div>chart</div>
        <dl className={styles.basicInfo}>
          <dt>기본정보</dt>
          <div>
            <dd className={styles.borderRight}>{sex === 1 ? '남' : '여'}성</dd>
            <dd className={styles.borderRight}>{age}세</dd>
            <dd>{resHeight}cm</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default MyHealth;
