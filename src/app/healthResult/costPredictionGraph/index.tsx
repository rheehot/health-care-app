import { useState } from 'react';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryScatter, VictoryLine, VictoryLabel } from 'victory';
import Big from 'big.js';

import response from 'data/response.json';
import { convertToData, compareCost, GRAPH_OPTIONS, convertNumToUnit } from './_shared';
import { COLORS } from '../_shared';

import cn from 'classnames';
import styles from './costPredictionGraph.module.scss';

const CostPredictionGraph = () => {
  const [isShowScatter, setIsShowScatter] = useState(false);

  setTimeout(() => setIsShowScatter(true), 2400);

  const { medi, mediDy } = response.wxcResultMap;
  const currentCost = new Big(medi);
  const after10yrsCost = new Big(mediDy[mediDy.length - 1]).toNumber();

  const data = convertToData(currentCost.toNumber(), after10yrsCost);
  const { txt, costStatus } = compareCost(currentCost, after10yrsCost);

  return (
    <article>
      <h3 className={styles.notice}>
        10년 후 예상 의료비는 <br />
        {txt[0]}&nbsp;
        <mark className={cn(styles.comparedResult, styles[costStatus])}>{txt[1]}</mark>
      </h3>
      <div className={styles.graphWrapper}>
        <VictoryChart domainPadding={{ x: [70, 0] }}>
          <VictoryAxis {...GRAPH_OPTIONS.axis} />
          <VictoryBar data={data} style={{ data: { fill: ({ datum }) => datum.fill.bar } }} {...GRAPH_OPTIONS.bar} />
          <VictoryLine data={data} {...GRAPH_OPTIONS.line} />
          {isShowScatter && (
            <VictoryScatter
              data={data}
              labels={({ datum }) => convertNumToUnit(datum.y)}
              style={{
                data: { fill: ({ datum }) => datum.fill.scatter, stroke: COLORS.$GREY_02, strokeWidth: 2 },
              }}
              labelComponent={
                <VictoryLabel dy={-20} style={[{ fill: ({ datum }) => datum.fill.label, fontSize: 23 }]} />
              }
              {...GRAPH_OPTIONS.scatter}
            />
          )}
        </VictoryChart>
      </div>
    </article>
  );
};

export default CostPredictionGraph;
