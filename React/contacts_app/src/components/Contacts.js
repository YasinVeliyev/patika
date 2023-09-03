import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] };
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
