import Image from "next/image";

export function UserImage({ imgUrl }: { imgUrl: string }) {
	return <Image width={48} height={48} alt="user image" src={imgUrl} />;
}
