import React from "react";
import {
  TableRow,
  TableCell,
  TableBody as MuiTableBody,
  Typography,
  Box,
} from "@mui/material";
import { getDataField } from "@/utils/getDataField";
import { IProps } from "../Table.d";

const TableBody = ({ columns, rows }: IProps) => {
  return (
    <MuiTableBody>
      {rows.map((r) => (
        <TableRow key={`row-${r.id}`}>
          {columns.map((c) => (
            <TableCell key={`cell-${r.id}-${c.accessor}`}>
              {getDataField(r, c.accessor)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
