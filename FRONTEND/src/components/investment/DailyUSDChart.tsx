import { ReactElement, useMemo } from 'react';
import * as echarts from 'echarts';
import { LineSeriesOption } from 'echarts';
import ReactEChart from 'components/base/ReactEChart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { alpha, SxProps, useTheme } from '@mui/material';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { DailyUSDProps} from 'data/DailyUSDData';

type DailyUSDChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  data?: DailyUSDProps[];
  sx?: SxProps;
};

type DailyUSDChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const DailyUSDChart = ({
    chartRef,
    data = [],
    ...rest
  }: DailyUSDChartProps): ReactElement => {
  const theme = useTheme();

  const option: DailyUSDChartOptions = useMemo(() => ({
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'line' },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map(d => d.name), 
      axisLine: {
        lineStyle: {
          color: alpha(theme.palette.common.white, 0.06),
        },
      },
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        type: 'line',
        smooth: true,
        data: data.map(d => d.value), 
        lineStyle: { width: 2, color: theme.palette.secondary.main },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: theme.palette.secondary.main },
            { offset: 1, color: theme.palette.grey[900] },
          ]),
        },
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 5,
      },
    ],
  }), [data, theme]);

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest} />;
};


export default DailyUSDChart;
