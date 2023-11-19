import { useState, useEffect, useReducer } from "react";

export default function useLocalStorage<T>(
	name: string,
	defaultValue: T
): [T, (data: T) => void] {
	const [data, setData] = useState<T>(defaultValue);

	useEffect(() => {
		if (localStorage.getItem(name)) {
			setData(JSON.parse(localStorage.getItem(name) || ""));
		}
	}, [name]);

	useEffect(() => {
		if (data) localStorage.setItem(name, JSON.stringify(data));
	}, [data, name]);

	return [data === undefined ? defaultValue : data, setData];
}
