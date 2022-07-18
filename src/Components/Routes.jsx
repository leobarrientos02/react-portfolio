import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Component
import { Home } from "./Home";
import { Projects } from "./Projects";
import { About } from "./About";
import { Contact } from "./Contact";
import { Error } from "./Error";
import { Project } from "./Project";

export const Routes = () => {
  return (
    <div className="p-2">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/projects/:projectId">
          <Project />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
