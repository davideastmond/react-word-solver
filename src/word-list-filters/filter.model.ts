export interface WordListFilter {
  name: string;
  description?: string;
  example?: string;
  run: (
    input: string[],
    filter: string,
    options?: { negate?: boolean }
  ) => string[];
}

export enum WordListFilterType {
  ContainsPhrase = "containsPhrase",
  ContainsPhraseNegate = "containsPhraseNegate",

  ContainsEachCharacter = "containsEachCharacter",
  ContainsEachCharacterNegate = "containsEachCharacterNegate",

  ContainsOrEachCharacter = "containOrEachCharacter",
  ContainsOrEachCharacterNegate = "containOrEachCharacterNegate",

  EndsWithFilter = "endsWithFilter",
  EndsWithFilterNegate = "endsWithFilterNegate",

  StartsWithFilter = "startsWithFilter",
  StartsWithFilterNegate = "startsWithFilterNegate",

  WildCardFilter = "wildCardFilter",
  WildCardFilterNegate = "wildCardFilterNegate",

  WordSizeFilter = "wordSizeFilter",
  WordSizeFilterNegate = "wordSizeFilterNegate",
}
