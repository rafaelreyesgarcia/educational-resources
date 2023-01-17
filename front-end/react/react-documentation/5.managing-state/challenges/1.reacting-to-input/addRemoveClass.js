import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let background = 'background';
  let picture = 'picture';

  // calculating class names based on current state
  if (isActive) {
    picture += ' picture--active';
  } else {
    background += ' background--active';
  }

  return (
    <div
      className={background}
      onClick={() => setIsActive(false)}
    >
      <img 
        src='https://i.imgur.com/5qwVYb1.jpeg'
        alt='rainbow houses in kampung pelangi, indonesia'
        className={picture}
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
      />
    </div>
  )
}