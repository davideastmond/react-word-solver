import { WordListFilter } from "../filter.model";

export const wordSizeFilter: WordListFilter = {
  name: "wordSizeFilter",
  description: "Using wildcards only, matches words of given length",
  run: (input, filter, options) => {
    if (!filter.split("").every((c) => c === "#")) {
      throw new Error(
        "Invalid filter. Filter must only contain wildcard characters"
      );
    }

    return input.filter((word) => {
      if (options && options.negate) {
        return word.length !== filter.length;
      }
      return word.length === filter.length;
    });
  },
};
