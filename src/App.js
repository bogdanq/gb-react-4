import React from "react";
import "./App.css";

export class AppClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
    // this.foo = this.foo.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    // return {
    //   id: "test",
    // };

    return null;
  }

  test = () => {
    console.log("test");
  };

  // синхронный
  componentDidMount() {
    // запросы
    // работа с ДОМ
    // подписки
    // мутации
    // таймеры
    // обновление состояния
    console.log("componentDidMount");
    this.handleClick();

    document.addEventListener("click", this.test);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // if (nextProps.count === this.props.count) {
    //   return false;
    // }

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    // return null
    return {
      position: "300px",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", snapshot);
    // запросы
    // работа с ДОМ
    // подписки
    // мутации
    // таймеры
    // обновление состояния

    if (prevState.count === 3) {
      this.handleClick();
    }
  }

  handleClick = () => {
    this.setState(
      (state) => ({ ...state, count: state.count + 1 })
      // () => {
      //   console.log("update", this.state);
      // }
    );
    // this.forceUpdate();
    // updater
    // {}
    // (state) => ({})

    // callback () => {}
  };

  componentWillUnmount() {
    // удалять таймеры
    // делать отписки
    // очищать состояние
    console.log("componentWillUnmount");
    document.removeEventListener("click", this.test);
  }

  render() {
    // this.props
    const { name } = this.props;
    const { count } = this.state;

    console.log("render", this.state);

    return (
      <div className="App" onClick={this.handleClick}>
        AppClass {count}
      </div>
    );
  }
}
