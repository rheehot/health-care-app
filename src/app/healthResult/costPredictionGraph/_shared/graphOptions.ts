import { COLORS } from 'app/healthResult/_shared';

export const GRAPH_OPTIONS = {
  axis: {
    tickValues: ['나', '10년 후'],
    style: {
      axis: { strokeWidth: 0 },
      tickLabels: { fill: COLORS.$GREY_03, fontWeight: 700, fontSize: 20, padding: 20 },
    },
  },
  bar: {
    animate: {
      duration: 1000,
      onLoad: { duration: 500 },
    },
  },
  line: {
    style: {
      data: { stroke: COLORS.$GREY_02 },
    },
    animate: { duration: 1000, onLoad: { duration: 1500 } },
  },
  scatter: {
    width: 50,
    size: 5,
  },
};
