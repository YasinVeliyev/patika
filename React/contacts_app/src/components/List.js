import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.contacts = props.contacts;
        this.state = { updated: false };
    }
    shouldComponentUpdate(nextProps) {
        console.log(this.state);
        if (nextProps.contacts !== this.props.contacts) {
            this.setState((state) => {
                return {
                    updated: !state.updated,
                };
            });
            return true;
        }
        return false;
    }
    render() {
        return (
            <div>
                <ul>
                    {this.contacts.map((contact, index) => {
                        return (
                            <div key={index}>
                                <li>
                                    {contact.name} {contact.surname}
                                </li>
                                <li>{contact.number}</li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default List;
