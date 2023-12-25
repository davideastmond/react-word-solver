export async function loadWordList(
  minLength: number = 5,
  maxLength: number = 8
): Promise<string[]> {
  const data = await fetch("./wordlist.txt");
  return (await data.text())
    .split("\n")
    .filter((word) => word.length >= minLength && word.length <= maxLength);
}
