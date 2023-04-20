import React from "react";
import {
  TableContainer,
  Paper,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { getDataField } from "@/utils/getDataField";
import { IProps } from "./Table.d";

const Table = ({ columns, rows }: IProps) => {
  return (
    <TableContainer sx={{ maxHeight: "60vh" }}>
      <MuiTable stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((c) => (
              <TableCell key={`columns-${c.name}`}>{c.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={`row-${r.id}`}>
              {columns.map((c) => (
                <TableCell key={`cell-${r.id}-${c.accessor}`}>
                  {getDataField(r, c.accessor)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
