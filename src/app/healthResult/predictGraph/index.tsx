import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  VictoryBar,
} from 'victory';

import cx from 'classnames';
import { COLORS } from '../color';
import PredictGraphStyle from './predictGraphStyle';
import styles from './predictGraph.module.scss';
import DATA from 'data/response.json';

interface IProps {
  wHscore: number;
  wHscoreDy: number;
}

const Compare = ({ wHscore, wHscoreDy }: IProps) => {
  const gap = wHscore - wHscoreDy;
  if (gap > 0) {
    return <span className={cx(styles.redText, styles.highlight)}>{gap}점 낮아요</span>;
  }
  if (gap < 0) {
    return <span className={cx(styles.blueText, styles.highlight)}>{gap}점 높아요</span>;
  }
  return <span className={cx(styles.blackText, styles.highlight)}>평균과 같아요</span>;
};

const DrawGraph = ({ wHscore, wHscoreDy }: IProps) => {
  const data = [
    { x: 1, y: wHscore },
    { x: 2, y: wHscoreDy },
  ];
  const xAsisLabel = ['나', '10년뒤'];

  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20} {...PredictGraphStyle.chart}>
      <VictoryBar
        data={data}
        labels={({ datum }) => datum.y}
        labelComponent={
          <VictoryLabel
            style={[{ fill: ({ datum }) => (datum.x === 1 ? COLORS.$ORANGE : COLORS.$GREY_03), fontSize: 20 }]}
            {...PredictGraphStyle.label}
          />
        }
        style={{
          data: {
            fill: ({ datum }) => (datum.x === 1 ? COLORS.$YELLOW : COLORS.$ORANGE),
          },
        }}
        {...PredictGraphStyle.bar}
      />
      <VictoryLine data={data} {...PredictGraphStyle.line} />
      <VictoryScatter data={data} symbol='circle' {...PredictGraphStyle.scratter} />
      <VictoryAxis tickValues={xAsisLabel} {...PredictGraphStyle.axis} />
    </VictoryChart>
  );
};

const PredictGraph = () => {
  const {
    wxcResultMap: { wHscore },
    wxcResultMap: { wHscoreDy },
  } = DATA;
  const decade = wHscoreDy.length - 1;

  return (
    <div className={styles.healthResultWrapper}>
      <h2>나의 10년 후 건강 예측</h2>
      <p>
        10년 후 예상 건강점수는
        <br />
        현재 보다&nbsp;
        <Compare wHscore={wHscore} wHscoreDy={wHscoreDy[decade]} />.
      </p>
      <div className={styles.graphWrapper}>
        <DrawGraph wHscore={wHscore} wHscoreDy={wHscoreDy[decade]} />
      </div>
    </div>
  );
};

export default PredictGraph;
