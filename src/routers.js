import React, { Component } from "react";
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about';
// import Topics from './pages/topics';
import { TopicsWithRouter as Topics } from './pages/topics/topics';
import BackTop from "antd/lib/back-top";
import './assets/App.css'



const BasicExample = ({ match }) => (
    <Router>
        <div>
            <ul className="header">
                <li className="header_li">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="header_li">
                    <Link to="/about" className="link">About</Link>
                </li>
                <li className="header_li">
                    <Link to="/topics" className="link">Topics</Link>
                </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />

        </div>
    </Router>
)


export default BasicExample