import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div >
            <nav className='navbar'>
                <ul>
                    <li><a href="/">Components</a></li>
                    <li><a href="/props">Props</a></li>
                    <li><a href="/state">State</a></li>
                    <li><a href="/lifecycle">Lifecycle</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/key">Key</a></li>
                    <li><a href="/refs">Refs</a></li>
                    <li><a href="/async">Отправка асинхронных запросов</a></li>
                    <li><a href="/vdom">Virtual_DOM</a></li>
                    <li><a href="/rfragment">React.Fragment</a></li>
                    <li><a href="/rmemo">React.memo</a></li>
                    <li><a href="/useeffect">UseEffect</a></li>
                    <li><a href="/router">Router</a></li>
                    <li><a href="/context">Context</a></li>
                    <li><a href="/forma">Работа с формой</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar