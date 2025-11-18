import { ReactElement } from 'react';
import { Box } from '@mui/material';

import TopAsset from 'components/investment/TopAsset';
import DailyUSD from 'components/investment/DailyUSD';
import ListInvestMent from 'components/investment/ListInvestStock'

const Investment = (): ReactElement => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
        <Box gridColumn={{ xs: 'span 12', '2xl': 'span 8' }} order={{ xs: 0 }}>
          <TopAsset />
        </Box>
        <Box gridColumn={{ xs: 'span 12', lg: 'span 4' }} order={{ xs: 1, '2xl': 1 }}>
          <DailyUSD />
        </Box>
        <Box gridColumn={{ xs: 'span 12', lg: 'span 12' }} order={{ xs: 2, '2xl': 2 }}>
          <ListInvestMent />
        </Box>
        {/* <Box 
          gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }}
          order={{ xs: 3, xl: 3, '2xl': 3 }}
        >
         {/* <CustomerFulfillment />
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }}
          order={{ xs: 4, xl: 5, '2xl': 4 }}
        >
          <Earnings />
        </Box>
        <Box gridColumn={{ xs: 'span 12', xl: 'span 8' }} order={{ xs: 5, xl: 4, '2xl': 5 }}>
          <VisitorInsights />
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', xl: 'span 8', '2xl': 'span 6' }}
          order={{ xs: 6, '2xl': 6 }}
        >
          <TrendingNow />
        </Box>
        <Box gridColumn={{ xs: 'span 12', '2xl': 'span 6' }} order={{ xs: 7 }}>
          <Customers />
        </Box> */}
      </Box>
    </>
  );
};

export default Investment;
