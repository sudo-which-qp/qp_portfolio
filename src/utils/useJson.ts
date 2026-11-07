import { useEffect, useState } from "react";

export function useJson<T>(url: string): T[] {
	const [data, setData] = useState<T[]>([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then(setData)
			.catch((error) => console.error(error));
	}, [url]);

	return data;
}
