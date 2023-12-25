import { describe, expect, test } from "vitest";
import { endsWithFilter, startsWithFilter } from "../starts-ends-with-filter";

describe("starts-ends-with filter tests", () => {
  describe("startsWith filter", () => {
    describe("positive case", () => {
      const testCases: Array<[string[], string, string[]]> = [
        [["aabyu", "aacyu", "bbdyu", "ccbaa"], "aa", ["aabyu", "aacyu"]],
        [["cnuptag", "renovut", "rcantopene", "moltenrockf"], "c", ["cnuptag"]],
        [
          ["cnuptagar", "renovut", "rcantopene", "moltenrockf"],
          "cnuptag",
          ["cnuptagar"],
        ],
      ];
      test.each(testCases)(
        "starts with filter test cases should pass",
        (inputList, filter, output) => {
          const result = startsWithFilter.run(inputList, filter);
          expect(result).toEqual(output);
          expect(result.length).toBe(output.length);
        }
      );
    });
    describe("negative case", () => {
      const cases: Array<[string[], string, string[]]> = [
        [["string", "straight", "satire"], "str", ["satire"]],
        [["brother", "straight", "broth", "broccoli"], "bro", ["straight"]],
        [
          ["together", "straight", "broth", "broccoli"],
          "bre",
          ["together", "straight", "broth", "broccoli"],
        ],
        [["together", "topaz", "tooraloo", "tolapion"], "to", []],
      ];
      test.each(cases)(
        "negative case with startsWith",
        (input, filter, expected) => {
          const res = startsWithFilter.run(input, filter, { negate: true });
          expect(res).toEqual(expected);
          expect(res.length).toBe(expected.length);
        }
      );
    });
  });
  describe("endsWithFilter", () => {
    describe("positive case", () => {
      const testCases: Array<[string[], string, string[]]> = [
        [["aabyu", "aacyu", "bbdyu", "ccbaa"], "byu", ["aabyu"]],
        [["cnuptag", "renovut", "rcantopene", "moltenrockf"], "g", ["cnuptag"]],
        [
          ["cnuptagar", "renovutagar", "rcantopene", "moltenrockf"],
          "agar",
          ["cnuptagar", "renovutagar"],
        ],
        [
          ["puagar", "renovutagar", "rcantopeneagar", "moltenrockfagar"],
          "agar",
          ["puagar", "renovutagar", "rcantopeneagar", "moltenrockfagar"],
        ],
      ];
      test.each(testCases)(
        "endsWith filter test cases should work",
        (inputList, filter, output) => {
          const result = endsWithFilter.run(inputList, filter);
          expect(result).toEqual(output);
          expect(result.length).toBe(output.length);
        }
      );
    });
    describe("negative case", () => {
      const testCases: Array<[string[], string, string[]]> = [
        [["aabyu", "aacyu", "bbdyu", "ccbaa"], "yu", ["ccbaa"]],
        [
          ["cnuptag", "renovut", "rcantopene", "moltenrockf"],
          "g",
          ["renovut", "rcantopene", "moltenrockf"],
        ],
        [
          ["cnuptagar", "renovutagar", "rcantopene", "moltenrockf"],
          "agar",
          ["rcantopene", "moltenrockf"],
        ],
        [
          ["puagar", "renovutagar", "rcantopeneagar", "moltenrockfagar"],
          "agar",
          [],
        ],
      ];
      test.each(testCases)(
        "endsWith filter test cases should work",
        (inputList, filter, output) => {
          const result = endsWithFilter.run(inputList, filter, {
            negate: true,
          });
          expect(result).toEqual(output);
          expect(result.length).toBe(output.length);
        }
      );
    });
  });
});
