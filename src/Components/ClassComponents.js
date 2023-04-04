import React from 'react';

function ClassComponents() {
    return (
        <div>
            <h2>Class Components</h2>
            <pre>
                <code>
                {`class Welcome extends React.Component {
  render() {
    return (
        <h1>Привет, {this.props.name}</h1>;
        )
  }
}
`}
                </code>
            </pre>

         
        </div>
    )
}

export default ClassComponents