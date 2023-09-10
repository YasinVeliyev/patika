import React, { Component } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import User from "./User";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], loading: true };
       
    }
    componentDidMount() {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => {
                this.setState((state) => {
                    return { ...state, users: data.users, loading: false };
                });
            });
    }
    render() {
        return (
            <div>
                <h2>Users</h2>
                {this.state.loading && <div>Loading... </div>}
                <ul>
                    {this.state.users.map((user) => {
                        return (
                            <li key={user.id}>
                                <Link to={`/users/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>
                            </li>
                        );
                    })}
                </ul>

                <div>
                    <h3>Please Select User</h3>
                    <Outlet >
                        
                    </Outlet>
                </div>
            </div>
        );
    }
}

export default Users;
