import { createEffect } from "solid-js";

export function Cell(props) {
  createEffect(() => {});
  return (
    <div
      style={{
        border: "2px solid var(--color-border)",
        color: "var(--color-text)",
        "font-size": "32px",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      }}
    >
      {props.values()[props.r][props.c].toUpperCase()}
    </div>
  );
}
