import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getGists,
  gistsSelector,
} from "../../../store/gists";

export function Gist() {
  const dispatch = useDispatch();
  const { gistError, gistPending, gists } = useSelector(gistsSelector);

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
    }
  }, [dispatch, gists]);

  if (gistPending) {
    return <h1>Pending ...</h1>;
  }

  if (gistError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>Gists</h1>
      {gists?.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}

      <button onClick={() => dispatch(getGists(1))}>1</button>
      <button onClick={() => dispatch(getGists(2))}>2</button>
      <button onClick={() => dispatch(getGists(3))}>3</button>

      <hr />
    </div>
  );
}
