export const getDataField = (data: object, accessor: string) => {
  const split = accessor.split(".");
  const res = split.reduce(
    (accumulator: any, currentValue: string) => accumulator[currentValue],
    data
  );
  return res;
};
