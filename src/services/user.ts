import { PaginatedPatients } from "@/types/api";

export async function getPaginatedPatients(
	page: number,
	limit: number,
	input?: string
) {
	return await fetch(`/api/patient?page=${page}&limit=${limit}&input=${input}`)
		.then(res => res.json())
		.then((data: PaginatedPatients) => data);
}
