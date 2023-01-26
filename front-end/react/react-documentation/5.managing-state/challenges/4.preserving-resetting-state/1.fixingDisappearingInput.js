import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  if (showHint) {
    return (
      <div>
        <Form /> {/* always render same element in same position */}
        <p><i>Hint: Your favorite city?</i></p>
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
      </div>
    );
  }
  return (
    <div>
      {/* {null} this would also work if Form stays in second position */}
      <Form />
      <button onClick={() => {
        setShowHint(true);
      }}>Show hint</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}