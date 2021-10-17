import styles from "./header.module.css";
import { Link, useParams } from "react-router-dom";
import { Profile } from "../../pages";

export function Header() {
  const params = useParams();

  return (
    <>
      <div>
      <Link to={`/profile`}>
          <button>profile</button>
        </Link>
      </div>
    </>
  )
}
