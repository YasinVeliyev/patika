import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    name: "Uriah",
                    surname: "Ellison",
                    number: "(318) 302-7545",
                },
                {
                    name: "Wilma",
                    surname: "Allen",
                    number: "1-839-326-4356",
                },
                {
                    name: "Tanisha",
                    surname: "Hayes",
                    number: "1-885-567-1954",
                },
                {
                    name: "Glenna",
                    surname: "Sampson",
                    number: "(438) 279-2707",
                },
                {
                    name: "Camille",
                    surname: "Burris",
                    number: "(476) 645-4377",
                },
            ],
        };
        this.addContact = this.addContact.bind(this);
    }
    addContact(contact) {
        this.setState((state) => {
            return { contacts: [...state.contacts, contact] };
        });
    }

    render() {
        return (
            <div>
                <List contacts={this.state.contacts} />
                <Form addContact={this.addContact} />
            </div>
        );
    }
}

export default Contact;
