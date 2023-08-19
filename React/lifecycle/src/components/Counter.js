import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super();
        this.increase = this.increase.bind(this);
    }

    state = {
        number: 0,
        isOnline: null,
    };

    increase() {
        this.setState((state) => this.state.number++);
        setInterval(() => this.setState((state) => this.state.number++), 1000);
    }
    componentDidMount(props) {
        console.log("Compoenent mount edildi", props);
    }

    componentDidUpdate(props) {
        console.log(props);
        console.log("State Güncenlendi");
    }

    componentWillUnmount(props) {
        console.log("Compoenent unmount edildi", props);
    }

    render() {
        return (
            <div className="Counter">
                <h1>{this.state.number}</h1>
                <button onClick={this.increase}>Count</button>
            </div>
        );
    }
}

export default Counter;
