export const dateFormatter = (params) =>
  new Date(Number(params.data.openTime)).toLocaleDateString("en-UK").toString();
