import { StringPrototype, StringType } from "@kakasoo/proto-typescript";
import { StringToDeepObject } from "./types";

type Split<U extends string> = U extends infer K extends string
  ? StringType.Split<K, ".">
  : never;

export function getSortable<
  Key extends string,
  Direction extends "asc" | "desc"
>(key: Key, direction: Direction): StringToDeepObject<Split<Key>, Direction> {
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
