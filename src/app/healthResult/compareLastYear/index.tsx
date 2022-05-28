import { useState } from 'react';
import data from 'data/response.json';
import styles from './compareLastYear.module.scss';
import Chart from './Chart';
import CompareResultText from './CompareResultText';

const getYear = (stringDate: string): number => {
  return Number(stringDate.slice(0, 4));
};

const CompareLastYear = () => {
  const scoreListData = data.healthScoreList;

  const sortedDataByYear =
    scoreListData.length > 1
      ? scoreListData.sort((a, b) => {
          const aYearValue = getYear(a.SUBMIT_DATE);
          const bYearValue = getYear(b.SUBMIT_DATE);
          if (aYearValue > bYearValue) {
            return 1;
          }
          if (aYearValue < bYearValue) {
            return -1;
          }
          return 0;
        })
      : scoreListData;

  const slicedSortedScore = sortedDataByYear.slice(-4);
  const chartDataList = slicedSortedScore.map((chartData, index) => {
    return { SCORE: chartData.SCORE, SUBMIT_DATE: getYear(chartData.SUBMIT_DATE), INDEX: index };
  });

  if (scoreListData.length === 0 || !scoreListData) {
    return null;
  }

  return (
    <div className={styles.compareYearCont}>
      <p className={styles.header}>
        나의 건강점수
        <br /> 분석결과
      </p>
      <button type='button' className={styles.showDetailBtn}>
        검진결과 자세히
      </button>
      <CompareResultText chartDataList={chartDataList} />
      <Chart chartDataList={chartDataList} />
    </div>
  );
};

export default CompareLastYear;
