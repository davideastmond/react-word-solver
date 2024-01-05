import { WordListFilter } from "../filter.model";

export const wildCardFilter: WordListFilter = {
  name: "wildCardFilter",
  description: "Using hastags as wildcards, filter characters.",
  run: (input, filter, options) => {
    // First filter by word length
    return input.filter((word) => {
      if (options?.negate) {
        return !(word.length === filter.length && filterFunction(word, filter));
      }
      return word.length === filter.length && filterFunction(word, filter);
    });
  },
};

const filterFunction = (input: string, filter: string): boolean => {
  const splitFilter: string[] = filter.split("");
  const splitWord = input.split("");

  for (let i = 0; i < splitFilter.length; i++) {
    if (splitFilter[i] === "#") continue;
    if (splitFilter[i] !== splitWord[i]) return false;
  }
  return true;
};
