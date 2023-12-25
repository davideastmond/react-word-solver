import { describe, expect, test } from "vitest";
import { wildCardFilter } from "../wild-card-filter";

describe("Wildcard filter tests", () => {
  describe("positive match", () => {
    const cases: Array<[string[], string, string[]]> = [
      [
        ["mante", "vanatee", "muybhe", "markee", "varkee", "mulbe"],
        "m###e",
        ["mante", "mulbe"],
      ],
      [
        ["yavbtxnr", "mapboxwr", "aavbtxbr", "waabgxcr", "waabgxcri"],
        "#a###x#r",
        ["yavbtxnr", "mapboxwr", "aavbtxbr", "waabgxcr"],
      ],
      [
        ["fubarific", "tubarific", "cabarific", "subarific"],
        "##barific",
        ["fubarific", "tubarific", "cabarific", "subarific"],
      ],
      [["fubarific", "tubarific", "cabarific", "subarific"], "##ific", []],
      [
        ["conora", "donora", "eorofg", "bnjkre", "ionicft"],
        "######",
        ["conora", "donora", "eorofg", "bnjkre"],
      ],
    ];
    test.each(cases)("wild card filters work", (input, filter, result) => {
      const res: string[] = wildCardFilter.run(input, filter);
      expect(res).toEqual(result);
      expect(res).toHaveLength(result.length);
    });
  });
  describe("negative match", () => {
    const cases: Array<[string[], string, string[]]> = [
      [
        ["aardv", "cuidv", "burdv", "conway", "matchup"],
        "###dv",
        ["conway", "matchup"],
      ],
      [
        ["zarvtur", "zorvber", "zirvmov", "conway", "matchup"],
        "z#rv###",
        ["conway", "matchup"],
      ],
      [
        ["zarvtur", "zorvber", "zirvmov", "conway", "matchup"],
        "#gib",
        ["zarvtur", "zorvber", "zirvmov", "conway", "matchup"], // Nothing gets filtered out
      ],
    ];
    test.each(cases)("negative case", (input, filter, expected) => {
      const res = wildCardFilter.run(input, filter, { negate: true });
      expect(res).toEqual(expected);
    });
  });
});
