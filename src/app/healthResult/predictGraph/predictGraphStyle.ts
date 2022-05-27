import { COLORS, SIZES } from '../color';

const PredictGraphStyle = {
  chart: {
    domainPadding: 20,
    height: 250,
  },

  bar: {
    barWidth: 35,
    barRatio: 1,
    cornerRadius: 0,
  },

  label: {
    dy: -15,
    fontSize: SIZES.$REGULAR,
  },

  line: {
    style: {
      data: { stroke: COLORS.$GREY_02 },
    },
  },

  /*   scratter: {
    style: {
      data: { fill: COLORS.$GREY_02, stroke: COLORS.$GREY_02, strokeWidth: 5 },
    },
  }, */

  axis: {
    style: {
      axis: {
        stroke: 'transparent',
      },
      grid: {
        stroke: 'transparent',
      },
      ticks: {
        stroke: 'transparent',
      },
      tickLabels: { fontSize: SIZES.$REGULAR },
    },
  },
};

export default PredictGraphStyle;
