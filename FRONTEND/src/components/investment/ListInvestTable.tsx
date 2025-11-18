import { Chip, LinearProgress, TableCell, TableRow } from '@mui/material';
import { ListItem } from 'data/ListInvestmentData';
import { ReactElement } from 'react';

const ListItemRow = ({ ListItem }: { ListItem: ListItem }): ReactElement => {
  return (
    <TableRow>
      <TableCell
        align="left"
        component="th"
        variant="head"
        scope="row"
        sx={{
          color: 'common.white',
          fontSize: 'body1.fontSize',
        }}
      >
        {ListItem.id}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        {ListItem.name}
      </TableCell>
      <TableCell align="left">
        <LinearProgress
          variant="determinate"
          color={ListItem.color}
          value={ListItem.sales}
          sx={{
            bgcolor: 'grey.900',
          }}
        />
      </TableCell>
      <TableCell align="center">
        <Chip
          label={`${ListItem.sales}%`}
          color={ListItem.color as any}
          variant="outlined"
          size="medium"
        />
      </TableCell>
    </TableRow>
  );
};

export default ListItemRow;
