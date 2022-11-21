function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`script load error for ${src}`));
  document.head.append(script);
}

loadScript('/scripts/main.js', script => {
  alert(`cool, the script ${scrip.src} is loaded`);
});

/* 
instead of this

loadScript('1.js', function(error, script) {
if (error) {
  handleError(error);
} else {
  loadScript('2.js', function(error, script) {
    if (error) {
      handleError(error);
    } else {
      loadScript('3.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          continue
        }
      });
    }
  });
}
});

*/

// standalone functions replace the pyramid of doom

loadScript('1.js', step1)

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    return;
  }
}

// PROMISES SOLVE PROBLEMS ABOVE

/* 

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    scrip.onerror = () => reject(new Error(`script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript(src);

promise.then(
  script => console.log(`${script.src} is loaded!`);
  error => console.log(`Error: ${error.message}`);
);

*/
