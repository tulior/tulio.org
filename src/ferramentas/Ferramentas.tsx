import {BrowserRouter as Router, Link, NavLink, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import TopBar from "../shared/TopBar";
import React from "react";

export default function Ferramentas() {

    let route  = useRouteMatch();

    return (
        <Switch>
            <Route exact path={route.path}>
                <h3>{route.path}Please select a topic.

                    <br />
                    <br />
                        {JSON.stringify(route)}

                </h3>
            </Route>
            <Route path={`${route.path}/:topico`}><Topic /></Route>
        </Switch>
    )
}

function Topic() {
    let { topico } = useParams<{topico: string}>();
    return (
        <h3>{topico}</h3>
    )
}
