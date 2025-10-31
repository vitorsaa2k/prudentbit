"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SortIcon } from "./sortIcon";
import { useState } from "react";
import { sortOptions } from "@/types/api";
import { useRouter, useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/capFirstLetter";

export function SortDropdown() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const page = searchParams.get("page");
	const limit = searchParams.get("limit");
	const input = searchParams.get("input");
	const sort = searchParams.get("sort") as sortOptions;
	const [sortOption, setSortOption] = useState<sortOptions>(sort);

	function changeSort(sort: sortOptions) {
		setSortOption(sort);
		router.push(`?page=${page}&limit=${limit}&input=${input}&sort=${sort}`);
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex gap-2">
				{sortOption ? capitalizeFirstLetter(sortOption) : "Options"}
				<SortIcon />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem onSelect={() => changeSort("id")}>
					Id
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => changeSort("name")}>
					Name
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => changeSort("age")}>
					Age &uarr;
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
