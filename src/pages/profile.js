import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Header } from "../components";
import { toggleShowProfile, profileSelector } from "../store/profile";
import { conversationsSelector } from "../store/conversations";

export function ProfilePage(props) {
  const [count, setCount] = useState(0);

  const memoSelector = useMemo(() => conversationsSelector(props), [props]);
  // const memoSelector = useCallback(
  //   (state) => conversationsSelector(props)(state),
  //   [props]
  // );

  const { firstName, lastName, isVisibleProfile } =
    useSelector(profileSelector);
  const countFromRedux = useSelector(memoSelector);

  const dispatch = useDispatch();

  return (
    <div>
      <Header />

      <button onClick={() => dispatch(toggleShowProfile())}>
        toggle profile
      </button>

      <button onClick={() => setCount(count + 1)}>setCount {count}</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        set countFromRedux {countFromRedux}
      </button>

      {isVisibleProfile && (
        <>
          <h1>firstName: {firstName}</h1>
          <h1>lastName: {lastName}</h1>
        </>
      )}
    </div>
  );
}
