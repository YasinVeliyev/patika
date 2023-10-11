import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Signin from "./components/pages/Auth/Signin";
import Signup from "./components/pages/Auth/Signup";
import Products from "./components/pages/Products";
import ProductDetail from "./components/pages/ProductDetail";
import Profile from "./components/pages/Profile";
import ProtoctedRoute from "./components/pages/ProtoctedRoute";


function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<div id="content">
					<Routes>
						<Route path="/" element={<Products />} />
						<Route path="/me/*" element={<Profile />} />
						<Route path="/products" element={<Products />} />
						<Route path="/product/:product_id" element={<ProductDetail />} />
						<Route path="/signin" element={<Signin />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

function About() {
	return (
		<div>
			<h1>About</h1>
		</div>
	);
}

export default App;
