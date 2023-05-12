import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';



function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="components">Components</Link></li> 
                <li><Link to="/props">Props</Link></li>
                <li><Link to="/state">State</Link></li>
                <li><Link to="/lifecycle">Lifecycle</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/key">Key</Link></li>
                <li><Link to="/refs">Refs</Link></li> 
                <li><Link to="/async">Отправка асинхронных запросов</Link></li>
                <li><Link to="/vdom">Virtual_DOM</Link></li>
                <li><Link to="/rfragment">React.Fragment</Link></li>
                <li><Link to="/rmemo">React.memo</Link></li>
                <li><Link to="/useeffect">UseEffect</Link></li>
                <li><Link to="/router">Router</Link></li>
                <li><Link to="/context">Context</Link></li>
                <li><Link to="/forma">Работа с формой</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar