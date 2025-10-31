import { SortDropdown } from "./sortDropdown";

export function Sort() {
	return (
		<div className="flex justify-center gap-5 items-center">
			<p className="font-extrabold text-[20px] text-[#3B82F6]">Sort by:</p>
			<div className="flex border p-4 rounded gap-2">
				<SortDropdown />
			</div>
		</div>
	);
}
