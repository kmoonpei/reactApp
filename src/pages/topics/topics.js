import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
// import { withRouter } from 'react-router';
import { TopicSubWithRouter as Topic } from './topicSub'


class Topics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { match } = this.props
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic} />
                <Route
                    exact
                    path={match.url}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        )
    }
}



export const TopicsWithRouter = withRouter(Topics)