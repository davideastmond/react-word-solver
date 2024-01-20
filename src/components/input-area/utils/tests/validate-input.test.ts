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
        ["0", "r"],
        ["1", "a"],
        ["2", "b"],
        ["3", "t"],
        ["4", "i"],
        ["5", "o"],
        ["6", "n"],
        ["7", "e"],
      ],
      true,
    ],
    [
      8,
      [
        ["0", "r"],
        ["1", "a"],
        ["2", "b"],
        ["3", "t"],
        ["4", ""],
        ["5", "o"],
        ["6", "n"],
        ["7", "e"],
      ],
      false,
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
    [0, [], false],
    [
      8,
      [
        ["0", "#"],
        ["1", "#"],
        ["2", undefined],
        ["3", "i"],
        ["4", "o"],
        ["5", "n"],
      ],
      false,
    ],
    [
      8,
      [
        ["0", "#"],
        ["1", "#"],
        ["2", ""],
        ["3", "i"],
        ["4", "o"],
        ["5", "n"],
      ],
      false,
    ],
    [
      8,
      [
        ["0", "#"],
        ["1", "#"],
        ["2", undefined],
        ["3", "i"],
        ["4", "o"],
        ["5", "n"],
        ["6", "#"],
        ["7", "#"],
      ],
      false,
    ],
    [8, [[], [], [], [], [], [], [], []], false] as any,
  ];
  test.each(testCases)(
    "with %s characters, with input %s evaluates filter string properly, expect result %s",
    (length, input, expectedResult) => {
      const res = validateInput(length, input as any);
      expect(res).toBe(expectedResult);
    }
  );
});
