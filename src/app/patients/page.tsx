import { Header } from "@/components/header";
import { PageSelector } from "@/components/pageSelector";
import { Search } from "@/components/search";
import { UserCardContainer } from "@/features/userCardContainer";

export default function PatientsPage() {
	return (
		<main>
			<Header />
			<Search />
			<UserCardContainer />
			<PageSelector />
		</main>
	);
}
