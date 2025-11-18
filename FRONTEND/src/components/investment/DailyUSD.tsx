import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { Box, Button, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import DailyUSDChart from './DailyUSDChart';
import { currencyFormat } from 'helpers/format-functions';
import { DailyUSDProps , getChartData} from 'data/DailyUSDData';

type TimeRange = 'Day' | 'Month' | 'Year';

const DailyDataCard = (): ReactElement => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [selectedRange, setSelectedRange] = useState<TimeRange>('Day');
  const [chartData, setChartData] = useState<DailyUSDProps[]>(getChartData('Day'));

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const getDataDailyUSD = useCallback(
  //   (chartData: number[]) => {
  //     return currencyFormat(chartData.reduce((prev, current) => prev + current, 0));
  //   },
  //   []
  // );

  const getDataDailyUSD = useCallback(
    (item: DailyUSDProps) => currencyFormat(item.value),
    []
  );

  const handleTimeChange = (range: TimeRange) => {
    setSelectedRange(range);
    setChartData(getChartData(range));
  };

  const timeRanges: { label: string; value: TimeRange; color: string }[] = [
    { label: 'Day', value: 'Day', color: theme.palette.secondary.main },
    { label: 'Month', value: 'Month', color: theme.palette.secondary.main },
    { label: 'Year', value: 'Year', color: theme.palette.secondary.main },
  ];

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      {/* Header + Buttons */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} pt={2}>
        <Typography variant="h4" color="common.white">
          Daily USD Cost
        </Typography>

        <Stack direction="row" spacing={1}>
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              size="small"
              variant={selectedRange === range.value ? 'contained' : 'text'}
              onClick={() => handleTimeChange(range.value)}
              sx={{
                fontSize: '0.875rem',
                px: 2,
                py: 0.5,
                minWidth: 70,
                height: 32,
                color: selectedRange === range.value ? 'common.white' : 'text.disabled',
                bgcolor: selectedRange === range.value ? range.color : 'transparent',
                '&:hover': {
                  bgcolor:
                    selectedRange === range.value
                      ? range.color
                      : alpha(theme.palette.common.white, 0.1),
                },
              }}
            >
              {range.label}
            </Button>
          ))}
        </Stack>
      </Stack>

      {/* Chart */}
      <DailyUSDChart chartRef={chartRef} sx={{ height: '220px !important', flexGrow: 1, mt: 2 }} data={chartData} />

      {/* Data display */}
      <Stack
        direction="row"
        justifyContent="space-around"
        divider={<Divider orientation="vertical" flexItem sx={{ borderColor: alpha(theme.palette.common.white, 0.06), height: 1 }} />}
        px={2}
        pt={3}
        sx={{ transitionProperty: 'all', transitionDelay: '1s' }}
      >
        {chartData.map((item) => (
          <Stack key={item.name} gap={1.25} alignItems="center">
            <Typography variant="body2" color="common.white">
              {item.name}
            </Typography>
            <Typography variant="body2" color="common.white">
              {getDataDailyUSD(item)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};

export default DailyDataCard;
