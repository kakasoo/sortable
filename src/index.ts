import { DeepStrictObjectKeys } from "@kakasoo/deep-strict-types";
import { StringPrototype } from "@kakasoo/proto-typescript";

export function getSortable<T extends object>(
  key: DeepStrictObjectKeys<T>,
  direction: "asc" | "desc"
) {
  const sortable: Record<string, any> = {};
  const keys = StringPrototype.split(key, ".");
  keys.reduce((acc, key, index, arr) => {
    if (arr.length === index + 1) {
      acc[key] = direction;
      return acc;
    } else {
      acc[key] = {};
      return acc[key];
    }
  }, sortable);

  return sortable;
}
