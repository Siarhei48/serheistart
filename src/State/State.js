import React from 'react';

function State() {
    return (
        <div>
            <h2>State</h2>
            <p>State это JavaScript объект, который хранит динамические данные компонента и позволяет компоненту отслеживать изменения между рендерами(render).</p>
            <pre>
                <code>
                {`class CounterButton extends React.Component {
 state = {
     counter: 0,
 }
 handleClick = () => {
     this.setState(({counter}) =>({
       counter: ++counter,  
     }))
 }
 render() {
     const {counter} = this.state;
     return (
         <div>
             <div>{counter}</div>
             <button onClick={this.handleClick}>Click me</button>
         </div>
     );
 }
}
`}
                </code>
            </pre>
            <CounterButton/>
        </div>
    )
}

class CounterButton extends React.Component {
 
    state = {
        counter: 0,
    }
    handleClick = () => {
        this.setState(({counter}) =>({
          counter: ++counter,  
        }))
    }
    render() {
        const {counter} = this.state;
        return (
            <div>
                <div>{counter}</div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default State