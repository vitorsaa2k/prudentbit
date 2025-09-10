import { User } from "@/types/user";
import { UserCardBody } from "./body";
import { UserCardHeader } from "./header";

export function UserCard({ user }: { user: User }) {
	return (
		<div className="font-semibold rounded-2xl shadow-[4px_4px_15.9px_rgba(0,0,0,0.25)]">
			<UserCardHeader user={user} />
			<UserCardBody user={user} />
		</div>
	);
}
