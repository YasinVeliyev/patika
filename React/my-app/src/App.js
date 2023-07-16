import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";

const name = "Yasin";
const surname = "Vəliyev";
const isLoggedIn = false;

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>{isLoggedIn ? `Mənim soyadım ${surname} adım ${name}` : "Giris Yapmadiniz"}</h1>
                <Header />
                <Header />
                <Header />
                <Header />
                <Header />
                <Header />
                <Header />
            </div>
        );
    }
}

export default App;
