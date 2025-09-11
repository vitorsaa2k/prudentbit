import { User } from "@/types/user";

export async function getUsers(input?: string) {
	return await fetch(`/api/user/${input}`)
		.then(res => res.json())
		.then((data: User[]) => data);
}
