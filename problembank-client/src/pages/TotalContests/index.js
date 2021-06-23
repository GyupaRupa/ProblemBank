import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import TotalContestsPage from './pages/TotalContestsPage';

function TotalContests(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path = {`${match.url}`} component = {TotalContestsPage} />        
        </Switch>
    )
}

export default TotalContests

