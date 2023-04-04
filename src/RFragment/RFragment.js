import React from 'react';

function RFragment() {
    return (
        <div>
            <h2>React.Fragment</h2>
            <em>Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.</em>
            <pre>
                <code>
                {` class Columns extends React.Component {
    render() {
      return (
        <React.Fragment>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
        </React.Fragment>
      );
    }
  }
`}
                </code>
            </pre>
            <h3>Сокращённая запись Fragment</h3>
            <pre>
                <code>
                {` class Columns extends React.Component {
    render() {
      return (
        <>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        </>
      );
    }
  }
`}
                </code>
            </pre>
            <p>Фрагменты, объявленные с помощью {'<React.Fragment>'}, могут иметь ключи.<br/>key — это единственный атрибут, допустимый у Fragment.  </p>

        </div>
    )
}

export default RFragment 