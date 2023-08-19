import React, { Component } from "react";

class InputExample extends Component {
    constructor() {
        super();
        this.change = this.change.bind(this);
    }

    state = {
        name: "",
        surname: "",
    };

    change(event) {
        console.log(event.target.name);
        this.setState((state) => (this.state[event.target.name] = event.target.value));
    }

    render() {
        return (
            <div>
                <h2>Please enter a name</h2>
                <input name="name" type="text" onChange={this.change} value={this.state.name} />
                <input name="surname" type="text" onChange={this.change} value={this.state.surname} />
                <h1>
                    {this.state.name} {this.state.surname}
                </h1>
            </div>
        );
    }
}

export default InputExample;
