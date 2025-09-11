"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { getUsers } from "@/services/user";
import { User } from "@/types/user";
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
	setUserList: Dispatch<SetStateAction<User[] | null>>;
	setInput: Dispatch<SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
	const [userList, setUserList] = useState<User[] | null>([]);
	const [input, setInput] = useState("");
	async function searchUsers() {
		const users = await getUsers(input);
		setUserList(users);
	}
	const debouncedSearch = useDebounce(searchUsers, 400);

	useEffect(() => {
		debouncedSearch();
	}, [input]);

	return (
		<SearchContext.Provider value={{ userList, setUserList, setInput }}>
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
