import React from "react";
import { Switch, Route } from 'react-router-dom';
//Component
import { Home } from './Home';
import { Project } from './Project';
import { About } from './About';
import { Contact } from './Contact';
export const Routes = () => {
    return (
        <div className="p-2">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/projects">
                    <Project />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    )
}