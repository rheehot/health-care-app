import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import data from '../../../data/response.json';
import styles from './averageScoreGraph.module.scss';
import cn from 'classnames';

console.log(data);

const AverageScoreGraph = () => {
  const { userInfo, wxcResultMap } = data;

  const GRAPTH_DATA = [
    { user: '나', score: userInfo.healthScore, label: userInfo.healthScore },
    { user: '30대 남성', score: wxcResultMap.hscore_peer, label: wxcResultMap.hscore_peer },
  ];

  const isHigherMyScore = userInfo.healthScore > wxcResultMap.hscore_peer;
  const scoreDifference = userInfo.healthScore - wxcResultMap.hscore_peer;
  const isHighRank = wxcResultMap.hscorePercent > 50;

  return (
    <div className={styles.averageWrapper}>
      <p>30대 남성 평균 점수보다</p>
      <p className={cn(styles.score, { [styles.highScoreColor]: isHigherMyScore })}>
        {isHigherMyScore ? scoreDifference : -scoreDifference}점 {isHigherMyScore ? '높아요' : '낮아요'}
      </p>
      <p>
        {isHighRank ? '상위' : '하위'} {100 - wxcResultMap.hscorePercent}%
      </p>
      <VictoryChart domainPadding={100} theme={VictoryTheme.material}>
        <VictoryAxis dependentAxis />
        <VictoryAxis />
        <VictoryBar data={GRAPTH_DATA} x='user' y='score' />
      </VictoryChart>
    </div>
  );
};

export default AverageScoreGraph;
