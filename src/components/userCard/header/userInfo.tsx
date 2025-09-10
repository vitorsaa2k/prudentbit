import { User } from "@/types/user";

export function UserInfo({ user }: { user: User }) {
	return (
		<div>
			<p>{user.patient_name}</p>
			<p className="font-medium text-[14px]">ID-{user.patient_id}</p>
		</div>
	);
}
