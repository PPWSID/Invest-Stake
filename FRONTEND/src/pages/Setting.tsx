import { ReactElement } from 'react';
import { Box } from '@mui/material';
import NotFound404 from './error/ErrorPage';

const SettingPage = (): ReactElement => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
      <Box gridColumn={{ xs: 'span 12', '2xl': 'span 12' }} order={{ xs: 12 }}>
        <NotFound404 />
      </Box>
    </Box>
  );
};

export default SettingPage;
