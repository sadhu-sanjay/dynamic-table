import { PropsWithChildren } from "react";

export enum Operators {
  equal = "eq",
  not_equal = "neq",
  contains = "cont",
  not_contains = "ncont",
  greater_than = "gt",
  less_than = "lt",
  before = "before",
  after = "after",
}

export type FilterValue = string | number | boolean | Date;

export type FilterCondition = [string, Operators, FilterValue];

type contextType = {
  filters: FilterCondition[];
  setFilters(value: FilterCondition[]): void;
};

