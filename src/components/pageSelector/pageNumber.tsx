"use client";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export function PageNumber({ number }: { number: number }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const page = searchParams.get("page");
	const limit = searchParams.get("limit");
	const input = searchParams.get("input");
	const sort = searchParams.get("sort");
	function goToPage() {
		router.push(`?page=${number}&limit=${limit}&input=${input}&sort=${sort}`);
	}
	if (!page) return;
	return (
		<div onClick={goToPage}>
			<p
				className={cn(
					parseInt(page) === number && "border",
					"p-1 hover:cursor-pointer hover:bg-gray-300/50 rounded min-w-8 flex justify-center"
				)}
			>
				{number}
			</p>
		</div>
	);
}
