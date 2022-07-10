export interface ICommonResponse<DT> {
  items: DT[];
  offset: number;
  limit: number;
  total: number;
}
