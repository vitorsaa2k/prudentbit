"use client";

import { useSearch } from "@/context/SearchContext";

export function HeaderTitle() {
	const search = useSearch();
	return (
		<div className="ml-[41px] flex flex-col justify-center text-white">
			<h1 className="font-bold text-[40px]">Patient Directory</h1>
			<p className="text-[20px]">{search.pagination?.total} Patient Found</p>
		</div>
	);
}
