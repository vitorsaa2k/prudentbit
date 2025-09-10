import { cn } from "@/lib/utils";
import { MedicalIssueType } from "@/types/user";
import { capitalizeFirstLetter } from "@/utils/capFirstLetter";

export function MedicalIssue({
	medicalIssue,
}: {
	medicalIssue: MedicalIssueType;
}) {
	const capitalizedIssue = capitalizeFirstLetter(medicalIssue);
	return (
		<div
			className={cn(
				capitalizedIssue === "Fever" && "bg-[#DC2626]/40 border-[#FF0000]",
				capitalizedIssue === "Headache" && "bg-[#F57C0B]/40 border-[#EA7100]",
				capitalizedIssue === "Sore throat" &&
					"bg-[#EAB308]/40 border-[#BA8D00]",
				capitalizedIssue === "Sprained ankle" &&
					"bg-[#10B981]/40 border-[#03A972]",
				capitalizedIssue === "Rash" && "bg-[#EC4899]/40 border-[#EC4899]",
				capitalizedIssue === "Ear infection" &&
					"bg-[#06B6D4]/40 border-[#00A2BD]",
				capitalizedIssue === "Sinusitis" && "bg-[#4A4A4A]/40 border-[#000000]",
				"border inline-block rounded px-1 font-semibold"
			)}
		>
			<p>{capitalizedIssue}</p>
		</div>
	);
}
