import { LinearProgressProps } from '@mui/material';

export interface ListItem {
  id?: string;
  name: string;
  color: LinearProgressProps['color'];
  sales: number;
}

export const listTableRows: ListItem[] = [
  { id: '01', name: 'Home Decor Range', color: 'warning', sales: 78 },
  { id: '02', name: 'Disney Princess Dress', color: 'primary', sales: 62 },
  { id: '03', name: 'Bathroom Essentials', color: 'info', sales: 51 },
  { id: '04', name: 'Apple Smartwatch', color: 'secondary', sales: 29 },

  { id: '05', name: 'Bluetooth Speaker', color: 'success', sales: 83 },
  { id: '06', name: 'Wireless Earbuds', color: 'info', sales: 57 },
  { id: '07', name: 'Office Chair Premium', color: 'primary', sales: 92 },
  { id: '08', name: 'LED Desk Lamp', color: 'warning', sales: 63 },
  { id: '09', name: 'Portable Charger', color: 'secondary', sales: 71 },
  { id: '10', name: 'Yoga Mat Comfort', color: 'success', sales: 68 },

  { id: '11', name: 'Laptop Sleeve 15"', color: 'primary', sales: 84 },
  { id: '12', name: 'Kids Learning Tablet', color: 'info', sales: 76 },
  { id: '13', name: 'Kitchen Knife Set', color: 'secondary', sales: 53 },
  { id: '14', name: 'Air Purifier Mini', color: 'warning', sales: 47 },
  { id: '15', name: 'Gaming Mouse RGB', color: 'primary', sales: 95 },
  { id: '16', name: 'Running Shoes Pro', color: 'info', sales: 66 },
  { id: '17', name: 'T-Shirt Cotton', color: 'secondary', sales: 39 },
  { id: '18', name: 'Wireless Keyboard', color: 'success', sales: 89 },
  { id: '19', name: 'Smart LED Bulb', color: 'warning', sales: 45 },
  { id: '20', name: 'Travel Backpack', color: 'primary', sales: 72 },

  { id: '21', name: 'Winter Jacket Warm', color: 'secondary', sales: 88 },
  { id: '22', name: 'Scented Candle Set', color: 'info', sales: 51 },
  { id: '23', name: 'Sunglasses UV400', color: 'success', sales: 43 },
  { id: '24', name: 'Minimalist Wallet', color: 'primary', sales: 69 },
  { id: '25', name: 'Cotton Bedsheet', color: 'warning', sales: 87 },
  { id: '26', name: 'Laptop Stand Adjustable', color: 'info', sales: 74 },
  { id: '27', name: 'Hair Dryer Pro', color: 'secondary', sales: 61 },
  { id: '28', name: 'Makeup Kit Starter', color: 'primary', sales: 58 },
  { id: '29', name: 'Coffee Beans Premium', color: 'success', sales: 49 },
  { id: '30', name: 'Sports Water Bottle', color: 'info', sales: 63 },

  { id: '31', name: 'Wireless Doorbell', color: 'warning', sales: 91 },
  { id: '32', name: 'Camping Tent 2P', color: 'primary', sales: 77 },
  { id: '33', name: 'Smart Thermometer', color: 'secondary', sales: 34 },
  { id: '34', name: 'Massage Gun Mini', color: 'success', sales: 95 },
  { id: '35', name: 'Leather Belt Men', color: 'info', sales: 73 },
  { id: '36', name: 'Robot Vacuum Cleaner', color: 'primary', sales: 86 },
  { id: '37', name: 'Cat Food Premium', color: 'warning', sales: 58 },
  { id: '38', name: 'Dog Harness Soft', color: 'info', sales: 44 },
  { id: '39', name: 'Shoe Rack Steel', color: 'secondary', sales: 52 },
  { id: '40', name: 'Electric Kettle', color: 'primary', sales: 71 },

  { id: '41', name: 'Table Clock Retro', color: 'success', sales: 69 },
  { id: '42', name: 'Hiking Boots', color: 'warning', sales: 94 },
  { id: '43', name: 'Baby Blanket Soft', color: 'info', sales: 63 },
  { id: '44', name: 'Office Organizer Tray', color: 'primary', sales: 72 },
  { id: '45', name: 'Stainless Pan Set', color: 'secondary', sales: 51 },
  { id: '46', name: 'Phone Holder Car', color: 'success', sales: 88 },
  { id: '47', name: '4K Webcam Pro', color: 'primary', sales: 93 },
  { id: '48', name: 'Electric Toothbrush', color: 'warning', sales: 56 },
  { id: '49', name: 'Bluetooth Headset', color: 'secondary', sales: 62 },
  { id: '50', name: 'Waterproof Jacket', color: 'info', sales: 58 },

  { id: '51', name: 'Hand Mixer', color: 'primary', sales: 71 },
  { id: '52', name: 'Cookie Jar Vintage', color: 'success', sales: 64 },
  { id: '53', name: 'Monitor Light Bar', color: 'warning', sales: 53 },
  { id: '54', name: 'Electric Fan Desk', color: 'info', sales: 32 },
  { id: '55', name: 'Wireless Printer', color: 'secondary', sales: 89 },
  { id: '56', name: 'HD Projector', color: 'primary', sales: 72 },
  { id: '57', name: 'Bike Helmet Pro', color: 'success', sales: 68 },
  { id: '58', name: 'Smart Switch WiFi', color: 'warning', sales: 57 },
  { id: '59', name: 'Standing Hanger', color: 'info', sales: 41 },
  { id: '60', name: 'Garden Tools Set', color: 'secondary', sales: 78 },

  { id: '61', name: 'Keyboard Mechanical', color: 'primary', sales: 92 },
  { id: '62', name: 'Drone Mini 1080p', color: 'warning', sales: 65 },
  { id: '63', name: 'Thermos Bottle', color: 'success', sales: 47 },
  { id: '64', name: 'Portable Stove Gas', color: 'info', sales: 53 },
  { id: '65', name: 'Suitcase 24-inch', color: 'primary', sales: 81 },
  { id: '66', name: 'Soft Toys Plush', color: 'secondary', sales: 45 },
  { id: '67', name: 'Printer Paper A4', color: 'success', sales: 82 },
  { id: '68', name: 'Studio Microphone', color: 'warning', sales: 75 },
  { id: '69', name: 'Phone Tripod', color: 'primary', sales: 69 },
  { id: '70', name: 'Portable Fan Rechargeable', color: 'info', sales: 55 },

  { id: '71', name: 'Smart Scale Body', color: 'primary', sales: 91 },
  { id: '72', name: 'LED Strip Lights', color: 'secondary', sales: 57 },
  { id: '73', name: 'Cooling Pillow', color: 'warning', sales: 64 },
  { id: '74', name: 'Notebook Hardcover', color: 'success', sales: 77 },
  { id: '75', name: 'Wrist Wraps Gym', color: 'info', sales: 42 },
  { id: '76', name: 'Humidifier Cool Mist', color: 'primary', sales: 83 },
  { id: '77', name: 'Bike Pump Portable', color: 'warning', sales: 49 },
  { id: '78', name: 'Wall Shelf Floating', color: 'secondary', sales: 58 },
  { id: '79', name: 'Car Vacuum Mini', color: 'success', sales: 71 },
  { id: '80', name: 'Bluetooth Keyboard Slim', color: 'info', sales: 69 },
];