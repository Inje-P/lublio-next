import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  // URL Paths
  const [path1, setPath1] = useState(null);
  const [path2, setPath2] = useState(null);
  const [path3, setPath3] = useState(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const paths = pathname.split("/");

    if (paths[1] != null) {
      setPath1(paths[1]);
    }
    if (paths[2] != null) {
      setPath2(paths[2]);
    }
    if (paths[3] != null) {
      setPath3(paths[3]);
    }
  }, []);

  return (
    <div style={{ marginBottom: "30px" }}>
      <ul className={styles.breadcrumbs}>
        {path1 != null ? (
          <>
            <li>
              <Link href={"/" + path1}>{path1}</Link>
            </li>
          </>
        ) : null}
        {path2 != null ? (
          <>
            <li>&#x3e;</li>
            <li>
              <Link href={"/" + path1 + "/" + path2}>{path2}</Link>
            </li>
          </>
        ) : null}
        {path3 != null ? (
          <>
            <li>&#x3e;</li>
            <li>
              <Link href={"/" + path1 + "/" + path2 + "/" + path3}>
                {path3}
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
