import { User } from "@/types/user";
import data from "../../../../public/MOCK_DATA 1.json";
import { NextRequest, NextResponse } from "next/server";
import { sortOptions } from "@/types/api";
let patients = data as User[];

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const page = searchParams.get("page");
	const limit = searchParams.get("limit");
	const input = searchParams.get("input");
	const sort = searchParams.get("sort") as sortOptions;

	const pageNumber = Math.max(1, parseInt(page as string, 10));
	const pageSize = parseInt(limit as string, 10);

	if (!page || !limit) {
		return NextResponse.json({
			data: data.slice(0, 20),
			pagination: {
				total: data.length,
				page: pageNumber,
				pageSize,
				totalPages: Math.ceil(data.length / pageSize),
			},
		});
	}

	const start = (pageNumber - 1) * pageSize;
	const end = start + pageSize;

	switch (sort) {
		case "id":
			patients = patients.sort((a, b) => a.patient_id - b.patient_id);
			break;
		case "name":
			patients = patients.sort((a, b) =>
				a.patient_name.split(" ")[0].localeCompare(b.patient_name.split(" ")[0])
			);
			break;
		case "age":
			patients = patients.sort((a, b) => a.age - b.age);
		default:
			break;
	}

	if (!input) {
		return NextResponse.json({
			data: patients.slice(start, end),
			pagination: {
				total: data.length,
				page: pageNumber,
				pageSize,
				totalPages: Math.ceil(data.length / pageSize),
			},
		});
	}
	const filtered = patients.filter(p =>
		["patient_name", "medical_issue"].some(key =>
			String(p[key as keyof User])
				.toLowerCase()
				.includes(input.toLowerCase())
		)
	);

	const total = filtered.length;

	const paginatedItems = filtered.slice(start, end);

	return NextResponse.json(
		{
			data: paginatedItems,
			pagination: {
				total,
				page: pageNumber,
				pageSize,
				totalPages: Math.ceil(total / pageSize),
			},
		},
		{ status: 200 }
	);
}
