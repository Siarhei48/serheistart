import React from "react";
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Components from "../Components/Components";
import Props from "../Props/Props";
import State from "../State/State";
import Lifecycle from "../Lifecycle/lifecycle";
import Async from "../Async/Async"
import Context from "../Context/Context";
import Events from "../Events/Events";
import Key from "../Key/Key";
import Refs from "../Refs/Refs";
import Forma from "../Forma/Forma";
import VDOM from "../VDOM/VDOM";
import RFragment from "../RFragment/RFragment";
import RMemo from "../RMemo/RMemo";
import Router1 from "../Router/Router";
import UseEffect from "../UseEffect/UseEffect";

function Content() {
    return (
        <div className="content">
             <Router >
                <Routes >
                    <Route exact path="/" element={<Components/>} />
                    <Route exact path="/props" element={<Props/>} />
                    <Route exact path="/state" element={<State/>} />
                    <Route exact path="/lifecycle" element={<Lifecycle/>} />
                    <Route exact path="/events" element={<Events/>} />
                    <Route exact path="/key" element={<Key/>} />
                    <Route exact path="/refs" element={<Refs/>} />
                    <Route exact path="/async" element={<Async/>} />
                    <Route exact path="/vdom" element={<VDOM/>} />
                    <Route exact path="/rfragment" element={<RFragment/>} />
                    <Route exact path="/rmemo" element={<RMemo/>} />
                    <Route exact path="/useeffect" element={<UseEffect/>} />
                    <Route exact path="/router" element={<Router1/>} />
                    <Route exact path="/context" element={<Context/>} />
                    <Route exact path="/forma" element={<Forma/>} />
                </Routes>
        </Router>
        </div>
    )
}

export default Content