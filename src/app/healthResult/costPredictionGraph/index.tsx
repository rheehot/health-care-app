import { VictoryChart, VictoryAxis, VictoryBar, VictoryScatter, VictoryLine, VictoryLabel } from 'victory';
import response from 'data/response.json';
import { convertToData, COLORS, FONT, IConvertedData, convertNumToUnit } from './_shared';

const CostPredictionGraph = () => {
  const { medi: currentCost, mediDy } = response.wxcResultMap;
  const after10yrsCost = mediDy[mediDy.length - 1];
  const data = convertToData(currentCost, after10yrsCost);

  console.log('data', data, currentCost, after10yrsCost);

  return (
    <article>
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={['나', '10년 후']}
          style={{ axis: { strokeWidth: 0 }, tickLabels: { fill: COLORS.GRAY_02, fontWeight: FONT.WEIGHT_BOLD } }}
        />
        <VictoryBar data={data} style={{ data: { fill: ({ datum }) => datum.fill.bar } }} />
        <VictoryLine
          data={data}
          style={{
            data: { stroke: COLORS.GRAY_01 },
          }}
        />
        <VictoryScatter
          data={data}
          width={50}
          labels={({ datum }) => convertNumToUnit(datum.y)}
          style={{
            data: { fill: ({ datum }) => datum.fill.scatter, stroke: COLORS.GRAY_01, strokeWidth: 2 },
            // labels: { fill: () },
          }}
          size={5}
          labelComponent={<VictoryLabel dy={-20} />}
        />
      </VictoryChart>
    </article>
  );
};

export default CostPredictionGraph;
