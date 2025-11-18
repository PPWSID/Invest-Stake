import { ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'components/base/Image';
import { TopAssetItem } from 'data/TopAssetData';

const TopAssetCard = ({ TopAssetItem }: { TopAssetItem: TopAssetItem }): ReactElement => {
  return (
    <Stack gap={6} p={5} borderRadius={4} height={1} bgcolor="background.default">
      <Image src={TopAssetItem.icon} alt={TopAssetItem.subtitle} width={26} height={26} />
      <Box>
        <Typography variant="h4" color="common.white" mb={4}>
          {TopAssetItem.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {TopAssetItem.subtitle}
        </Typography>
        <Typography variant="body2" color={TopAssetItem.color} lineHeight={1.25}>
          +{TopAssetItem.increment}% from yesterday
        </Typography>
      </Box>
    </Stack>
  );
};

export default TopAssetCard;
