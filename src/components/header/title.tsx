"use client";

import { useSearch } from "@/context/SearchContext";

export function HeaderTitle() {
	const search = useSearch();
	const totalFound = search.pagination?.total ?? 0;
	return (
		<div className="sm:ml-[41px] flex flex-col justify-center text-white">
			<h1 className="font-bold text-[40px]">Patient Directory</h1>
			<p className="text-[20px]">
				{totalFound} Patient
				{totalFound === 1 ? null : "s"} Found
			</p>
		</div>
	);
}
