/* 
challenge

ColorSwitch renders a button that changes the page color.

wire it up to onChangeColor event handler prop

clicking the button also increments the page click counter.

you should stop that from happening
*/

export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button>
      Change color
    </button>
  );
}

// solution

export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button onClick={(e) => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}

