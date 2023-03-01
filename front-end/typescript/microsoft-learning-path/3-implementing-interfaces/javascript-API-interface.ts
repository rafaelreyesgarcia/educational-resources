const fetchURL = 'https://jsonplaceholder.typicode.com/posts';

// interface describing the shape of json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}

async function showPost() {
  let posts = await fetchPosts(fetchURL);
  let post = posts[0];
  console.log('Post #' + post.id);
  console.log('Author:' + (post.userId === 1 ? 'Administrator' : post.userId.toString()))
  console.log('title' + post.title);
  console.log('Body:' + post.body);
}

showPost();