import { PaginatedPatients, sortOptions } from "@/types/api";

export async function getPaginatedPatients(
	page: number,
	limit: number,
	input?: string,
	sortOption?: sortOptions
) {
	return await fetch(
		`/api/patient?page=${page}&limit=${limit}&input=${input}&sort=${sortOption}`
	)
		.then(res => res.json())
		.then((data: PaginatedPatients) => data);
}
