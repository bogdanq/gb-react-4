import React from "react";
import "./App.css";

// props = {name: "test"}
// react component
export function App({ children, name, test2, myFoo, component }) {
  // console.log(props);
  // const { children, name } = props;

  // react element
  return (
    <div className="App" style={{ background: "blue" }}>
      <div>hello react, {name}</div>
      <div>{children}</div>

      <ul>
        {test2.map((item) => (
          <li onClick={() => myFoo(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>

      <AppClass name={name} />

      {component}
    </div>
  );
}

export class AppClass extends React.Component {
  render() {
    // this.props
    const { name } = this.props;

    return <div className="App">AppClass {name}</div>;
  }
}

export const AppWitoutJSX = ({ children, name }) => {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("div", null, `hello react ${name}`),
    React.createElement("div", null, children)
  );
};
