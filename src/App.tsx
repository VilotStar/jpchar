import { Component, lazy } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { Route, Routes } from 'solid-app-router';


const MainPage = lazy(() => import("./pages/main"));
const NoPage = lazy(() => import("./pages/nomatch"));
const PlayPage = lazy(() => import("./pages/play"));
const Play2Page = lazy(() => import("./pages/play2"));

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="/jp">
          <Route path='/' component={MainPage} />
          <Route path='/play' component={PlayPage} />
		  <Route path='/play2' component={Play2Page} />
        </Route>
        <Route path = "*" component={NoPage}/>
      </Routes>
    </>

  );
};

export default App;
