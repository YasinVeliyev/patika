import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import InputExample from "./components/InputExamplet";

function App() {
    const [addres, setAddres] = useState({ title: "Istanbul", zip: 34756 });
    // const [name, setName] = useState("Yasin");
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
                <h1>{name}</h1>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <h2>{addres.title}</h2>
            <h2>{addres.zip}</h2>
            <button onClick={() => setAddres({ title: "Baki", zip: 34756 })}>Change</button>
            <Counter />
            <InputExample />
        </div>
    );
}

export default App;
