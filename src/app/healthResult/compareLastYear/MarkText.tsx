import cx from 'classnames';
import styles from './compareLastYear.module.scss';

interface IProps {
  markText: string;
  changeDirection: string;
}

const MarkText = ({ markText, changeDirection }: IProps) => {
  if (markText === '') {
    return null;
  }
  return (
    <mark
      className={cx(
        styles.markText,
        { [styles.positiveColor]: changeDirection === 'positive' },
        { [styles.negativeColor]: changeDirection === 'negative' }
      )}
    >
      {markText}
    </mark>
  );
};

export default MarkText;
