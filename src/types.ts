export type StringToDeepObject<
  T extends string[],
  LastValue extends any = {}
> = T extends [infer F extends string, ...infer Rest extends string[]]
  ? Rest["length"] extends 0
    ? Record<F, LastValue>
    : Record<F, StringToDeepObject<Rest, LastValue>>
  : never;
