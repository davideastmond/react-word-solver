import { beforeEach, describe, expect, test, vitest } from "vitest";
import { loadWordList } from "../word-list";

describe("Word list loading", () => {
  beforeEach(() => {
    vitest.restoreAllMocks();
  });

  test("load word list function retrieves and formats data properly", async () => {
    // Mock the result of fetch.
    globalThis.fetch = vitest.fn(() => {
      return Promise.resolve({
        text: () => Promise.resolve("zzz\naaaaa\nbbbbbb\nccccccc\ndddddddd"),
      }) as any;
    });
    const res = await loadWordList();
    expect(res.length).toBe(4);
    expect(res).toEqual(["AAAAA", "BBBBBB", "CCCCCCC", "DDDDDDDD"]);
  });

  const testCases: Array<[string, number, number, string[]]> = [
    ["ajkl\nqwrt\nyuio\nklopq", 4, 4, ["AJKL", "QWRT", "YUIO"]],
    ["ajkl\nqwrt\nyuio\nklopq\neightwod", 5, 8, ["KLOPQ", "EIGHTWOD"]],
    ["ajkl\nqwrt\nyuio\nklopq\neightwody", 8, 8, []],
    [
      "a\nqw\nyui\nklop\neight\niklner\nfhnkewr\nzefkeonb",
      1,
      8,
      ["A", "QW", "YUI", "KLOP", "EIGHT", "IKLNER", "FHNKEWR", "ZEFKEONB"],
    ],
  ];
  test.each(testCases)(
    "Customized min and max word length values",
    async (input, minLength, maxLength, expectedResult) => {
      globalThis.fetch = vitest.fn(() => {
        return Promise.resolve({
          text: () => Promise.resolve(input),
        }) as any;
      });
      const res = await loadWordList(minLength, maxLength);
      expect(res).toEqual(expectedResult);
    }
  );
});
