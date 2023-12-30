import { WordListFilterType } from "../filter.model";
import {
  containOrEachCharacter,
  containsEachCharacter,
  containsPhrase,
} from "../filters/contains-string-filter";
import {
  endsWithFilter,
  startsWithFilter,
} from "../filters/starts-ends-with-filter";
import { wildCardFilter } from "../filters/wild-card-filter";
import { wordSizeFilter } from "../filters/word-size-filter";

// Takes a list of words, a filter, runs it and then outputs resulting wordlist
export function runFilter(
  wordList: string[],
  filterString: string,
  filterType: WordListFilterType
): string[] {
  if (wordList.length === 0) {
    console.error("runFilter exited out");
    return [];
  }
  if (filterString === "") {
    console.error("runFilter exited out");
    return [];
  }

  switch (filterType) {
    // Word size
    case WordListFilterType.WordSizeFilter:
      return wordSizeFilter.run(wordList, filterString);
    case WordListFilterType.WordSizeFilterNegate:
      return wordSizeFilter.run(wordList, filterString, { negate: true });

    // Wild card
    case WordListFilterType.WildCardFilter:
      return wildCardFilter.run(wordList, filterString);
    case WordListFilterType.WildCardFilterNegate:
      return wildCardFilter.run(wordList, filterString, { negate: true });

    // Starts with
    case WordListFilterType.StartsWithFilter:
      return startsWithFilter.run(wordList, filterString);
    case WordListFilterType.StartsWithFilterNegate:
      return startsWithFilter.run(wordList, filterString, { negate: true });

    // Ends with
    case WordListFilterType.EndsWithFilter:
      return endsWithFilter.run(wordList, filterString);
    case WordListFilterType.EndsWithFilterNegate:
      return endsWithFilter.run(wordList, filterString, { negate: true });

    // Contains Phrase
    case WordListFilterType.ContainsPhrase:
      return containsPhrase.run(wordList, filterString);
    case WordListFilterType.ContainsPhraseNegate:
      return containsPhrase.run(wordList, filterString, { negate: true });

    // Contains eachCharacter
    case WordListFilterType.ContainsEachCharacter:
      return containsEachCharacter.run(wordList, filterString);
    case WordListFilterType.ContainsEachCharacterNegate:
      return containsEachCharacter.run(wordList, filterString, {
        negate: true,
      });

    // Contains each character or
    case WordListFilterType.ContainsOrEachCharacter:
      return containOrEachCharacter.run(wordList, filterString);
    case WordListFilterType.ContainsOrEachCharacterNegate:
      return containOrEachCharacter.run(wordList, filterString, {
        negate: true,
      });
  }
}
