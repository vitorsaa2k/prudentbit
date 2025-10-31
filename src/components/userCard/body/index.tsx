import { User } from "@/types/user";
import { MedicalIssue } from "./medicalIssue";
import { LocationIcon } from "../icons/locationIcon";
import { PhoneIcon } from "../icons/phoneIcon";
import { MailIcon } from "../icons/mailIcon";
import { cn } from "@/lib/utils";
import { BodyItemWrapper } from "./bodyItemWrapper";

export function UserCardBody({ user }: { user: User }) {
	return (
		<div className="flex-col flex gap-5 mt-[10px] ml-[18px] mb-5 font-medium">
			<div>
				<MedicalIssue medicalIssue={user.medical_issue} />
			</div>
			<BodyItemWrapper>
				<LocationIcon />
				<p className={cn(user.contact[0].address ?? "text-[#E60000]")}>
					{user.contact[0].address ?? "N/A"}
				</p>
			</BodyItemWrapper>
			<BodyItemWrapper>
				<PhoneIcon />
				<p className={cn(user.contact[0].number ?? "text-[#E60000]")}>
					{user.contact[0].number ?? "N/A"}
				</p>
			</BodyItemWrapper>
			<BodyItemWrapper>
				<MailIcon />
				<p
					className={cn(
						user.contact[0].email ?? "text-[#E60000]",
						"line-clamp-1"
					)}
				>
					{user.contact[0].email ?? "N/A"}
				</p>
			</BodyItemWrapper>
		</div>
	);
}
