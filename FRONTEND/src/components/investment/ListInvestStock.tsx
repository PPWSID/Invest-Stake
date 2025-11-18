import { ReactElement, useState } from 'react';
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  TablePagination,
  Box,
} from '@mui/material';
import SimpleBar from 'simplebar-react';
import ListItemRow from './ListInvestTable';
import { listTableRows } from 'data/ListInvestmentData';

const ListInvestMent = (): ReactElement => {
  // ---- Pagination State ----
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // ---- Slice data ----
  const paginatedRows = listTableRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // ---- Handlers ----
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" color="common.white" mb={6}>
        Top Products
      </Typography>

      {/* -------- Table Scroll Area -------- */}
      <Box sx={{ flexGrow: 1 }}>
        <TableContainer component={SimpleBar}>
          <Table sx={{ minWidth: 440 }}>
            <TableHead>
              <TableRow>
                <TableCell align="left">#</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Popularity</TableCell>
                <TableCell align="center">Sales</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((product) => (
                <ListItemRow key={product.id} ListItem={product} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* -------- Pagination at bottom -------- */}
      <Box mt={2}>
        <TablePagination
          component="div"
          count={listTableRows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  );
};

export default ListInvestMent;
