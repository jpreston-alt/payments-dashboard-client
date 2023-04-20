import { IPayment } from "@/types.d";

interface IColumn {
  name: string;
  accessor: string;
}

export interface IProps {
  columns: IColumn[];
  rows: IPayment[];
}
