import { SearchInput } from "./input";
import { Selector } from "./selectorSection";
import { Sort } from "./sort";

export function Search() {
	return (
		<div className="mx-[38px] mb-[58px] flex flex-col gap-4">
			<Selector />
			<div className="flex justify-between gap-8">
				<SearchInput />
				<Sort />
			</div>
		</div>
	);
}
