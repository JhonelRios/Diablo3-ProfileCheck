import numeral from 'numeral';

export function useFormatNumber(num) {
  if (!num) return 0;

  return numeral(Number(num)).format();
}
