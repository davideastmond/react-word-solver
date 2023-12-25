import { describe, expect, test } from "vitest";
import {
  containOrEachCharacter,
  containsEachCharacter,
  containsPhrase,
} from "../contains-string-filter";

describe("contains string filter tests", () => {
  describe("contains each individual character", () => {
    describe("positive case", () => {
      const cases: Array<[string[], string, string[]]> = [
        [
          ["ahjkebc", "jkabcoe", "bcoieaj", "defgbcr"],
          "abc",
          ["ahjkebc", "jkabcoe", "bcoieaj"],
        ],
        [
          ["carbonozation", "jkabcoe", "tumericlittle", "defgbcr"],
          "z",
          ["carbonozation"],
        ],
        [
          [
            "staycation",
            "carbonation",
            "bellification",
            "defgbcr",
            "annunciasion",
          ],
          "tion",
          ["staycation", "carbonation", "bellification"],
        ],
        [
          [
            "staycation",
            "carbonation",
            "bellification",
            "defgbcr",
            "annunciasion",
          ],
          "vh",
          [],
        ],
      ];
      test.each(cases)(
        "individual character tests",
        (input, filter, expected) => {
          const res = containsEachCharacter.run(input, filter);
          expect(res).toEqual(expected);
          expect(res.length).toBe(expected.length);
        }
      );
    });
    describe("negative case", () => {
      const cases: Array<[string[], string, string[]]> = [
        [
          ["somullier", "derogon", "foabicus", "vorbace"],
          "abc",
          ["somullier", "derogon"],
        ],
        [["somulgiht", "htgerogonu", "foabicusyguht", "abc"], "ought", ["abc"]],
        [["from", "smorf", "ghmoref", "morph"], "frm", []],
      ];
      test.each(cases)(
        "contains individual character, negative scenarios",
        (input, filter, expected) => {
          const res = containsEachCharacter.run(input, filter, {
            negate: true,
          });
          expect(res).toEqual(expected);
          expect(res.length).toBe(expected.length);
        }
      );
    });
  });
  describe("phrase matcher tests", () => {
    describe("positive case", () => {
      const cases: Array<[string[], string, string[]]> = [
        [
          ["evergreen", "forever", "byevery", "efvoeor"],
          "ever",
          ["evergreen", "forever", "byevery"],
        ],
        [["glot", "joshing", "byevery", "efvoeor"], "not", []],
        [
          ["glot", "joshing", "byevery", "efvoeor"],
          "e",
          ["byevery", "efvoeor"],
        ],
      ];
      test.each(cases)("phrase matching", (input, filter, expected) => {
        const res = containsPhrase.run(input, filter);
        expect(res).toEqual(expected);
        expect(res.length).toBe(expected.length);
      });
    });
    describe("negative case", () => {
      const cases: Array<[string[], string, string[]]> = [
        [["evergreen", "forever", "byevery", "efvoeor"], "ever", ["efvoeor"]],
        [
          ["glot", "joshing", "byevery", "efvoeor"],
          "not",
          ["glot", "joshing", "byevery", "efvoeor"],
        ],
        [["glot", "joshing", "byevery", "efvoeor"], "e", ["glot", "joshing"]],
        [["gleot", "joeshing", "byevery", "efvoeor"], "e", []],
      ];
      test.each(cases)("phrase matching", (input, filter, expected) => {
        const res = containsPhrase.run(input, filter, { negate: true });
        expect(res).toEqual(expected);
        expect(res.length).toBe(expected.length);
      });
    });
  });
  describe("containOrEachCharacter tests", () => {
    describe("positive cases", () => {
      const cases: Array<[string[], string, string[]]> = [
        [["cvgjklwr", "polwrasz", "bhseropl", "poqxbmjh"], "cvg", ["cvgjklwr"]],
        [
          ["monoid", "friend", "icecube", "poqxbmjh"],
          "id",
          ["monoid", "friend", "icecube"],
        ],
        [["monoyt", "fryent", "ycecube", "poqxbmjh"], "id", []],
      ];
      test.each(cases)("positive condition", (input, filter, expected) => {
        const res = containOrEachCharacter.run(input, filter, {
          negate: false,
        });
        expect(res).toEqual(expected);
        expect(res.length).toBe(expected.length);
      });
    });
    describe("negative cases", () => {
      const cases: Array<[string[], string, string[]]> = [
        [
          ["bunny", "funny", "cartool", "spatula"],
          "ny",
          ["cartool", "spatula"],
        ],
        [
          ["sleet", "yamicka", "restoration", "argyle", "tremble"],
          "st",
          ["yamicka", "argyle"],
        ],
        [
          ["sleet", "yamicka", "restoration", "argyle", "tremble"],
          "hz",
          ["sleet", "yamicka", "restoration", "argyle", "tremble"],
        ],
        [["sleet", "yamicka", "restoration", "argyle", "tremble"], "sanyb", []],
      ];
      test.each(cases)(
        "negative case for or each character",
        (input, filter, expected) => {
          const res = containOrEachCharacter.run(input, filter, {
            negate: true,
          });
          expect(res).toEqual(expected);
          expect(res.length).toBe(expected.length);
        }
      );
    });
  });
});
