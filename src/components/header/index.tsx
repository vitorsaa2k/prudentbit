import { HeaderImg } from "./headerImg";
import { HeaderTitle } from "./title";

export function Header() {
	return (
		<header className="bg-[#3B82F6] flex justify-center sm:justify-between mb-[17px]">
			<HeaderTitle />
			<HeaderImg />
		</header>
	);
}
