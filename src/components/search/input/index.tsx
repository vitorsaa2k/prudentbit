import { FilterIcon } from "../selectorSection/filter/filterIcon";
import { SearchIcon } from "./searchIcon";

export function SearchInput() {
	return (
		<label className="flex border-[#8F8F8F] border justify-between items-center px-4 rounded flex-1">
			<div className="flex flex-1 items-center gap-3">
				<SearchIcon />
				<input
					className="placeholder-[#3B82F6] w-full appearance-none bg-transparent border-none outline-none"
					placeholder="Search"
				/>
			</div>
			<FilterIcon />
		</label>
	);
}
