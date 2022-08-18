import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface IStore {
  name: string;
  revenue: number;
}

interface IData {
  data: IStore[];
}

interface Column {
  id: 'name' | 'revenue';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Loja', minWidth: 340 },
  { id: 'revenue', label: 'Faturamento', minWidth: 50 }
];

export const List = ({ data }:IData) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

   const format = (value:number) => (
    value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  )

  return (
      <Paper sx={{ width: '100%', overflow: 'hidden'}} >
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={data.name}>
                      {columns.map((column) => {
                        const value = data[column.id];
                        const minBilling = value < 15000 ? 'error.main' : '';
                        return (
                          <TableCell key={column.id} align={column.align} sx={{
                            color: `${minBilling}`,
                            lineHeight: '0.2rem'
                          }}>
                            {typeof value  === 'number'
                              ? format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
  );
}
