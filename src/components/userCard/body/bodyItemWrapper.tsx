import { ReactNode } from "react";

export function BodyItemWrapper({ children }: { children: ReactNode }) {
	return <div className="flex gap-2">{children}</div>;
}
