import React, { Component } from "react";

import "./App.css";
import Footer from "./components/Footer";
import TodoApp from "./components/TodoApp";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoApp />
                <Footer />
            </div>
        );
    }
}

export default App;
