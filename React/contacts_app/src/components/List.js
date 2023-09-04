import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.contacts = props.contacts;
        this.state = { filter: "" };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState(() => ({ filter: event.target.value }));
    }

    shouldComponentUpdate(props, state) {
        if (props.contacts.length !== this.contacts.length || this.state.filter !== state.filter) {
            console.log(this.state);
            this.contacts = props.contacts;

            return true;
        }

        return false;
    }

    render() {
        return (
            <div className="container">
                <form className="m-auto" style={{ width: "50%" }}>
                    <div className="form-group m-5">
                        <input className="form-control" type="text" placeholder="Filter" value={this.state.filter} onChange={this.onChange} />
                    </div>
                </form>

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.contacts
                            .filter((item) => {
                                return Object.keys(item).some((key) => {
                                    return item[key].toString().toLowerCase().includes(this.state.filter.toLowerCase());
                                });
                            })
                            .map((contact, index) => {
                                return (
                                    <tr key={index}>
                                        <td scope="row">{index + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.surname}</td>
                                        <td>{contact.number}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;
