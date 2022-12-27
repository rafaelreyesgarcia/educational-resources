function Item({ name, isPacked }) {

  /* 
  challenge
  show ❌ for unpacked items
  show ✔ for packed items
  */

  /* 
  code to refactor
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
  */

  /*
  solution attempt
  let itemContent = name + '❌';
  if (isPacked) {
    itemContent = name + '✔';
  }
  */

  /* solution */
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}