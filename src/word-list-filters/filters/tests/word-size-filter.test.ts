import { describe, expect, test } from "vitest";
import { wordSizeFilter } from "../word-size-filter";

describe("Word size filters", () => {
  describe("positive case", () => {
    const cases: Array<[string[], string, string[]]> = [
      [["apple", "crapple", "drapple", "zappled"], "#####", ["apple"]],
      [
        ["apple", "crappl", "drappl", "zapple"],
        "######",
        ["crappl", "drappl", "zapple"],
      ],
      [["apple", "crappl", "drappl", "zapple"], "########", []],
    ];
    test.each(cases)(
      "should return correct filtered list",
      (input, filter, expected) => {
        const res = wordSizeFilter.run(input, filter);
        expect(res).toEqual(expected);
        expect(res.length).toBe(expected.length);
      }
    );
  });
  describe("negative case", () => {
    const cases: Array<[string[], string, string[]]> = [
      [
        ["apple", "crapple", "drapple", "zappled"],
        "#####",
        ["crapple", "drapple", "zappled"],
      ],
      [
        ["eightish", "crappley", "drappled", "tzapping", "night"],
        "########",
        ["night"],
      ],
      [["tray", "fray", "brey", "crow", "nigh"], "####", []],
    ];
    test.each(cases)(
      "negative result returns corrected filtered list",
      (input, filter, expected) => {
        const res = wordSizeFilter.run(input, filter, { negate: true });
        expect(res).toEqual(expected);
        expect(res.length).toBe(expected.length);
      }
    );
  });
  test("test throw conditions when given valid or invalid input", () => {
    expect(() => wordSizeFilter.run(["apple"], "a####")).toThrow();
    expect(() =>
      wordSizeFilter.run(["apple"], "a####", { negate: true })
    ).toThrow();
    expect(() => wordSizeFilter.run(["apple"], "#####")).not.toThrow();
  });
});
