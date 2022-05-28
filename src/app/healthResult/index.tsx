import AverageScoreGraph from './averageScoreGraph';
import PredictGraph from './predictGraph';
import CostPredictionGraph from './costPredictionGraph';

const HealthResult = () => {
  return (
    <section>
      <AverageScoreGraph />
      <PredictGraph />
      <CostPredictionGraph />
    </section>
  );
};

export default HealthResult;
