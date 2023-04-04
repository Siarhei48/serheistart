import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import FuncComponents from '../Components/FuncComponents';
import ClassComponents from '../Components/ClassComponents'

function Content() {
  let url = useLocation();
// console.log(`${url.pathname}/class`)
    return (
        <div className="content">
        <Routes >
          <Route path="components" element={<Components />} />
                <Route  path={`/components/func`} element={< FuncComponents />} />
                <Route  path={`/components/class`} element={< ClassComponents />} />
          <Route  path="/props" element={<Props />} />
          <Route  path="/state" element={<State />} />
          <Route  path="/lifecycle" element={<Lifecycle />} />
          <Route  path="/events" element={<Events />} />
          <Route  path="/key" element={<Key />} />
          <Route  path="/refs" element={<Refs />} />
          <Route  path="/async" element={<Async />} />
          <Route  path="/vdom" element={<VDOM />} />
          <Route  path="/rfragment" element={<RFragment />} />
          <Route  path="/rmemo" element={<RMemo />} />
          <Route  path="/useeffect" element={<UseEffect />} />
          <Route  path="/router" element={<Router1 />} />
          <Route  path="/context" element={<Context />} />
          <Route  path="/forma" element={<Forma />} />
        </Routes>
        </div>
    )
}

export default Content