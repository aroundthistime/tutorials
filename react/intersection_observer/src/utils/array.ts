/* eslint-disable import/prefer-default-export */
export const range = (start: number, step: number): number[] => {
  return Array.apply(0, Array(step)).map((element, index) => {
    return index + start;
  });
};

export const getSubarrayWithOnlyLastItem = (array: any[]): any[] => {
  return array.slice(array.length - 1, array.length);
};
