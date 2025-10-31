import Image from "next/image";
import sortIcon from "../../../../public/SortOptionsImgPrudenbit.png";

export function SortIcon() {
	return <Image alt="sort icon" width={24} height={24} src={sortIcon} />;
}
