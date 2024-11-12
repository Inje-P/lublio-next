import { useState } from "react";
import TableFull from "@/components/TableFull";
import TableVertical from "@/components/TableVertical";
import TableHorizontal from "@/components/TableHorizontal";

export default function PersonalPronoun2() {
  const [example1, setExample1] = useState(1);
  const [example2, setExample2] = useState(1);
  const [example3, setExample3] = useState(1);

  return (
    <>
      <h3>Les pronoms toniques sujets</h3>
      <TableFull
        numberOfRows="3"
        columns={["Singulier", "Pluriel"]}
        data={{
          "1st person": ["moi", "nous"],
          "2nd person": ["toi", "vous"],
          "3rd person": ["lui / elle", "eux / elles"],
        }}
      />

      <div className="text-box">
        <ul className="styled-list-with-flags">
          <li>
            <span className="fi fi-fr"></span>
            <p>Je voudrais un croissant, s'il vous plaît.</p>
          </li>
          <li>
            <span className="fi fi-fr"></span>
            <p>Tu serais un amour de me rendre ce service.</p>
          </li>
          <li>
            <span className="fi fi-fr"></span>
            <p>Nous sommes parce que nous devenons.</p>
          </li>
          <li>
            <span className="fi fi-fr"></span>
            <p>
              Vous pourriez venir ici, ou bien me donner un coup de téléphone.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
