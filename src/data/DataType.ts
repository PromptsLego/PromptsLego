export type DataType = {
  categories?: {
    name?: string;
    color?: string;
  }[];
  tables?: {
    category?: string;
    minorCategories?: {
      name?: string;
      number?: number;
      legos?: {
        keyWord?: string;
        detail?: string;
        useTime?: number;
        color?: string;
        varNum?: number;
      }[];
    }[];
  }[];
};
