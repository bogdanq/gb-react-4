import { useDispatch, useSelector } from "react-redux";
import { toggleShowProfile, profileSelector } from "../store/profile";

export function ProfilePage(props) {
  // const memoSelector = useMemo(() => conversationsSelector(props), [props]);
  // const memoSelector = useCallback(
  //   (state) => conversationsSelector(props)(state),
  //   [props]
  // );

  const { firstName, lastName, isVisibleProfile } =
    useSelector(profileSelector);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleShowProfile())}>
        toggle profile
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
