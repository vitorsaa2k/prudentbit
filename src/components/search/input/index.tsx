"use client";
import { useSearch } from "@/context/SearchContext";
import { FilterIcon } from "../selectorSection/filter/filterIcon";
import { SearchIcon } from "./searchIcon";

export function SearchInput() {
	const search = useSearch();
	return (
		<label className="flex border-[#8F8F8F] border justify-between items-center px-4 rounded flex-1">
			<div className="flex flex-1 items-center gap-3">
				<SearchIcon />
				<input
					onChange={e => {
						search.setInput(e.currentTarget.value);
					}}
					className="placeholder-[#3B82F6] w-full appearance-none bg-transparent border-none outline-none"
					placeholder="Search"
				/>
			</div>
			<FilterIcon />
		</label>
	);
}
