'use client'
import { useState, PropsWithChildren, createContext, useContext } from "react";
import { FieldOption } from "~/models/field";

export enum Operators {
  equal = "eq",
  not_equal = "neq",
  contains = "cont",
  in = "in",
  not_contains = "ncont",
  greater_than = "gt",
  less_than = "lt",
  before = "before",
  after = "after",
}

export type FilterValue = string | number | boolean | Date | Array<String> ;

export type FilterCondition = [string, Operators, FilterValue];

type ContextState = {
  selectedFilters: FilterCondition[];
  setSelectedFilters(value: FilterCondition[]): void;
};

export const FilterContext = createContext<ContextState | null>(null);

export const FilterProvider = (props: PropsWithChildren) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterCondition[]>([]);

  return (
    <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("Please use filter provider in the parent element");
  }
  return context;
};
