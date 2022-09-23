import { For } from "solid-js";
import { Cell } from "./Cell";

export function Row(props) {
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(5, 1fr)",
        "grid-gap": "5px",
      }}
    >
      <For each={props.values[props.r]}>
        {(_, index) => <Cell values={props.values} r={props.r} c={index()} />}
      </For>
    </div>
  );
}
