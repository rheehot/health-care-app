import { COLORS } from './index';

export interface IConvertedData {
  x: number;
  y: number;
  fill: { bar: string; label: string; scatter: string };
}

const init: IConvertedData[] = [];

export const convertToData = (curCost: number, afterCost?: number) =>
  [curCost, afterCost].reduce((acc, cost, i) => {
    if (cost)
      acc[i] = {
        x: i + 1,
        y: cost,
        fill: i
          ? { bar: '#ff833d', label: '#F56C3F', scatter: COLORS.WHITE }
          : { bar: '#ffd303', label: '#6B6A6A', scatter: COLORS.GRAY_01 },
      };
    return acc;
  }, init);

export const convertNumToUnit = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
