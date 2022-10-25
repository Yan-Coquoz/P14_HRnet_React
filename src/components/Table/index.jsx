/* eslint-disable no-unused-vars */
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { fromLowerToUpperCase } from "Utils";

const columns = [
  { id: "firstName", label: "first name", minWidth: 100 },
  {
    id: "lastName",
    label: "last name",
    minWidth: 100,
    format: (value) => fromLowerToUpperCase(value),
  },
  { id: "startDate", label: "start date", minWidth: 100 },
  {
    id: "department",
    label: "department",
    minWidth: 100,
    align: "right",
  },
  { id: "birthDate", label: "birth date", minWidth: 100 },

  {
    id: "street",
    label: "street",
    minWidth: 100,
    align: "right",
  },
  { id: "city", label: "city", minWidth: 100 },
  { id: "states", label: "state", minWidth: 100 },
  {
    id: "zipCode",
    label: "zip code",
    minWidth: 100,
    format: (value) => value,
  },
];

function createData(
  firstName,
  lastName,
  startDate,
  department,
  birthDate,
  street,
  city,
  states,
  zipCode,
) {
  return {
    firstName,
    lastName,
    startDate,
    department,
    birthDate,
    street,
    city,
    states,
    zipCode,
  };
}

const rows = [
  // exemple de rendu
  createData(
    "John",
    "Doe",
    "15-12-2022",
    "sales",
    "18-10-1976",
    "22 long road",
    "Houston",
    "Texas",
    56324,
  ),
];

export default function StickyHeadTable({ datas }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isDatas, setIsDatas] = React.useState(false);
  React.useEffect(() => {
    // console.log(isDatas);
    if (datas.length > 0 && Array.isArray(datas)) {
      setIsDatas(true);
      // console.log("rows ", rows);
      // console.log("datas length ", datas.length);
      rows.length = 0;
      for (let i = 0; i < datas.length; i++) {
        // console.log("datas ", datas[i]);
        const {
          firstName,
          lastName,
          startDate,
          department,
          birthDate,
          street,
          city,
          states,
          zipCode,
        } = datas[i];

        rows.push(
          createData(
            firstName,
            lastName,
            startDate,
            department,
            birthDate,
            street,
            city,
            states,
            zipCode,
          ),
        );
      }
    } else {
      setIsDatas(false);
    }
  }, [datas, isDatas]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, key) => (
                <TableCell
                  key={key}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {fromLowerToUpperCase(column.label)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, key) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
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
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
