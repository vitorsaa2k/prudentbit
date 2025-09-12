"use client";

import { useSearch } from "@/context/SearchContext";
import { PageNumber } from "./pageNumber";
import { getPagesOffset } from "@/utils/getPageOffset";
import { Suspense } from "react";

export function PageSelector() {
	const { pagination } = useSearch();
	if (!pagination) return;
	const offsetPages = getPagesOffset(pagination.page, pagination.totalPages);
	return (
		<div className="flex m-4 justify-center">
			<Suspense>
				{offsetPages.map(num => (
					<PageNumber key={num} number={num} />
				))}
			</Suspense>
		</div>
	);
}
