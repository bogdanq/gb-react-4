import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

export function ProfilePage() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const setShowName = useCallback(() => {
    dispatch({ type: "SHOWNAME" });
  }, [dispatch]);

  return (
    <>
      <div>
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
