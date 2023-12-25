export interface WordListFilter {
  name: string;
  description?: string;
  example?: string;
  run: (
    input: string[],
    filter: string,
    options?: { negate?: boolean }
  ) => string[];
}
