import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from "./variables";

export async function loadWordList(
  minLength: number = MIN_WORD_LENGTH,
  maxLength: number = MAX_WORD_LENGTH
): Promise<string[]> {
  const data = await fetch("./wordlist.txt");
  return (await data.text())
    .toUpperCase()
    .split("\n")
    .filter((word) => word.length >= minLength && word.length <= maxLength);
}
