import { useRef } from "react";

export function useDebounce(fn: (args: unknown[]) => void, delay: number) {
	const timeoutRef = useRef(0);

	function debouncedFn(...args: unknown[]) {
		window.clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => {
			fn([...args]);
		}, delay);
	}

	return debouncedFn;
}
