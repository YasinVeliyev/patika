import React, { Component } from "react";

import "./App.css";
import Header from "./Components/Header";
import User from "./Components/User";

// const name = "Yasin";
// const surname = "Vəliyev";
// const isLoggedIn = false;

class App extends Component {
    render() {
        return (
            <div className="App">
                <User
                    name="Yasin"
                    surname={"Veliyev"}
                    isLoggedIn={true}
                    friends={["Ahmet", "Tayfun", "Gokhan", "Ayshen", "Nermin"]}
                />
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
