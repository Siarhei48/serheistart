import React from 'react';

function Context() {
    return (
        <div>
            <h2>Context</h2>
            <p>Контекст — это метод передачи данных между компонентами React на многих уровнях без необходимости передавать данные через каждый уровень вложенности с помощью реквизитов.<br/>
            Его лучше всего использовать для простого обмена данными со многими компонентами, которые не нуждаются в постоянных обновлениях, таких как информация о теме и пользовательские данные.<br/>
            Его недостатком является то, что он может затруднить повторное использование компонентов.</p>
            <pre>
                <code>
                {`const titleContext = React.createContext();

const LevelThree = ()=> (
    <titleContext.Consumer>
        {({title, subTitle})=>(
            <React.Fragment>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </React.Fragment>
        )}
    </titleContext.Consumer>
)
const LevelTwo = ()=> <LevelThree/>
const LovelOne = ()=> <LevelTwo/>

class Lesson extends React.Component{
    render () {
        return(
            <titleContext.Provider value={{title:"Сергей", subTitle:"Гуцу"}}>
                <LovelOne/>
            </titleContext.Provider>
        );
    }
}
export default Lesson 
`}
                </code>
            </pre>
        </div>
    )
}

export default Context 