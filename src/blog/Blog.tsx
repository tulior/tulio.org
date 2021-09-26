import {Route, Switch, useRouteMatch} from "react-router-dom";
import React from "react";

export default function Blog() {

    let { path } = useRouteMatch<{path: string}>();

    return (
        <Switch>
            <Route exact path={path}>
                <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/:topico`}><Topic /></Route>
        </Switch>
    )
}

function Topic() {
    return (
        <h5>oi</h5>
    )
}
