import { NextRequest, NextResponse } from "next/server";
import data from "../../../../../public/MOCK_DATA 1.json";
import { User } from "@/types/user";

const patients = data as User[];

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ search: string }> }
) {
	const { search } = await params;
	if (search.length === 0) return NextResponse.json(patients, { status: 200 });
	const filtered = patients.filter(p =>
		["patient_name", "medical_issue"].some(key =>
			String(p[key as keyof User])
				.toLowerCase()
				.includes(search.toLowerCase())
		)
	);
	if (filtered.length === 0) return NextResponse.json(null, { status: 404 });

	return NextResponse.json(filtered, { status: 200 });
}
