import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams
} from 'react-router-dom';
import TopBar from "./shared/TopBar";
import Ferramentas from "./ferramentas/Ferramentas";
import Blog from "./blog/Blog";
import Home from "./home/Home";


export default function App() {

    return (
        <Router>
            <div>
                <TopBar />

                <Switch>
                    <Route path="/ferramentas">
                        <Ferramentas/>
                    </Route>
                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
