import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <List />
                <Form />
            </div>
        );
    }
}

export default Contact;
