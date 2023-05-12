import React from 'react';
// import { Routes, Route } from 'react-router-dom';

function ClassProps() {
    return (
        <div>
            <h2>Классовый подход</h2>
           
            <pre>
                <code>
                {`class Hello extends React.Component {
  render() {
    return <div>
            <p>Имя: {this.props.name}</p>
            <p>Возраст: {this.props.age}</p>
    </div>;
  }
}
`}
                </code>
            </pre>

         
        </div>
    )
}

export default ClassProps