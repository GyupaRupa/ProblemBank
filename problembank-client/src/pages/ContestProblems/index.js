import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import ContestProblemsPage from './pages/ContestProblemsPage';

function ContestProblems(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path = {`${match.url}/view`} component = {ContestProblemsPage} />        
        </Switch>
    )
}

export default ContestProblems

