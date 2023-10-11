import axios from "axios";

axios.interceptors.request.use(
	function (config) {
		const { origin } = new URL(config.url);
		const allowedOrigins = ["http://localhost:4000"];
		const token = localStorage.getItem("access-token");
		if (allowedOrigins.includes(origin)) {
			config.headers.Authorization = token;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export const fetchProductList = async ({ pageParam = 0 }) => {
	let res = await fetch(`http://localhost:4000/product?page=${pageParam}`);
	let data = await res.json();

	return data;
};

export const fetchProduct = async (product_id) => {
	let res = await fetch(`http://localhost:4000/product/${product_id}`);
	let data = await res.json();

	return data;
};

export const fetchRegister = async (body) => {
	const data = await fetch(`http://localhost:4000/auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(body),
	});
	return await data.json();
};

export const fetchLogin = async (body) => {
	const { data } = await axios.post(`http://localhost:4000/auth/login`, body);
	return data;
};

export const fetchMe = async () => {
	const { data } = await axios("http://localhost:4000/auth/me");
	return data;
};

export const fetchLogout = async () => {
	const { data } = await axios.post("http://localhost:4000/auth/logout", {
		refresh_token: localStorage.getItem("refresh-token"),
	});
	return data;
};
