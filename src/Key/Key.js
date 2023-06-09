import React from 'react';

function Key() {
    return (
        <div>
            <h2>Key</h2>
            <p>Ключи используются для идентификации уникальных элементов Virtual DOM с соответствующими данными, управляющими пользовательским интерфейсом.<br/> 
            Они помогают React оптимизировать рендеринг, перерабатывая все существующие элементы в DOM. <br/>
            Эти ключи должны быть уникальным числом или строкой, с помощью которых React просто переупорядочивает элементы, а не перерисовывает их.<br/>
            Это приводит к увеличению производительности приложения.</p>
        </div>
    )
}

export default Key