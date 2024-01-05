import { describe, expect, test } from "vitest";
import { validateInput } from "../validate-input";

describe("input validation tests", () => {
  const testCases: [number, Array<[string, string | undefined]>, boolean][] = [
    [
      8,
      [
        ["0", "#"],
        ["1", "#"],
        ["2", "#"],
        ["3", "#"],
        ["4", "#"],
        ["5", "#"],
        ["6", "#"],
        ["7", "#"],
      ],
      true,
    ],
    [
      8,
      [
        ["0", "#"],
        ["1", "#"],
        ["2", "t"],
        ["3", "i"],
        ["4", "o"],
        ["5", "n"],
      ],
      true,
    ],
    [
      8,
      [
        ["0", "#"],
        ["2", undefined],
        ["2", "#"],
        ["3", "#"],
        ["4", "#"],
        ["5", "#"],
        ["6", "#"],
        ["7", "#"],
      ],
      false,
    ],
    [8, [["7", undefined]], false],
  ];
  test.each(testCases)(
    " evaluates filter string properly",
    (length, input, expectedResult) => {
      const res = validateInput(length, input as any);
      expect(res).toBe(expectedResult);
    }
  );
});
