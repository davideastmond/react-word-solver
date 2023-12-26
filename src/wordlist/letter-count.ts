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
