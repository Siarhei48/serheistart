import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';  



function Props() {
    let url = useLocation();
    console.log(url)
    return (
        <div>
            <h2>Props</h2>
            <p>Props — это сокращение от Properties в React. Это компоненты только для чтения, которые должны быть чистыми, т.е. неизменными.
             Они всегда передаются от родительских к дочерним компонентам по всему приложению. 
             Дочерний компонент никогда не может отправить свойство обратно родительскому компоненту. 
             Это помогает поддерживать однонаправленный поток данных и обычно используется для визуализации динамически генерируемых данных.</p>
             <ul>
                <li><Link to={`${url.pathname}/fprops`}>Функциональный подход</Link></li>
                <li><Link to={`/props/cprops`}>Классовый подход</Link></li>
            </ul>
        </div>
    )
}

export default Props 