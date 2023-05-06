export interface AdvancedSearchModel {
  value: string;
  type: AdvancedSearchTypes;
}

export type AdvancedSearchTypes =
  | 'category'
  | 'muscle'
  | 'force'
  | 'difficulty';
