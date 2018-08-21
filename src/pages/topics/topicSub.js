import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router';

class TopicSub extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { match } = this.props
        return (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        )
    }
}

export const TopicSubWithRouter = withRouter(TopicSub)