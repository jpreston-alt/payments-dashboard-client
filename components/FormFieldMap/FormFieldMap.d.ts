export interface IProps {
  name: string;
  component: "TextField" | "Select";
  type?: string;
  options?: { name: string; value: string }[];
}
