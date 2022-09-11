import { createSignal, For, onMount, onCleanup } from "solid-js";
import { Row } from "./Row";

const word = ["T", "R", "A", "I", "N"];
const alphabet = Array.from(Array(26)).map(
  (_, i) =>
    new Object({
      letter: String.fromCharCode(i + 65),
      color: 0,
    })
);

function evaluateAnswer(answer) {
  return answer.map((letter, index) => {
    let status = { count: 0, color: 0 }; // 0: grey, 1: yellow, 2: green
    word.forEach((char, i) => {
      if (char === letter.toUpperCase()) {
        status.count++;
        if (index === i) {
          status.color = 2;
          alphabet[letter.toUpperCase().charCodeAt(0) - 65].color = 2;
        } else if (status.color === 0) {
          status.color = 1;
          alphabet[letter.toUpperCase().charCodeAt(0) - 65].color = 1;
        }
      }
    });
    return status;
  });
}

export function Grid() {
  const [values, setValues] = createSignal([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const position = { r: 0, c: 0 };

  onMount(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key.match(/^[a-zA-Z]$/) && position.c < 5) {
        let newValues = values();
        newValues[position.r][position.c] = e.key;
        setValues([...newValues]);
        position.c = position.c + 1;
      }

      if (e.key === "Enter") {
        const evaluation = evaluateAnswer(values()[position.r]);
        console.log(evaluation);
      }

      if (e.key === "Backspace") {
        if (position.c > 0) {
          let newValues = values();
          position.c = position.c - 1;
          newValues[position.r][position.c] = "";
          setValues([...newValues]);
        }
      }
    });
  });

  onCleanup(() => {
    window.removeEventListener("keydown");
  });
  return (
    <div
      style={{
        width: "290px",
        height: "348px",
        "margin-inline": "auto",
        display: "grid",
        "grid-template-rows": "repeat(6, 1fr)",
        "grid-gap": "5px",
      }}
    >
      <For each={values()}>
        {(_, index) => <Row r={index()} values={values} />}
      </For>
    </div>
  );
}
