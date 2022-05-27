import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryScatter,
  VictoryLabel,
} from 'victory';
import data from '../../../data/response.json';
import styles from './averageScoreGraph.module.scss';
import cn from 'classnames';

console.log(data);

const AverageScoreGraph = () => {
  const { userInfo, wxcResultMap } = data;

  const GRAPTH_DATA = [
    { user: '나', score: userInfo.healthScore },
    { user: '30대 남성', score: wxcResultMap.hscore_peer },
  ];

  const isHigherMyScore = userInfo.healthScore > wxcResultMap.hscore_peer;
  const scoreDifference = userInfo.healthScore - wxcResultMap.hscore_peer;
  const isHighRank = wxcResultMap.hscorePercent > 50;

  return (
    <div className={styles.averageWrapper}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.scoreTextWrapper}>
          <p>30대 남성 평균 점수보다</p>
          <p className={cn(styles.score, { [styles.highScoreColor]: isHigherMyScore })}>
            {isHigherMyScore ? scoreDifference : -scoreDifference}점 {isHigherMyScore ? '높아요.' : '낮아요.'}
          </p>
        </div>
        <p className={styles.rankText}>
          {isHighRank ? '상위' : '하위'} {100 - wxcResultMap.hscorePercent}%
        </p>
      </div>
      <VictoryChart domainPadding={70}>
        <VictoryAxis />
        <VictoryBar
          height={500}
          barWidth={50}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: { fill: '#ffd202' },
            labels: { fill: '#666666' },
          }}
          data={GRAPTH_DATA}
          x='user'
          y='score'
          labels={GRAPTH_DATA.map((el) => el.score)}
        />
        <VictoryLine
          data={GRAPTH_DATA}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
          style={{ data: { fill: '#666666' } }}
          x='user'
          y='score'
        />
        <VictoryScatter style={{ data: { fill: '#666666' } }} data={GRAPTH_DATA} x='user' y='score' />
      </VictoryChart>
    </div>
  );
};

export default AverageScoreGraph;
