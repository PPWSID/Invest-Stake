import totalSales from 'assets/images/todays-sales/total-sales.png';
import totalOrder from 'assets/images/todays-sales/total-order.png';
import productSold from 'assets/images/todays-sales/product-sold.png';
import newCustomer from 'assets/images/todays-sales/new-customer.png';

export interface TopAssetProps {
  sequnce: number;
  title: string;
  chance: number;
  current_cost: number;
  goal_cost: number;
  increment: number;
}

export const TopAssetData: TopAssetProps[] = [
  { sequnce: 1, title: "NVDA", chance: 10.99, current_cost: 428.75, goal_cost: 567.43, increment: 6.65 },
  { sequnce: 2, title: "TSLA", chance: 2.01, current_cost: 428.75, goal_cost: 567.43, increment: 6.65 },
  { sequnce: 3, title: "VOO", chance: 5.66, current_cost: 428.75, goal_cost: 567.43, increment: 6.65 },
  { sequnce: 4, title: "SPY", chance: 3.66, current_cost: 428.75, goal_cost: 567.43, increment: 6.65 }
];

export interface TopAssetItem {
  sequnce: number;
  icon: string;
  title: string;
  subtitle: string;
  goal_cost: number;
  increment: number;
  color: string;
}

const icons = [totalSales, totalOrder, productSold, newCustomer];
const colors = ['warning.main', 'primary.main', 'secondary.main', 'info.main'];

export const TopAssetItemData: TopAssetItem[] = TopAssetData.map((item, index) => ({
  sequnce: item.sequnce,
  icon: icons[index],
  title: item.title,
  subtitle: `Goal: ${item.goal_cost}`,
  goal_cost: item.goal_cost,
  increment: item.increment,
  color: colors[index]
}));
