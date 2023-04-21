import { payments } from "@/types";

interface IArgs {
  val: string;
  arr: payments;
}

export const handleFilterTable = ({ val, arr }: IArgs) => {
  if (!val) return arr;

  val = val.toLowerCase();

  const filteredBySearch = arr.filter((el) => {
    const values = Object.values(el);
    let isSearchedFor = false;

    // TODO refactor to use recursion
    values.forEach((v) => {
      if (typeof v === "object") {
        const objectValues = Object.values(v);
        objectValues.forEach((ov: any) => {
          ov = ov.toString().toLowerCase();
          if (ov.includes(val)) isSearchedFor = true;
        });
      } else {
        v = v.toString().toLowerCase();
        if (v.includes(val)) isSearchedFor = true;
      }
    });

    return isSearchedFor;
  });

  return filteredBySearch;
};
