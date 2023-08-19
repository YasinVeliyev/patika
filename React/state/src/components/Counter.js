import React, { Component } from "react";

const products = [
    {
        emoji: "🍦",
        name: "ice cream",
        price: 5,
    },
    {
        emoji: "🍩",
        name: "donuts",
        price: 2.5,
    },
    {
        emoji: "🍉",
        name: "watermelon",
        price: 4,
    },
];

class Counter extends Component {
    constructor() {
        super();
        this.add = this.add.bind(this);
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }
    state = {
        age: 25,
        counter: 0,
    };

    decrease() {
        console.log(this.setState);
        this.setState((state) => this.state.counter--);
    }
    increase() {
        this.setState((state) => this.state.counter++);
    }

    add() {
        console.log(this);
        this.setState.call(this);
        // this.setState((state) => (this.state.age += 1));
    }
    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.counter}</h1>
                    <button onClick={this.increase}>Increase</button>
                    <button onClick={this.decrease}>Decrease</button>
                </div>

                <p>{this.state.age}</p>
                <button onClick={this.add}>Change</button>
            </div>
        );
    }
}

export default Counter;
