import { useEffect, useState } from 'react';
import MarkText from './MarkText';

import styles from './compareLastYear.module.scss';

interface IProps {
  chartDataList: {
    SCORE: number;
    SUBMIT_DATE: number;
    INDEX: number;
  }[];
}

const CompareResultText = ({ chartDataList }: IProps) => {
  const [viewStringList, setViewStringList] = useState<string[]>([]);
  const [markText, setMarkText] = useState('');
  const [changeDirection, setChangeDirection] = useState('none');

  useEffect(() => {
    if (chartDataList.length === 1) {
      setViewStringList((pre) => [`${chartDataList[0].SUBMIT_DATE}년 건강점수는 ${chartDataList[0].SCORE}점 입니다.`]);
    } else if (chartDataList.length > 1) {
      const differenceYear =
        chartDataList[chartDataList.length - 1].SUBMIT_DATE - chartDataList[chartDataList.length - 2].SUBMIT_DATE;

      const differenceScore =
        Number(chartDataList[chartDataList.length - 1].SCORE) - Number(chartDataList[chartDataList.length - 2].SCORE);

      const yearInfo = differenceYear === 1 ? '지난해' : `${chartDataList[chartDataList.length - 2].SUBMIT_DATE}`;

      if (differenceScore > 0) {
        setViewStringList((pre) => ['총점이', `${yearInfo}년 보다 `]);
        setMarkText(`${differenceScore}점 높아졌어요.`);
        setChangeDirection('positive');
      } else if (differenceScore === 0) {
        setViewStringList((pre) => ['총점이 지난해와 동일해요.']);
      } else {
        setViewStringList((pre) => ['총점이', `${yearInfo}년 보다 `]);
        setMarkText(`${differenceScore * -1}점 낮아졌어요.`);
        setChangeDirection('negative');
      }
    }
  }, [chartDataList]);

  return (
    <p className={styles.compareResultText}>
      {viewStringList.map((viewString, index) => {
        if (index === viewStringList.length - 1) {
          return viewString;
        }
        return (
          <>
            {viewString} <br />
          </>
        );
      })}
      <MarkText markText={markText} changeDirection={changeDirection} />
    </p>
  );
};

export default CompareResultText;
