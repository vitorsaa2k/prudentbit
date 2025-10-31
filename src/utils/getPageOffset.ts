/* Returns an array of numbers based on the given */
export function getPagesOffset(
	current: number,
	totalPages: number,
	maxVisible: number = 15
) {
	const half = Math.floor(maxVisible / 2);

	let start = Math.max(1, current - half);
	const end = Math.min(totalPages, start + maxVisible - 1);

	if (end - start + 1 < maxVisible) {
		start = Math.max(1, end - maxVisible + 1);
	}

	return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
