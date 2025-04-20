export interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  next?: string;
  previous?: string;
} 