import React, { Component } from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { increase: 0, form: { name: "", surname: "", number: "" } };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState((state) => {  
            return { form: { ...state.form, [event.target.name]: event.target.value } };
        });
    }

    increase() {
        this.setState((prevState) => ({
            increase: prevState.increase + 1,
        }));
    }

    onSubmit(event) {
        event.preventDefault();
        this.increase();

        const { name, surname, number } = this.state.form;
        if (name === "" || surname === "" || number === "") {
            return false;
        } else {
            this.props.addContact(this.state.form);
            this.setState((state) => ({ form: { name: "", surname: "", number: "" } }));
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.increase}</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" name="name" placeholder="Enter Name" onChange={this.onChange} value={this.state.form.name} />
                    </div>
                    <div>
                        <input type="text" name="surname" placeholder="Enter Surname" onChange={this.onChange} value={this.state.form.surname} />
                    </div>
                    <div>
                        <input type="phone" name="number" placeholder="Enter Number" onChange={this.onChange} value={this.state.form.number} />
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}
