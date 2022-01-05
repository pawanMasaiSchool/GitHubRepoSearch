export const STORE_DATA = "STORE_DATA";

export const AddingData = (dataArr) => {
  return {
    type: STORE_DATA,
    payload: dataArr
  };
};
