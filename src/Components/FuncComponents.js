import React from 'react';
// import { Routes, Route } from 'react-router-dom';

function FuncComponents() {
    return (
        <div>
            <h2>Function Components</h2>
           
            <pre>
                <code>
                {`function Welcome(props) {
  return (
    <h1>Привет, {props.name}</h1>;
    )
}
`}
                </code>
            </pre>

         
        </div>
    )
}

export default FuncComponents