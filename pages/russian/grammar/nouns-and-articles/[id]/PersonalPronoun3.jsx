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
      <h3>В дательном падеже</h3>
      <TableHorizontal
        numberOfColumns="2"
        data={{
          Именительный: ["я", "ты", "он(о) / она", "мы", "вы", "они"],
          Дательный: ["мне", "тебе", "ему / ей", "нам", "вам", "им"],
        }}
      />

      <h3>С предлогом</h3>
      <TableHorizontal
        numberOfColumns="2"
        data={{
          "к кому": [
            "к мне",
            "к тебе",
            "к нему / ней",
            "к нам",
            "к вам",
            "к ним",
          ],
          "благодаря кому": [
            "благодаря мне",
            "благодаря тебе",
            "благодаря нему / ней",
            "благодаря нам",
            "благодаря вам",
            "благодаря ним",
          ],
        }}
      />

      <div className="text-box">
        <ul className="styled-list-with-flags">
          <li>
            <span className="fi fi-ru"></span>
            <p>Я надеюсь, что вам тут понравится.</p>
          </li>
          <li>
            <span className="fi fi-ru"></span>
            <p>Хотелось бы, чтобы ты пришёл чуть раньше.</p>
          </li>
          <li>
            <span className="fi fi-ru"></span>
            <p>Вы не могли бы нас сфотографировать?</p>
          </li>
          <li>
            <span className="fi fi-ru"></span>
            <p>Они поддерживают дружеские отношения друг с другом.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
