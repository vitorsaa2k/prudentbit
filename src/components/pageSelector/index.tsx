"use client";

import { useSearch } from "@/context/SearchContext";
import { PageNumber } from "./pageNumber";
import { getPagesOffset } from "@/utils/getPageOffset";
import { useEffect, useState } from "react";

export function PageSelector() {
	const [currentWidth, setCurrentWidth] = useState<number>();
	useEffect(() => {
		function getWidth() {
			return Math.max(
				document.body.scrollWidth,
				document.documentElement.scrollWidth,
				document.body.offsetWidth,
				document.documentElement.offsetWidth,
				document.documentElement.clientWidth
			);
		}
		setCurrentWidth(getWidth());
	}, []);
	const { pagination } = useSearch();
	if (!pagination) return;
	const offsetPages = getPagesOffset(
		pagination.page,
		pagination.totalPages,
		currentWidth! > 640 ? 15 : 7
	);
	return (
		<div className="flex m-4 justify-center">
			{offsetPages.map(num => (
				<PageNumber key={num} number={num} />
			))}
		</div>
	);
}
