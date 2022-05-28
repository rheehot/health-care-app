import AverageScoreGraph from './averageScoreGraph';
import PredictGraph from './predictGraph';
import CostPredictionGraph from './costPredictionGraph';
import CompareLastYear from './compareLastYear';

const HealthResult = () => {
  return (
    <section>
      <CompareLastYear />
      <AverageScoreGraph />
      <PredictGraph />
      <CostPredictionGraph />
    </section>
  );
};

export default HealthResult;
