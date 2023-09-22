import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import React from "react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.", () => {
	beforeEach(() => {
		render(<App />);
	});

	test("Emoji Search", () => {
		let text = screen.getByText(/.*Emoji Search.*/i);
		expect(text).toBeInTheDocument();
	});

	test("Input elementi", () => {
		let search = screen.getByPlaceholderText("Search");
		expect(search).toBeInTheDocument();
	});

	test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek", () => {
		let emoji = screen.getAllByText(/.*Click to copy emoji.*/i);
		expect(emoji.length).toEqual(20);
	});

	test("Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.", () => {
		let input = screen.getByPlaceholderText("Search");
		fireEvent.change(input, { target: { value: "Regional" } });
		let result = screen.getAllByAltText(/^Regional Indicator.*/i);
		expect(result.length).toEqual(20);
	});

	test("kiwifruit", () => {
		let input = screen.getByPlaceholderText("Search");
		fireEvent.change(input, { target: { value: "Kiwi" } });
		let result = screen.getAllByAltText(/^Kiwi/i);
		expect(result.length).toEqual(1);
	});

	test("Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.", async () => {
		let input = screen.getByPlaceholderText("Search");
		fireEvent.change(input, { target: { value: "Kiwi" } });
		let element = document.querySelector(".copy-to-clipboard");
		fireEvent.click(element);

		expect(element.getAttribute("data-clipboard-text")).toMatch("🥝");
	});
});
