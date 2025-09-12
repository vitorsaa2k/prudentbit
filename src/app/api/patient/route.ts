import { User } from "@/types/user";
import data from "../../../../public/MOCK_DATA 1.json";
import { NextRequest, NextResponse } from "next/server";
const patients = data as User[];

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const page = searchParams.get("page");
	const limit = searchParams.get("limit");
	const input = searchParams.get("input");

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

	if (!input) {
		return NextResponse.json({
			data: data.slice(start, end),
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
