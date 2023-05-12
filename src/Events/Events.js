import React from 'react';

function Events() {
    return (
        <div>
            <h2>Events</h2>
            <p>Обработка событий в React-элементах очень похожа на обработку событий в DOM-элементах. Но есть несколько синтаксических отличий:

            <li>События в React используют camelCase (в стандартном html "onclick", в React - "onClick")</li>
            <li>С JSX вы передаёте функцию как обработчик события вместо строки.</li></p>
            <p>Ещё одно отличие — в React нельзя предотвратить обработчик события по умолчанию, вернув <b>false</b>. Нужно явно вызвать <b>preventDefault</b>. </p>
            <h3>onChange</h3>
            <pre>
                <code>
                {`class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({name: val});
}

  handleSubmit(e) {
    e.preventDefault();
    alert("Имя: " + this.state.name);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <p>
                <label>Имя:</label><br />
                <input type="text" value={this.state.name} onChange={this.onChange}/>
            </p>
            <input type="submit" value="Отправить" />
        </form>
    );
  }
}
`}
                </code>
            </pre>
<UserForm/>
<h3>onClick</h3>
            <pre>
                <code>
                {`class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    )
  }
}
`}
                </code>
            </pre>
            <Toggle/>
        </div>
    )
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({name: val});
}

  handleSubmit(e) {
    e.preventDefault();
    alert("Имя: " + this.state.name);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <p>
                <label>Имя:</label><br />
                <input type="text" value={this.state.name} onChange={this.onChange}/>
            </p>
            <input type="submit" value="Отправить" />
        </form>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    )
  }
}

export default Events