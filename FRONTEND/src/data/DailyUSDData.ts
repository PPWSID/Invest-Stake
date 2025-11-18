export interface DailyUSDProps {
  name: string;
  value: number;
}

export const changePercent = 6.25;

export const timeLabels = {
  day: "Day",
  month: "Month",
  year: "Year",
};

export const generateDayData = (): DailyUSDProps[] => {
  const days = ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'];
  return days.map((day, i) => ({
    name: `${day} ${15 + i} ต.ค.`,
    value: 12 + Math.random() * 3 + Math.sin(i * 0.5) * 1.5,
  }));
};

export const generateMonthData = (): DailyUSDProps[] => {
  const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  return months.map((month, i) => ({
    name: month,
    value: 10 + Math.random() * 5 + Math.sin(i * 0.3) * 2,
  }));
};

export const generateYearData = (): DailyUSDProps[] => {
  const years = ['2020', '2021', '2022', '2023', '2024'];
  return years.map((year, i) => ({
    name: year,
    value: 8 + Math.random() * 8 + i * 1.5,
  }));
};

export const getChartData = (timeRange: 'Day' | 'Month' | 'Year'): DailyUSDProps[] => {
  switch (timeRange) {
    case 'Day':
      return generateDayData();
    case 'Month':
      return generateMonthData();
    case 'Year':
      return generateYearData();
    default:
      return generateDayData();
  }
};
