import React from 'react';
import { useLocation } from 'react-router-dom';  
import { Link } from 'react-router-dom';


function Components() {
    let url = useLocation();
    console.log(url)
    return (
        <>
            <h2>Components</h2>
            <p>Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.</p>
            <p>Компоненты ведут себя как обычные функции JavaScript. 
            Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.</p>
            
            <ul>
                <li><Link to={`${url.pathname}/func`}>Function Components</Link></li>
                <li><Link to={`${url.pathname}/class`}>Class Components</Link></li>
            </ul>
          

            <p>Компонент никогда не должен что-то записывать в свои пропсы. 
            React-компоненты обязаны вести себя как чистые функции по отношению к своим пропсам.</p>
        </>
    )
}

export default Components