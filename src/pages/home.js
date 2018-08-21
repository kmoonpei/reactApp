import React, { Component } from 'react';
import '../assets/App.css';
import logo from '../assets/logo.svg';
import { Button } from 'antd';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
                    <Button type="primary" color="#aaa">hello</Button>
                </div>
            </div>
        )
    }
}