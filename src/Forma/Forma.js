import React,{Fragment} from 'react';

function Forma() {
    return (
        <div>
            <h2>Работа с формой</h2>
            <p>Формы React похожи на формы HTML.<br/>
            Но в React состояние содержится в свойстве состояния компонента и обновляется только через setState().<br/>
            Таким образом, элементы не могут напрямую обновлять свое состояние, а их отправка обрабатывается функцией JavaScript.<br/>
            Эта функция имеет полный доступ к данным, которые пользователь вводит в форму.</p>
            <pre>
                <code>
                {`class Form extends React.Component{
    state ={
        inputText: '',
        textareaText: '',
        selectText: '',
        showData: {
            name: '',
            text: '',
            position: '',
        }
    }

    handleInputChange =({ target: {value} })=>{
        this.setState({
            inputText:value,
        })
    }
    handleTextareaChange =({ target: {value} })=>{
        this.setState({
            textareaText:value,
        })
    }
    handleSelectChange =({ target: {value} })=>{
        this.setState({
            selectText:value,
        })
    }
    handleShow = (e)=> {
        e.preventDefault();
        const {inputText,textareaText,selectText} = this.state;
        this.setState({
            inputText: '',
            textareaText: '',
            selectText: '',
            showData: {
                name:inputText,
                text: textareaText,
                position: selectText,
            }
        })
    }
    render() {
        const {inputText, textareaText, selectText, showData} = this.state;
        const {name, text, position} = showData;

        return(
            <Fragment>
                <form>
                    <h2>Input</h2>
                    <label>
                        Имя:
                        <input type ="text" name ="name" value={inputText} onChange={this.handleInputChange} />
                    </label>
                     <h2>Textarea</h2>
                     <label htmlFor="text">Текст:</label>
                     <textarea id="text" value={textareaText} onChange={this.handleTextareaChange}/>
                     <h2>Select</h2>
                     <select value={selectText} onChange={this.handleSelectChange} >
                        <option value="Front-end" >Front</option>
                        <option value="Back-end" >Back</option>
                     </select>
                    <h2>Button</h2>
                    <button onClick={this.handleShow}>Показать</button>
                </form>
                <h2>{name}</h2>
                <h3>{text}</h3>
                <h4>{position}</h4>
            </Fragment>
        )
    }

}
`}
                </code>
            </pre>
            <Form/>
        </div>
    )
}



class Form extends React.Component{
    state ={
        inputText: '',
        textareaText: '',
        selectText: '',
        showData: {
            name: '',
            text: '',
            position: '',
        }
    }

    handleInputChange =({ target: {value} })=>{
        this.setState({
            inputText:value,
        })
    }
    handleTextareaChange =({ target: {value} })=>{
        this.setState({
            textareaText:value,
        })
    }
    handleSelectChange =({ target: {value} })=>{
        this.setState({
            selectText:value,
        })
    }
    handleShow = (e)=> {
        e.preventDefault();
        const {inputText,textareaText,selectText} = this.state;
        this.setState({
            inputText: '',
            textareaText: '',
            selectText: '',
            showData: {
                name:inputText,
                text: textareaText,
                position: selectText,
            }
        })
    }
    render() {
        const {inputText, textareaText, selectText, showData} = this.state;
        const {name, text, position} = showData;

        return(
            <Fragment>
                <form>
                    <h2>Input</h2>
                    <label>
                        Имя:
                        <input type ="text" name ="name" value={inputText} onChange={this.handleInputChange} />
                    </label>
                     <h2>Textarea</h2>
                     <label htmlFor="text">Текст:</label>
                     <textarea id="text" value={textareaText} onChange={this.handleTextareaChange}/>
                     <h2>Select</h2>
                     <select value={selectText} onChange={this.handleSelectChange} >
                        <option value="Мужской" >Муж.</option>
                        <option value="Женский" >Жен.</option>
                     </select>
                    <h2>Button</h2>
                    <button onClick={this.handleShow}>Показать</button>
                </form>
                <h4>{name}</h4>
                <h4>{text}</h4>
                <h4>{position}</h4>
            </Fragment>
        )
    }

}
export default Forma