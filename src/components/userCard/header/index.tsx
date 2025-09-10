import { User } from "@/types/user";
import { UserImage } from "./userImage";
import { UserAge } from "./userAge";
import { UserInfo } from "./userInfo";

export function UserCardHeader({ user }: { user: User }) {
	return (
		<div className="flex items-center justify-between p-2 bg-[#B5D1FE] rounded-t-[10px]">
			<div className="flex gap-[13px]">
				<UserImage
					imgUrl={
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F024%2F983%2F914%2Flarge_2x%2Fsimple-user-default-icon-free-png.png&f=1&nofb=1&ipt=096708f991ec58b3d38d6c8acf788c18092b634a72fd5d9b2a97097adde84153"
					}
				/>
				<UserInfo user={user} />
			</div>
			<UserAge userAge={user.age} />
		</div>
	);
}
