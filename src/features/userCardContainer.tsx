"use client";
import { UserCard } from "@/components/userCard";
import { useSearch } from "@/context/SearchContext";

export function UserCardContainer() {
	const search = useSearch();
	if (search.userList === null) return;
	return (
		<div className="grid-cols-4 grid gap-6 mx-7">
			{search.userList.map(user => (
				<UserCard key={user.patient_id} user={user} />
			))}
		</div>
	);
}
