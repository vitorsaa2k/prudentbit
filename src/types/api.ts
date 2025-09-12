import { User } from "./user";

export interface Pagination {
	total: number;
	page: number;
	pageSize: number;
	totalPages: number;
}
export interface ApiResponse {
	data: unknown;
	ok: boolean;
	message?: string;
}

export interface PaginatedPatients extends ApiResponse {
	data: User[];
	pagination: Pagination;
}
