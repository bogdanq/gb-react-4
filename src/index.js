// @TODO useContext  рассмотреть
import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppClass } from "./App";

const getCount = () => {
  return { count: 0 };
};

const a = [1, 2, 3, 4];

// пользовательский хук
const useCounter = (initialState = 0) => {
  const [value, setValue] = useState(initialState);

  // уникальная логика для переиспользования

  return {
    value,
    setValue,
  };
};

const Test = () => {
  const { value, setValue } = useCounter();
  const [messageList, setMessageList] = useState([
    { author: "Bot", message: "Hello !" },
  ]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Test {value}</h1>
      <h1>Input {inputValue}</h1>
      <div>
        <input
          placeholder="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            // setMessageList обновить [...messageList, новое сообщение]
          }}
        >
          send
        </button>
      </div>
    </div>
  );
};

const Component = () => {
  const [count, setCount] = useState({ count: 0 });
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(0);
  const { value, setValue } = useCounter();
  const ref = useRef(null);
  // const [count, setCount] = useState(getCount);

  const findedUser = useMemo(() => a.find((user) => user === 4), []);
  const findedUserCb = useCallback(() => a.find((user) => user === 4), []);

  const cb = () => setCount((state) => ({ ...state, count: state.count + 1 }));

  useEffect(() => {
    const foo = () => {
      console.log("test effect");
    };
    // запросы
    // работа с ДОМ
    // подписки
    // мутации
    // таймеры
    // обновление состояния
    // ref
    console.log("useEffect ref");

    ref.current.focus();

    document.addEventListener("click", foo);

    return () => {
      console.log("unmount");
      document.removeEventListener("click", foo);
    };
  }, []);

  // useEffect(() => {
  //   if (!position) {
  //     // setValue(Math.random() * 1000);
  //     setPosition(200);
  //   }
  // }, [position]);

  useLayoutEffect(() => {
    if (!position) {
      // setValue(Math.random() * 1000);
      setPosition(200);
    }
  }, [position]);

  console.log("render");

  return (
    <>
      {/* <div className="App" onClick={() => setCount(count + 1)}> */}
      <div className="App" onClick={cb}>
        Function count {count.count}
        <button onClick={() => setVisible(!visible)}>setVisible</button>
        <button onClick={() => setPosition(0)}>setPosition</button>
        {visible && (
          <AppClass test="tets" count={count} findedUserCb={findedUserCb} />
        )}
        <input placeholder="input" ref={ref} />
        <div
          style={{
            transition: "all 0.5",
            position: "absolute",
            // left: position,
            left: 0,
            top: 0,
            width: 200,
            height: 200,
            background: "red",
          }}
        />
        <div onClick={() => setValue(100)}>Value {value}</div>;
        <Test />
      </div>
    </>
  );
};

ReactDOM.render(<Component />, document.getElementById("root"));
