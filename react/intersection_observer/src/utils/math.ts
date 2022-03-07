/* eslint-disable import/prefer-default-export */
export const range = (start: number, step: number): number[] => {
  return Array.apply(0, Array(start + step - 1)).map((element, index) => {
    return index + start;
  });
};
