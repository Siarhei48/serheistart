import React from 'react';

function Router1() {
    return (
        <div>
            <h2>Router</h2>
            <p><b>React Router</b> — это библиотека JavaScript, используемая для создания маршрутизации в приложении React.<br/>
            Маршрутизация — это механизм, с помощью которого мы можем переходить на различные страницы, <br/>
            когда путь URL совпадает с любым «маршрутом» внутри файла маршрутизатора.</p>
            <pre>
                <code>
                {`import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
`}
                </code>
            </pre>
        </div>
    )
}

export default Router1