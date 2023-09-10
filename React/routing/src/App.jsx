import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import User from "./components/User";

import Users from "./components/Users";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/about" element={<About />} />

                        <Route path="/users/*" element={<Users />}>
                            <Route path=":userId" action={(props) => console.log("Hello",props)} element={<User/>} />
                        </Route>

                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
 return <h2>About</h2>;
}

export default App;
