export interface IConvertedData {
  x: number;
  y: number;
  fill: string;
}

const init: IConvertedData[] = [];

export const convertToData = (curCost: number, afterCost?: number) =>
  [curCost, afterCost].reduce((acc, cost, i) => {
    if (cost) acc[i] = { x: i + 1, y: cost, fill: i ? '#ff833d' : '#ffd303' };
    return acc;
  }, init);
