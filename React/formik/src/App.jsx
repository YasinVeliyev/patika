import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Formik, Field, Form } from "formik";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<label htmlFor="firstName">First Name</label>
					<Field id="firstName" name="firstName" placeholder="Jane" />

					<label htmlFor="lastName">Last Name</label>
					<Field id="lastName" name="lastName" placeholder="Doe" />

					<label htmlFor="email">Email</label>
					<Field id="email" name="email" placeholder="jane@acme.com" type="email" />
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
}

export default App;
