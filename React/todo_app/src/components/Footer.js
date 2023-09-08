import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="info">
                <p>Click to edit a todo</p>
                <p>
                    Created by <a href="https://www.linkedin.com/in/veliyev-yasin/">Yasin Vəliyev</a>
                </p>
                <p>
                    Part of <a href="http://todomvc.com">TodoMVC</a>
                </p>
            </footer>
        );
    }
}

export default Footer;
