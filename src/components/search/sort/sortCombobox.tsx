"use client";

import { SortIcon } from "./sortIcon";
import { useState } from "react";
import { sortOptions } from "@/types/api";
import { useRouter, useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/capFirstLetter";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SortCombobox() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const page = searchParams.get("page");
	const limit = searchParams.get("limit");
	const input = searchParams.get("input");
	const sort = searchParams.get("sort") as sortOptions;
	const [sortOption, setSortOption] = useState<sortOptions>(sort);
	const [open, setOpen] = useState(false);

	function changeSort(sort: sortOptions) {
		setSortOption(sort);
		router.push(`?page=${page}&limit=${limit}&input=${input}&sort=${sort}`);
	}
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger className="flex p-4">
				{sortOption ? capitalizeFirstLetter(sortOption) : "Options"}
				<SortIcon />
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command>
					<CommandList>
						<CommandGroup>
							<CommandItem
								value={"Id"}
								onSelect={() => {
									changeSort("id");
									setOpen(false);
								}}
							>
								Id
								<Check
									className={cn(
										"ml-auto",
										sortOption === "id" ? "opacity-100" : "opacity-0"
									)}
								/>
							</CommandItem>
							<CommandItem
								value={"Name"}
								onSelect={() => {
									changeSort("name");
									setOpen(false);
								}}
							>
								Name
								<Check
									className={cn(
										"ml-auto",
										sortOption === "name" ? "opacity-100" : "opacity-0"
									)}
								/>
							</CommandItem>
							<CommandItem
								value={"Age"}
								onSelect={() => {
									changeSort("age");
									setOpen(false);
								}}
							>
								Age &uarr;
								<Check
									className={cn(
										"ml-auto",
										sortOption === "age" ? "opacity-100" : "opacity-0"
									)}
								/>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
