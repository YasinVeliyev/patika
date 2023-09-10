import { useState, useMemo, useCallback } from "react";

import "./App.css";
import Header from "./components/Header";

function App() {
	const [count, setCount] = useState(0);
	const data = useMemo(() => {
		return { name: "Yasin" };
	}, []);

	const increment = useCallback(() => setCount((state) => state + 1), []);

	return (
		<>
			<div>
				<Header data={data} func={increment} />
				<h1>{count}</h1>
			</div>
		</>
	);
}

export default App;
