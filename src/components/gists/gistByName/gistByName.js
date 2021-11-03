import debounce from "lodash.debounce";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gistsByNameSelector, getGistsByName } from "../../../store/gists";

export function GistByName() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { gistsByName, gistByNameError, gistByNamePending } =
    useSelector(gistsByNameSelector);

  const searchDebounced = useMemo(() => {
    return debounce((query) => dispatch(getGistsByName(query)), 500);
  }, [dispatch]);

  useEffect(() => {
    if (search) {
      searchDebounced(search);
    }
  }, [searchDebounced, search]);

  if (gistByNamePending) {
    return <h1>Pending gistByNamePending...</h1>;
  }

  if (gistByNameError) {
    return (
      <div>
        <h1>Error gistByNameError</h1>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
          {gistsByName?.map((gist) => (
             <h2 key={gist.url}>{gist.url}</h2>
          ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Search</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <hr />

      {gistsByName?.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}
    </div>
  );
}
