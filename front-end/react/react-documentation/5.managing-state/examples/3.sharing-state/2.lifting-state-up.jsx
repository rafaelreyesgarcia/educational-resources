import { useState } from 'react';

// CHILD COMPONENT
function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  // removed state from child component
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

// PARENT COMPONENT

export default function Accordion() {
  // 1. remove state from child component so parent passes state to children
  const [activeIndex, setActiveIndex] = useState(0); // using the index of the child instead of a boolean
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      {/* 2. pass hardcoded data as props */}
      <Panel
        title="About"
        isActive={activeIndex === 0} //when activeIndex is 0 then isActive is true
        onShow={() => setActiveIndex(0)}
        /*
          default state is 0, so it will by default display children.
          onShow passes an arrow function that sets the state to 0
          when state is 1, onShow is used as an event handler in the onClick event of a panel component.
        */
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1} //when activeIndex is 1 then isActive is true
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
