import { StringPrototype, StringType } from "@kakasoo/proto-typescript";
import { StringToDeepObject } from "./types";

export function getSortable<
  Key extends string,
  Direction extends "asc" | "desc"
>(
  key: Key,
  direction: Direction
): StringToDeepObject<StringType.Split<Key, ".">, Direction> {
  const sortable: any = {};
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
