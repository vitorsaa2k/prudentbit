"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export function ViewSelector() {
	const [view, setView] = useState<"card" | "table">("card");
	return (
		<div className="flex hover:cursor-pointer">
			<div
				onClick={() => setView("table")}
				className={cn(
					view === "table" ? "border-[#3B82F6] border-b-2" : "border-b",
					"p-2"
				)}
			>
				Table View
			</div>
			<div
				onClick={() => setView("card")}
				className={cn(
					view === "card" ? "border-[#3B82F6] border-b-2" : "border-b",
					"p-2"
				)}
			>
				Card View
			</div>
		</div>
	);
}
