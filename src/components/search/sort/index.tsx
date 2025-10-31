import { SortCombobox } from "./sortCombobox";

export function Sort() {
	return (
		<div className="flex justify-center gap-5 items-center">
			<p className="font-extrabold text-[20px] text-[#3B82F6]">Sort by:</p>
			<div className="flex border rounded gap-2">
				<SortCombobox />
			</div>
		</div>
	);
}
