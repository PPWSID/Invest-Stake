import { ReactElement } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import {TopAssetItemData } from 'data/TopAssetData';
import TopAssetCard from './TopAssetCard';

const TopAsset = (): ReactElement => {
  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={1.25}>
        Today’s Top Stake Investment
      </Typography>
      <Typography variant="subtitle2" color="text.disabled" mb={6}>
        Updating ...
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 4, sm: 6 }}>
        {TopAssetItemData.map((item) => (
            <Box key={item.sequnce} gridColumn={{ xs: 'span 12', sm: 'span 6', lg: 'span 3' }}>
            <TopAssetCard TopAssetItem={item} />
            </Box>
        ))}
        </Box>
    </Paper>
  );
};

export default TopAsset;
