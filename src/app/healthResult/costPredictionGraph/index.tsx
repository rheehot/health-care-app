import { VictoryChart, VictoryAxis, VictoryStack, VictoryBar } from 'victory';
import response from 'data/response.json';
import { convertToData } from './_shared';

const CostPredictionGraph = () => {
  const { medi: currentCost, mediDy } = response.wxcResultMap;
  const after10yrsCost = mediDy.pop();

  return (
    <article>
      <VictoryChart domainPadding={20}>
        <VictoryAxis tickValues={[1, 2]} tickFormat={['나', '10년 후']} />
        <VictoryStack>
          <VictoryBar
            data={convertToData(currentCost, after10yrsCost)}
            style={{ data: { fill: ({ datum }) => datum.fill } }}
          />
        </VictoryStack>
      </VictoryChart>
    </article>
  );
};

export default CostPredictionGraph;
