import { beforeEach, describe, expect, test, vitest } from "vitest";
import { WordListFilterType } from "../../filter.model";
import {
  containOrEachCharacter,
  containsEachCharacter,
  containsPhrase,
} from "../../filters/contains-string-filter";
import {
  endsWithFilter,
  startsWithFilter,
} from "../../filters/starts-ends-with-filter";
import { wildCardFilter } from "../../filters/wild-card-filter";
import { wordSizeFilter } from "../../filters/word-size-filter";
import { runFilter } from "../filter-runner";

describe("filter runner tests", () => {
  beforeEach(() => {
    vitest.restoreAllMocks();
  });

  test("word list is empty", () => {
    const filterRunnerResult: string[] = runFilter(
      [],
      "test",
      WordListFilterType.WordSizeFilter
    );
    expect(filterRunnerResult).toEqual([]);
  });

  test("filter string is empty", () => {
    const filterRunnerResult: string[] = runFilter(
      ["test"],
      "",
      WordListFilterType.WordSizeFilter
    );
    expect(filterRunnerResult).toEqual([]);
  });
  describe("run commands", () => {
    const testFilterString = "test";
    const testCases = [
      [wildCardFilter, WordListFilterType.WildCardFilter, testFilterString],
      [
        wildCardFilter,
        WordListFilterType.WildCardFilterNegate,
        testFilterString,
      ],
      [wordSizeFilter, WordListFilterType.WordSizeFilter, "#####"],
      [wordSizeFilter, WordListFilterType.WordSizeFilterNegate, "#####"],
      [startsWithFilter, WordListFilterType.StartsWithFilter, testFilterString],
      [
        startsWithFilter,
        WordListFilterType.StartsWithFilterNegate,
        testFilterString,
      ],
      [endsWithFilter, WordListFilterType.EndsWithFilter, testFilterString],
      [
        endsWithFilter,
        WordListFilterType.EndsWithFilterNegate,
        testFilterString,
      ],
      [
        containOrEachCharacter,
        WordListFilterType.ContainsOrEachCharacter,
        testFilterString,
      ],
      [
        containOrEachCharacter,
        WordListFilterType.ContainsOrEachCharacterNegate,
        testFilterString,
      ],
      [
        containsEachCharacter,
        WordListFilterType.ContainsEachCharacter,
        testFilterString,
      ],
      [
        containsEachCharacter,
        WordListFilterType.ContainsEachCharacterNegate,
        testFilterString,
      ],
      [containsPhrase, WordListFilterType.ContainsPhrase, testFilterString],
      [
        containsPhrase,
        WordListFilterType.ContainsPhraseNegate,
        testFilterString,
      ],
    ];
    test.each(testCases)(
      "The run command is called for each case: %# %o",
      (filter, filterType, testFilterString) => {
        const filterFunctionSpy = vitest.spyOn(filter as any, "run");
        runFilter(
          ["test"],
          testFilterString as string,
          filterType as WordListFilterType
        );
        expect(filterFunctionSpy).toHaveBeenCalled();
      }
    );
  });
});
