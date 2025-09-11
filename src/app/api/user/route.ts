import { NextRequest, NextResponse } from "next/server";
import data from "../../../../public/MOCK_DATA 1.json";
import { User } from "@/types/user";

const patients = data as User[];

export async function GET(req: NextRequest) {
	/* const filtered = patients.filter((p) =>
    ["name", "email", "medical_issue"].some((key) =>
      String(p[key as keyof User]).toLowerCase().includes(query.toLowerCase())
    )
  ); */
	return NextResponse.json(patients, { status: 200 });
}
