import { COLORS } from 'app/healthResult/_shared';

export const GRAPH_OPTIONS = {
  axis: {
    tickValues: ['나', '10년 후'],
    style: {
      axis: { strokeWidth: 0 },
      tickLabels: { fill: COLORS.$GREY_03, fontWeight: 700, fontSize: 23, padding: 20 },
    },
  },
  bar: {
    barWidth: 60,
    animate: {
      duration: 500,
      onLoad: { duration: 1000 },
    },
  },
  line: {
    style: {
      data: { stroke: COLORS.$GREY_02 },
    },
    animate: { duration: 0, onLoad: { duration: 2500 } },
  },
  scatter: {
    size: 6,
  },
};
