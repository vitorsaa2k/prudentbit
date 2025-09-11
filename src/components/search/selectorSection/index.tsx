import { Filter } from "./filter";
import { ViewSelector } from "./viewSelector";

export function Selector() {
	return (
		<section className="flex justify-between">
			<ViewSelector />
			<Filter />
		</section>
	);
}
