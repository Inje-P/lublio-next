import { useState } from "react";
import TableFull from "@/components/TableFull";
import TableVertical from "@/components/TableVertical";
import TableHorizontal from "@/components/TableHorizontal";

export default function PersonalPronoun1() {
  const [example1, setExample1] = useState(1);
  const [example2, setExample2] = useState(1);
  const [example3, setExample3] = useState(1);

  return (
    <>
      <h3>Личные местоимения в форме именительного падежа</h3>
      <TableFull
        numberOfRows="3"
        columns={["Singular", "Plural"]}
        data={{
          "1st": ["я", "мы"],
          "2nd": ["ты", "вы"],
          "3rd": ["он / она / оно", "они"],
        }}
      />

      <div className="text-box">
        <ul className="styled-list-with-flags">
          <li>
            <span className="fi fi-ru"></span>
            <p>Я знаю, что вы имеете в виду.</p>
          </li>
          <li>
            <span className="fi fi-ru"></span>
            <p>Ты, конечно, не сможешь купить это с такой суммой денег.</p>
          </li>
          <li>
            <span className="fi fi-ru"></span>
            <p>Мы с ним хорошо знакомы с детских лет.</p>
          </li>
          <li>
            <span className="fi fi-ru"></span>
            <p>По этому вопросу они не достигли никакого соглашениения.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
