/**
 * Returns a record of each letter and the number of times it appears in the list
 * @param list The list of words to count the letters of
 * @param sortFunction defaults to ascending alphabetical order. Pass in a custom sort function to change this
 * @returns {Record<string, number>} A record of each letter and the number of times it appears in the list
 */
export const getLetterCount = (
  list: string[],
  sortFunction?: (a: [string, number], b: [string, number]) => number
): Record<string, number> => {
  const letterCount: Record<string, number> = {};
  list.forEach((word) => {
    for (let c of word.toUpperCase().split("")) {
      if (letterCount[c] === undefined) {
        letterCount[c] = 0;
      }
      letterCount[c]++;
    }
  });

  if (sortFunction) {
    return Object.fromEntries(Object.entries(letterCount).sort(sortFunction));
  }

  return letterCount;
};

export const sortDescending = (
  a: [string, number],
  b: [string, number]
): number => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};
