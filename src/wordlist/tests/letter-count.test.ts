import { describe, expect, test } from "vitest";
import { getLetterCount, sortDescending } from "../letter-count";

describe("get letter count tests", () => {
  test("counts letters properly", () => {
    const testList: string[] = [
      "aardvark",
      "zoology",
      "bijoux",
      "capiscum",
      "effervecent",
      "hysteria",
      "question",
      "waxing",
    ];

    const res = getLetterCount(testList);
    expect(res).toEqual({
      A: 6,
      R: 4,
      D: 1,
      V: 2,
      K: 1,
      Z: 1,
      O: 5,
      L: 1,
      G: 2,
      Y: 2,
      B: 1,
      I: 5,
      J: 1,
      U: 3,
      X: 2,
      C: 3,
      P: 1,
      S: 3,
      M: 1,
      E: 6,
      F: 2,
      N: 3,
      T: 3,
      H: 1,
      Q: 1,
      W: 1,
    });
  });
  test("Test with sort function", () => {
    const testList: string[] = [
      "aardvark",
      "zoology",
      "bijoux",
      "capiscum",
      "effervecent",
      "hysteria",
      "question",
      "waxing",
    ];
    const res = getLetterCount(testList, sortDescending);
    expect(res).toEqual({
      A: 6,
      B: 1,
      C: 3,
      D: 1,
      E: 6,
      F: 2,
      G: 2,
      H: 1,
      I: 5,
      J: 1,
      K: 1,
      L: 1,
      M: 1,
      N: 3,
      O: 5,
      P: 1,
      Q: 1,
      R: 4,
      S: 3,
      T: 3,
      U: 3,
      V: 2,
      W: 1,
      X: 2,
      Y: 2,
      Z: 1,
    });
  });
  test("test with sort function lambda (descending)", () => {
    const testList: string[] = [
      "aardvark",
      "zoology",
      "bijoux",
      "capiscum",
      "effervecent",
      "hysteria",
      "question",
      "waxing",
    ];
    const res = getLetterCount(testList, (a, b) => {
      if (a[0] < b[0]) return 1;
      if (a[0] > b[0]) return -1;
      return 0;
    });
    expect(res).toEqual({
      Z: 1,
      Y: 2,
      X: 2,
      W: 1,
      V: 2,
      U: 3,
      T: 3,
      S: 3,
      R: 4,
      Q: 1,
      P: 1,
      O: 5,
      N: 3,
      M: 1,
      L: 1,
      K: 1,
      J: 1,
      I: 5,
      H: 1,
      G: 2,
      F: 2,
      E: 6,
      D: 1,
      C: 3,
      B: 1,
      A: 6,
    });
  });
});
