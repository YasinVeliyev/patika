import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
    constructor(props) {
        super(props);
        this.changeVisible = this.changeVisible.bind(this);
    }
    state = {
        visible: true,
    };
    // handleStatusChange(status) {
    //     this.setState({ isOnline: status.isOnline });
    // }
    changeVisible() {
        this.setState((state) => (this.state.visible = !this.state.visible));
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                {this.state.visible && <Counter />}
                <br />
                <button onClick={this.changeVisible}>Change Visibility</button>
            </div>
        );
    }
}

export default App;
