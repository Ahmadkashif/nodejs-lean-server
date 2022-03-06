export interface PageRequest {
  limit: number;
  offset: number;
  page: number;
}

export interface PageResponse {
  pageSize: number;
  pageNumber: number;
  totalPages: number;
  totalItems: number;
}
