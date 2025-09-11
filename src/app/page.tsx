"use client";
import { Header } from "@/components/header";
import { Search } from "@/components/search";
import { UserCardContainer } from "@/features/userCardContainer";

export default function Home() {
	return (
		<main>
			<Header />
			<Search />
			<UserCardContainer />
		</main>
	);
}
