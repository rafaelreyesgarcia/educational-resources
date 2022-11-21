// fulfilled promise
let promiseResolved = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('done'), 1000);
});

// rejected with an error
let promiseRejected = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('whoops!')), 1000);
});

promiseResolved.finally(() => {console.log('promise is ready')});

promiseResolved.then(
  result => console.log(result),
  error => console.log(error)
);

// promiseResolved.then(console.log);
// console.log is called with result as argument, only handles a resolved promise

// promiseRejected.then(
//   result => console.log(result),
//   error => console.log(error)
// );

// promiseRejected.then(null, function) to only handle the error 

promiseRejected.catch(console.log);

// thenable

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result);
  })
  .then(console.log);

// fetch

// let promiseFetch = fetch(url);

// // make a request to github, load user profile, show avatar

// function loadJson(url) {
//   return fetch(url)
//     .then(response => response.json());
// }

// function loadGithubUser(name) {
//   return loadJson(`https://api.github.com/users/${name}`);
// }

// function showAvatar(githubUser) {
//   return new Promise(function(resolve, reject) {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = 'promise-avatar-example';
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }


Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(console.log);

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));

// Promise.allSettled

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => {
    results.forEach((result, num) => {
      if (result.status == 'fulfilled') {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == 'rejected') {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });
});

// async/await

async function f() {
  return 1;
  // return Promise.resolve(1) would be the same
}

f().then(console.log);


/* 

async function showAvatar() {
  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();



*/