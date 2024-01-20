export const validateInput = (
  len: number,
  input: [string, string][]
): boolean => {
  let fnd: boolean = false;

  if (input.length === 0) return false;
  if (input.every((element) => element[1] === "" || element[1] === undefined))
    return false;

  for (let i = len - 1; i >= 0; i--) {
    if (!input[i] && !fnd) {
      continue;
    }
    if (input[i] && (input[i][1] === "" || input[i][1] === undefined)) {
      if (fnd) return false;
      continue;
    }
    if (input[i] && input[i][1] !== undefined) {
      fnd = true;
    }
  }

  return true;
};
