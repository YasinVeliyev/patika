import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>
                    {this.props.isLoggedIn
                        ? `Mənim soyadım ${this.props.surname} adım ${this.props.name}`
                        : "Giris Yapmadiniz"}
                </h1>

                <ol>
                    {this.props.friends.map((n, index) => (
                        <li key={index}>{n}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    surname: PropTypes.string.isRequired,
};

export default User;
