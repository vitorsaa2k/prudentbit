export function UserAge({ userAge }: { userAge: number }) {
	return (
		<div className="bg-[#3B82F6] text-white px-[12px] py-[6px] rounded-[50px] text-[0.75rem]">
			<p>Age:{userAge}</p>
		</div>
	);
}
