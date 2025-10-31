import { redirect } from "next/navigation";

export default function Home() {
	redirect(`/patients/?page=1&limit=20&input=&sort=`);
}
