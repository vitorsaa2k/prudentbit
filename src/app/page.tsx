import { UserCard } from "@/components/userCard";
import data from "../../public/MOCK_DATA 1.json";
import { User } from "@/types/user";
import { Header } from "@/components/header";

const patients = data as User[];

export default function Home() {
	return (
		<main>
			<Header />
			<div className="grid-cols-4 grid gap-6">
				{patients.map(user => (
					<UserCard key={user.patient_id} user={user} />
				))}
			</div>
		</main>
	);
}
