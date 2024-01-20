import { WordListFilter } from "../filter.model";

/**
 * Contains a contiguous phrase anywhere in the string. No wildcards. It can be negated by setting the negate option to true
 */
export const containsPhrase: WordListFilter = {
  name: "containsPhrase",
  description:
    "contains a contiguous phrase anywhere in the string. No wildcards",
  run: (input, filter, options) => {
    return input.filter((word) => {
      if (options && options.negate) {
        return !word.includes(filter);
      }
      return word.includes(filter);
    });
  },
};

/**
 * Each individual character in the filter must also be in the word. This is an AND operation. It can be negated by setting the negate option to true
 */
export const containsEachCharacter: WordListFilter = {
  name: "containsEachCharacter",
  description:
    "each individual character in the filter must also be in the word. This is an AND operation",
  run: (input, filter, options) => {
    const splitFilter: string[] = filter.split("");
    if (options?.negate) {
      return input.filter((word) => {
        let count: number = 0;
        for (let c of splitFilter) {
          if (!word.includes(c)) count++;
        }
        return count === splitFilter.length;
      });
    }
    return input.filter((word) => {
      for (let c of splitFilter) {
        if (!word.includes(c)) return false;
      }
      return true;
    });
  },
};

/**
 * Each character is checked in the filter as an OR statement: A OR B OR C. It can be negated by setting the negate option to true
 */
export const containOrEachCharacter: WordListFilter = {
  name: "containOrEachCharacter",
  description:
    "Each character is checked in the filter as an OR statement: A OR B OR C",
  run: (input, filter, options) => {
    const filterChars: string[] = filter.split("");
    if (options?.negate) {
      return input.filter((word) => {
        let candidateWord: string | null = null;
        for (let c of filterChars) {
          if (word.includes(c)) {
            candidateWord = word;
          }
        }
        if (candidateWord) return false;
        return true;
      });
    }
    return input.filter((word) => {
      for (let c of filterChars) {
        if (word.includes(c)) {
          return true;
        }
      }
      return false;
    });
  },
};
