import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
// import { toggleShowName } from "../../store/profile/actions";

export function ProfilePage() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const setShowName = useCallback(() => {
    dispatch({ type: "SHOWNAME" });
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Profile: {profile.name} </h1>
        <input
          type="checkbox"
          checked={profile.showName}
          value={profile.showName}
          onChange={setShowName}
        />
        <span>Show Name</span>
        {profile.showName && <div>{profile.name}</div>}
      </div>
    </>
  );
}
