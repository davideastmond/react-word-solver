import { WordListFilter } from "../filter.model";

export const startsWithFilter: WordListFilter = {
  name: "startsWith",
  description:
    "Returns words that start with the filter string. Wildcard chars aren't allowed.",
  run: (input, filter, options) => {
    return input.filter((word) => {
      return options?.negate
        ? !word.startsWith(filter)
        : word.startsWith(filter);
    });
  },
};

export const endsWithFilter: WordListFilter = {
  name: "endsWith",
  description:
    "Returns words that end with the filter string. Wildcard chars aren't allowed",
  run: (input, filter, options) => {
    return input.filter((word) => {
      return options?.negate ? !word.endsWith(filter) : word.endsWith(filter);
    });
  },
};
