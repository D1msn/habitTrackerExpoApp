export type EnumDictionary<T extends string | symbol | number, U> = {
  [key in T]: U;
} & Record<string, U>;
