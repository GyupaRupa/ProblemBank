import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/styles/grid.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './hocs/Authentication';

import NotFound from './components/404NotFound';
import Loading from './components/Loading/Loading';

const MainPage = React.lazy(() => import('./pages/MainPage'))
const ProblemsByCategories = React.lazy(() => import('./pages/ProblemsByCategories'));
const TotalProblems = React.lazy(() => import('./pages/TotalProblems'))
const Problem = React.lazy(() => import('./pages/Problem'))
const MyProblems = React.lazy(() => import('./pages/MyProblems'))
const TotalContests = React.lazy(() => import('./pages/TotalContests'))
const ContestProblems = React.lazy(() => import('./pages/ContestProblems'))


// check user Id && paswword for authentication 
function App() {
  return (
      <Suspense fallback = {<Loading type={'bars'} color={'black'} />}>
        <BrowserRouter>
            <Switch>
                {/* <Route exact path = "/"  component = {Auth(MainPage, true)}/>
                <Route path = "/problemsbank"  component = {Auth(ProblemsByCategories, true)}/>
                <Route path = "/problem"  component = {Auth(Problem, true)}/>
                <Route path = "/totalproblems"  component = {Auth(TotalProblems, true)}/>
                <Route path = "/mylist"  component = {Auth(MyProblem
                  s, true)}/>
                <Route component = {NotFound} /> */}

                <Route exact path = "/"  component = {MainPage}/>
                <Route path = "/problemsbank"  component = {ProblemsByCategories}/>
                <Route path = "/problem"  component = {Problem}/>
                <Route path = "/totalproblems"  component = {TotalProblems}/>
                <Route path = "/totalcontests"  component = {TotalContests}/>
                <Route path = "/contest"  component = {ContestProblems}/>
                {/* <Route path = "/mylist"  component = {MyProblems}/> */}
                <Route component = {NotFound} />
            </Switch>
          </BrowserRouter>
      </Suspense>
  );
}

export default App;
