import React from 'react';
import './lifecycle.css';

function Lifecycle() {
    return (
        <div>
            <h2>Lifecycle</h2>
            <p>В процессе работы компонент проходит через ряд этапов жизненного цикла.</p>
            <p>Жизненный цикл компонента в целом делится на четыре части:</p>
                <li><b>инициализация</b></li>
                <li><b>монтаж</b></li>
                <li><b>обновление</b></li>
                <li><b>размонтирование</b></li>
            <h3>Инициализация</h3>
            <p>Это фаза, на которой компонент собирается начать свой путь, установив состояние и пропсы. Обычно это делается внутри метода конструктора.</p>
            <pre>
                <code>
                {`class Initialize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date(),
      clickedStatus: false
    };
  }
 }
`}
                </code>
            </pre>
            <h3>Монтаж</h3>
            <p>Монтирование - это фаза, на которой наш компонент React монтируется в DOM (то есть создается и вставляется в DOM).<br/>
            Методы, доступные на этом этапе:</p>
            <p><b>1. componentWillMount()</b>: вызывается непосредственно перед монтированием компонента в DOM или методом визуализации. После этого метода компонент монтируется.</p>
            <p><b>2. componentDidMount()</b>: вызывается после монтирования компонента в DOM. Как и componentWillMount, он вызывается один раз в жизненном цикле.<br/>
            Перед выполнением этого метода вызывается метод рендеринга (т.е. Мы можем получить доступ к DOM).<br/>
            В нем мы можем делать вызовы API и обновлять состояние с помощью ответа API.</p>
            <pre>
                <code>
                {`class LifeCycle extends React.Component {
 componentWillMount() {
   console.log('Компонент будет монтироваться!')
 }
  componentDidMount() {
   console.log('Компонент смонтировался!')
   this.getList();
 }
 getList = () => {
   /*** способ сделать вызов API***/
 }
 render() {
   return (  
        Привет!
   );
 }
}
`}
                </code>
            </pre>
            <h3>Обновление</h3>
            <p>На этом этапе данные компонента (state и props) обновляются в ответ на пользовательские события, такие как клик, ввод текста и так далее.<br/>
            Это приводит к повторной визуализации компонента. Методы, доступные на этом этапе:</p>
            <p><b>1. shouldComponentUpdate(nextProps, nextState)</b>: вызывается каждый раз при обновлении объекта props или state.<br/>
            В качестве параметра передаются новый объект props и state. Эта функция должна возвращать true (надо делать обновление) или false (игнорировать обновление).<br/>
            По умолчанию возвращается true. Но если функция будет возвращать false, то тем самым мы отключим обновление компонента, а последующие функции не будут срабатывать.</p>
            <p><b>2. componentWillUpdate (nextProps, nextState)</b>: вызывается до повторного рендеринга компонента. Он вызывается один раз после метода shouldComponentUpdate.<br/>
            Если вы хотите выполнить некоторые вычисления перед повторным рендерингом компонента и после обновления states и props, то это лучшее место для этого.</p>
            <p><b>3. componentDidUpdate(prevProps, prevState)</b>: вызывается сразу после повторного рендеринга компонента. После того, как компонент обновляется в DOM, выполняется метод componentDidUpdate.</p>
            <pre>
                <code>
                {`class LifeCycle extends React.Component {
 constructor(props) {
   super(props);   this.state = {
       date : new Date(),
       clickedStatus: false,
       list:[]
   };
 }
  componentWillMount() {
   console.log('Компонент будет монтироваться!')
 }
  componentDidMount() {
   console.log('Компонент смонтировался!')
   this.getList();
 }
  getList = () => {
   /*** способ сделать вызов API***/
   fetch('https://api.mydomain.com')
     .then(response => response.json())
     .then(data => this.setState({ list:data }));
 }
 shouldComponentUpdate(nextProps, nextState){
   return this.state.list!==nextState.list
 }
  componentWillUpdate(nextProps, nextState) {
   console.log('Компонент будет обновляться!');
 }
 componentDidUpdate(prevProps, prevState) {
   console.log('Компонент обновился!')
 }
  render() {
   return (
     Привет, Сергей!!
   );
 }
}
`}
                </code>
            </pre>
            <h3>Размонтирование</h3>
            <p>Это последний этап в жизненном цикле. Компонент отключается от DOM на этом этапе. Метод, который доступен на этом этапе:</p>
            <p><b>1. componentWillUnmount()</b>: вызывается перед размонтированием компонента. Перед удалением компонента из DOM выполняется componentWillUnMount .</p>
            <p>Блок-схема методов жизненного цикла:</p>
            <img src='https://media.tproger.ru/uploads/2018/11/react1-1.jpg' alt='блок-схема'/>
        </div>
    )
}

export default Lifecycle 