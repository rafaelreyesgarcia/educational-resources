const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // break on attribute modification

    // Regular
    console.log('what\'s up');

    // Interpolated
    console.log('hello I am a %s string!', '🦐');
    // above not needed with ES6 template literals
    let shrimp = '🦐';
    console.log(`hello I am a ${shrimp} string!`);

    // Styled
    console.log('%c I am some great text', 'font-size: 20px; background: red' )

    // warning!
    console.warn('oh no!');

    // Error :|
    console.error('shit!');

    // Info
    console.info('crocodiles eat 3-4 people per year');

    // Testing
    const p = document.querySelector('p');


    console.assert(p.classList.contains('ouch'), 'that is wrong!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.dir(p);
    console.clear();

    // Grouping together
    dogs.forEach(dog => {
      console.group(`${dog.name}`);
      console.log(`this is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('wes');
    console.count('rafa');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/rafaelreyesgarcia')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });
    
    console.table(dogs); 