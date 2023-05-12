import React from 'react';
// import { Routes, Route } from 'react-router-dom';

function FuncProps() {
    return (
        <div>
            <h2>Функциональный подход</h2>
           
            <pre>
                <code>
                {`function Hello(props) {
  return <div>
            <p>Имя: {props.name}</p>
            <p>Возраст: {props.age}</p>
    </div>;
}
`}
                </code>
            </pre>

         
        </div>
    )
}

export default FuncProps