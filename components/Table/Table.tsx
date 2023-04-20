import React from "react";
import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  Card,
  CardContent,
  Box,
  TableContainer,
} from "@mui/material";
import { IProps } from "./Table.d";
import TableBody from "./ui/TableBody";

const Table = ({ columns, rows }: IProps) => {
  return (
    <Box component={Card} mt={4}>
      <CardContent>
        <TableContainer sx={{ height: "65vh" }}>
          <MuiTable stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((c) => (
                  <TableCell key={`columns-${c.name}`}>{c.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody rows={rows} columns={columns} />
          </MuiTable>
        </TableContainer>
      </CardContent>
    </Box>
  );
};

export default Table;
