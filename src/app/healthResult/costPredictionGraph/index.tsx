import { VictoryChart, VictoryAxis, VictoryBar, VictoryScatter, VictoryLine, VictoryLabel } from 'victory';
import Big from 'big.js';
import response from 'data/response.json';
import { convertToData, compareCost } from './_shared';
import { COLORS } from '../_shared';
import styles from './costPredictionGraph.module.scss';

const CostPredictionGraph = () => {
  const { medi, mediDy } = response.wxcResultMap;
  const currentCost = new Big(medi);
  const after10yrsCost = new Big(mediDy[mediDy.length - 1]).toNumber();

  const data = convertToData(currentCost.toNumber(), after10yrsCost);
  const { txt, costStatus } = compareCost(currentCost, after10yrsCost);

  return (
    <article>
      <h3 className={styles.notice}>
        10년 후 예상 의료비는 <br />
        <mark className={styles[costStatus]}>{txt}</mark>
      </h3>
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={['나', '10년 후']}
          style={{
            axis: { strokeWidth: 0 },
            tickLabels: { fill: COLORS.GREY_03, fontWeight: 700, fontSize: 20, padding: 20 },
          }}
        />
        <VictoryBar data={data} style={{ data: { fill: ({ datum }) => datum.fill.bar } }} />
        <VictoryLine
          data={data}
          style={{
            data: { stroke: COLORS.GREY_02 },
          }}
        />
        <VictoryScatter
          data={data}
          width={50}
          labels={({ datum }) => datum.y}
          style={{
            data: { fill: ({ datum }) => datum.fill.scatter, stroke: COLORS.GREY_02, strokeWidth: 2 },
          }}
          size={5}
          labelComponent={<VictoryLabel dy={-20} style={[{ fill: ({ datum }) => datum.fill.label, fontSize: 20 }]} />}
        />
      </VictoryChart>
    </article>
  );
};

export default CostPredictionGraph;
