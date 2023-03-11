import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Components() {
    let url=useLocation();
    return(
<div>
    <h2>Components</h2>
    <ul>
        <li><Link to={'${url.pathname}/func'}>Function Components</Link></li>
        <li><Link to={'${url.pathname}/class'}>Class Components</Link></li>

    </ul>
</div>
    )
}

export default Components