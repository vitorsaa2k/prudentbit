"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { getPaginatedPatients } from "@/services/user";
import { Pagination } from "@/types/api";
import { User } from "@/types/user";
import { useRouter, useSearchParams } from "next/navigation";
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";

type SearchContextType = {
	userList: User[] | null;
	pagination: Pagination | null;
	setUserList: Dispatch<SetStateAction<User[] | null>>;
	setInput: Dispatch<SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const page = Math.max(1, parseInt(searchParams.get("page") ?? "1"));
	const limit = parseInt(searchParams.get("limit") ?? "20");
	const [userList, setUserList] = useState<User[] | null>([]);
	const [input, setInput] = useState("");
	const [pagination, setPagination] = useState<Pagination | null>(null);
	async function searchUsers() {
		const { data, pagination } = await getPaginatedPatients(page, limit, input);
		console.log(data, pagination);
		setUserList(data);
		setPagination(pagination);
		if (page > pagination.totalPages)
			router.push(
				`?page=${pagination.totalPages}&limit=${limit}&input=${input}`
			);
	}
	const debouncedSearch = useDebounce(searchUsers, 400);

	useEffect(() => {
		debouncedSearch();
	}, [input, page, limit]);

	return (
		<SearchContext.Provider
			value={{ userList, setUserList, setInput, pagination }}
		>
			{children}
		</SearchContext.Provider>
	);
}

export function useSearch() {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}
