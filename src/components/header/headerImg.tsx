import Image from "next/image";
import headerImg from "../../../public/HeaderImgPrudenbit.png";

export function HeaderImg() {
	return (
		<Image
			className="max-lg:hidden"
			width={800}
			height={200}
			alt="header img"
			src={headerImg}
		/>
	);
}
