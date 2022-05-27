import { COLORS } from '../color';

const PredictGraphStyle = {
  chart: {
    height: 250,
  },

  bar: {
    barWidth: 35,
    barRatio: 1,
    cornerRadius: 0,
  },

  label: {
    dy: -15,
    fontSize: 20,
  },

  line: {
    style: {
      data: { stroke: COLORS.$GREY_02 },
    },
  },

  scratter: {
    style: {
      data: { fill: COLORS.$GREY_02, stroke: COLORS.$GREY_02, strokeWidth: 5 },
    },
  },

  axis: {
    style: {
      axis: {
        stroke: 'transparent',
      },
      grid: {
        stroke: 'transparent',
      },
      tickLabels: { fontSize: 20 },
    },
  },
};

export default PredictGraphStyle;
