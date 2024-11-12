import { useState } from "react";
import TableFull from "@/components/TableFull";
import TableVertical from "@/components/TableVertical";
import TableHorizontal from "@/components/TableHorizontal";

export default function PersonalPronoun5() {
  const [example1, setExample1] = useState(1);
  const [example2, setExample2] = useState(1);
  const [example3, setExample3] = useState(1);

  return (
    <>
      <h3>Личные местоимения в форме творительного падежа</h3>
      <TableFull
        numberOfRows="3"
        columns={["Singular", "Plural"]}
        data={{
          "1st": ["мной", "нами"],
          "2nd": ["тобой", "вами"],
          "3rd": ["им / ею", "ими"],
        }}
      />

      <h3>С кем</h3>
      <TableFull
        numberOfRows="3"
        columns={["Singular", "Plural"]}
        data={{
          "1st": ["со мной", "с нами"],
          "2nd": ["с тобой", "с вами"],
          "3rd": ["с ним / с нею", "с ними"],
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
