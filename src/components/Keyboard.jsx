const qwertyArray = [...`qwertyuiopasdfghjklzxcvbnm`];
const qwerty = Array.from(Array(26)).map((_, i) => {
  return { letter: qwertyArray[i], color: 0 };
});

export function Keyboard() {
  return (
    <div>
      {qwerty.map((item) => {
        return <button>{item.letter}</button>;
      })}
    </div>
  );
}
