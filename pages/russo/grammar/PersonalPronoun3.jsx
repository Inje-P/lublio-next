import { useState } from "react";
import TableFull from "@/components/TableFull";
import TableVertical from "@/components/TableVertical";
import TableHorizontal from "@/components/TableHorizontal";

export default function PersonalPronoun3() {
  const [example1, setExample1] = useState(1);
  const [example2, setExample2] = useState(1);
  const [example3, setExample3] = useState(1);

  return (
    <>
      <h3>Личные местоимения в форме дательного падежа</h3>
      <TableFull
        numberOfRows="3"
        columns={["Singular", "Plural"]}
        data={{
          "1st person": ["мне", "нам"],
          "2nd person": ["тебе", "вам"],
          "3rd person": ["ему / ей", "им"],
        }}
      />

      <h3>К кому</h3>
      <TableFull
        numberOfRows="3"
        columns={["Singular", "Plural"]}
        data={{
          "1st person": ["ко мне", "к нам"],
          "2nd person": ["к тебе", "к вам"],
          "3rd person": ["к нему / к ней", "к ним"],
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
