import { useState } from "react";
import TableFull from "@/components/TableFull";
import TableVertical from "@/components/TableVertical";
import TableHorizontal from "@/components/TableHorizontal";

export default function PersonalPronoun4() {
  const [example1, setExample1] = useState(1);
  const [example2, setExample2] = useState(1);
  const [example3, setExample3] = useState(1);

  return (
    <>
      <h3>Personalpronomen in der Akkusativform</h3>
      <TableFull
        numberOfRows="3"
        columns={["Singular", "Plural"]}
        data={{
          "1st": ["mich", "uns"],
          "2nd": ["dich", "euch"],
          "3rd": ["ihn / sie / es", "sie / Sie"],
        }}
      />

      <h3>über jemanden</h3>
      <TableFull
        numberOfRows="3"
        columns={["Singular", "Plural"]}
        data={{
          "1st": ["über mich", "über uns"],
          "2nd": ["über dich", "über euch"],
          "3rd": ["über ihn / sie / es", "über sie / Sie"],
        }}
      />

      <div className="text-box">
        <ul className="styled-list-with-flags">
          <li>
            <span className="fi fi-de"></span>
            <p>Ich meine, du solltest weniger rauchen.</p>
          </li>
          <li>
            <span className="fi fi-de"></span>
            <p>Du brauchst keine Rücksicht auf mich zu nehmen.</p>
          </li>
          <li>
            <span className="fi fi-de"></span>
            <p>Wir sind über diese Meinungen weg.</p>
          </li>
          <li>
            <span className="fi fi-de"></span>
            <p>Sie haben mir große Autorität zugewiesen.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
