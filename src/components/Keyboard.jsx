const qwertyArray = [...`qwertyuiopasdfghjklzxcvbnm`];
const qwerty = Array.from(Array(26)).map((_, i) => {
  return { letter: qwertyArray[i], color: 0 };
});
qwerty.push({ letter: "Enter", color: 0 });
qwerty.push({ letter: "Delete", color: 0 });

export function Keyboard(props) {
  function keyClickHandler(e) {
    console.log(e.target.innerText);
    if (
      e.target.innerText !== "Enter" &&
      e.target.innerText !== "Delete" &&
      props.position().c < 5
    ) {
      props.setValues(
        [props.position().r],
        [props.position().c],
        e.target.innerText
      );
      props.setPosition({ r: props.position().r, c: props.position().c + 1 });
    }

    if (e.target.innerText === "Delete") {
      if (props.position().c > 0) {
        props.setPosition({ r: props.position().r, c: props.position().c - 1 });
        props.setValues([props.position().r], [props.position().c], "");
      }
    }
  }
  return (
    <div>
      {qwerty.map((item) => {
        return (
          <button type="button" onClick={keyClickHandler}>
            {item.letter}
          </button>
        );
      })}
    </div>
  );
}
