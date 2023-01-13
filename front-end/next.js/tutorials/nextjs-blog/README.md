# client side navigation

the Link component enables client-side navigation between two pages in the same next.js app

page transition happens using js which is faster than default navigation

the browser does not load the full page again when navigating unlike traditional navigation.

each page only loads what's necessary (code splitting)

when rendering homepage, code for other pages isn't served initially ensuring homepage loads quick even if the entire app has 100 pages.

pages are isolated to prevent the entire app from not working in case of errors.

in production, when Link appears in viewport, next.js automatically prefetches code linked for that page in the background.

https://nextjs.org/docs/api-reference/next/link

https://nextjs.org/docs/routing/introduction

# assets, metadata and CSS

next.js servers static assets under top-level `public` directory.

files in that folder are referenced from the root of the application.

useful for `robots.txt`, google site verification and other static assets.

regular HTML img elemement requires to manually
- ensure image responsiveness
- optimization
- only load images when enter viewport

image next component is an extension to the img html element.

image optimization is supported by default (resizing, otpimizing and serving images in modern formats)

next.js optimizes images on demand.

build time is increased with static site generators that have to preload thousands of images.

cumulative layout shift is reduced. Core web vital that google uses in search ranking.

[image optimization](https://nextjs.org/docs/basic-features/image-optimization)

# metadata

modifying the `<head>` tag of a page.

Head is a next component to modify the `<head>` tag.

https://nextjs.org/docs/api-reference/next/head

customize <html> tag create a page `_document.js`

https://nextjs.org/docs/advanced-features/custom-document

the facebook SDK is commonly used to introduce facebook social plugins and other functionality

https://developers.facebook.com/docs/javascript/quickstart

script component is an extension of `script` html element, optimizes when additional scripts are fetched and executed.

the `strategy` property of the Script component defines when the third-party script should load.

`lazyOnLoad` loads this script lazily during browser idle time.

`onLoad` used to run any js code immediately after the script has finish loading.

Script component

https://nextjs.org/docs/basic-features/script

# styling

CSS modules allow to locally scope CSS at a component level by creating unique class names.

use the same CSS class name in different files without worrying about name collisions.

how to style in next.js
- CSS modules
- Sass
- postCSS like tailwind
- CSS-inJS like styled-jsx and emotion

code splitting works on CSS modules.

modules are extracted from js bundles at build time and generate .css files.

load global CSS to an application create `pages/_app.js`

default export of `_app.js` is a top-level react component that wraps all pages in an application.

this component can keep state between pages or add global styles.

https://nextjs.org/docs/advanced-features/custom-app

adding `_app.js` requires a server restart

utility classes refer to an approach of writing CSS selectors.

meta tags describes page's content

boolean `home` prop adjusts size of title and image

images are preloaded with `priority` attribute

# styling tips

clsx library lets you toggle class names easily

`npm install clsx`

Alert component that accepts type `success` or `error`

```css
.success {
  color: green;
}

.error {
  color: red;
}
```

```jsx
import styles from './alert.module.css';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
```

next.js compiles CSS using PostCSS

`postcss.config.js` should be created to customize PostCSS( to add Tailwind)

`npm install -D tailwindcss autoprefixer postcss`

next.js allows to import Sass `.scss` and `.sass` extensions.

before using built-in support, install it first

`npm install -D sass`

# pre-rendering and data fetching

pre-rendering means generating HTML for each page in advance instead of having it done on the client.

pre-rendering boosts SEO and performance.

when a page is loaded, javascript runs and makes the page interactive (hydration).

**static site generation SSG**

generates HTML at build time once. HTML is reused on each request.

**server-side rendering SSR**

generates HTML on each request. 

static generation with and without data so page can be built once and served by a CDN.

- marketing pages
- blog posts
- e-commerce product listings
- help and documentation

if a page can't be pre-render ahead of a user's request, then server-side rendering is ideal. 

use SSR when data needs to be up to date with every request.

## static generation with or without data

if there's no need to fetch external data, pages automatically are statically generated when the app is built.

accessing the file system. fetching external API or query the data base at build time can still be supported by static generation.

**static generation with data**

exporting a page component also exporting an async function `getStaticProps`

inside this function, data can be fetched and sent as props to the page.

on development mode, `getStaticProps` runs on each request.

adding blog posts in markdown can be done in a top-level directory `posts` 

markdown file has a metadata section called YAML front matter

parse front matter using gray-matter

create a utility function to parse data from file system.

top-level directory `lib`

the utility function
- uses `fs` node.js module to read files from file system.
- `path` module to manipulate file paths.
- `matter` library that lets you parse metadata in each md file

implement `getStaticProps()` in `pages/index.js`

store the return from invoking the utility function inside the `props` object in `getStaticProps`

the blog posts will be passed to the `home` component as a prop.

[data fetching](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

`getStaticProps`

the previous was data fetching from the file system.

data fecthing can be done from an external API endpoint

```jsx
export async function getSortedPostsData() {
  const res = await fetch('..');

  return res.json();
}
```
data fetching by querying a database directly

```jsx
import dataBaseSDK from 'databaseSDK'

const databaseClient = dataBaseSDK.createClient(...)

export async function getSortedPostsData() {
  return databaseClient.query('SELECT posts...')
}
```

`getStaticProps` only runs on the server side and won't be included in JS bundle for the browser.

database queries can be written without them being sent to browsers.

`getStaticProps` runs on every request in dev and runs just at build time in production. (fallback key returned by `getStaticPaths`).

`getStaticProps` can only be exported from a page not from a non-page file as react needs the required data before rendering.

static generation is not suitable for data that updates frequently or changes on user request.

> server-side rendering is suitable for data that can be dynamic at runtime so rendering at build time is not a good option.

you can fetch data by
- reading the file system
- querying a database
- fetching external API

you can generate a web application with
- pre-render 
    - static site generation SSG
    - server-side rendering SSR
- client-side rendering

## fetching data at request time

server-side rendering is useful for dynamic data at run time

on each request, data is fetched and HTML is generated.

```jsx
export async function getServerSideProps(context) {
  return {
    props: {
      // props for component
    },
  };
}

```

suitable for pre-rendering a page whose data must be fetched at request time.

**TTFB** time to first byte is slower than `getStaticProps` due to the server having to compute the result on every request as result can't be cached by a CDN without extra config.

## client-side rendering

- statically generate parts that don't require external data.
- when page loads, fetch external data from client using js and populate remaining parts (**hydrate**)

good for dashboards 

good when the app is
- private (requires auth)
- user-specific
- SEO is not important
- page overall doesn't require pre-rendering
- data is frequently updated, data fetching done at request time.

**SWR** 

react hook created by next.js 

handles caching, revalidation, focus tracking, refetching on interval ++

```jsx
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>
}
```

# dynamic routes

`getStaticProps` fetched required data to render index page.

when each page path depends on external data, dynamic URLs are useful.

- `/posts/<id>` where id is the name of the md file in `posts` directory

- create page called `[id].js` under `pages/posts` 

pages wrapped in square brackets are dynamic routes.

```jsx
import Layout from '../../components/layout';

export default function Post() { 
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  //returns a list
}

export async function getStaticProps({ params }) {
  // fetch data for blog post using params.id
}
```

export async function `getStaticPaths` returns a list of possible values for id

`getStaticProps` fetches necessary data for blog post with a given id. Is given `params` which contains `id`

> the returned list must be an array of objects as each object must have `params` and `id` key otherwise `getStaticPaths` fail

`paths` contain array of known paths returned by `getAllPostIds()`

https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required

## dynamic routes essentials'

fetch external API or query database

`getStaticProps` `getStaticPaths` can fetch data from any data source.

```jsx
export async function getAllPostIds() {
  const res = await fetch('...');
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
```

`getStaticPaths` in dev runs on every request in prod runs at build time.

`fallback: false` any paths not returned by `getStaticPaths` results in **404 page**

paths returned from static paths are rendered at build time.

paths that have not been generated at build time won't default to 404, next.js will be a fallback in these paths

next.js statically generates the requested path.

if fallback is blocking, new paths are server-side rendered with staticProps and cached.

dynamic routes can be extended to catch all paths `...`

```jsx
// getStaticPaths return statement
return [
  {
    params: {
      id: ['a', 'b', 'c'],
    },
  },
];

// also an array in getStaticProps
```

`pages/posts/[...id].js` can match `/posts/a` and `posts/a/b`, etc

> access built-in next.js router by importing [`useRouter`](https://nextjs.org/docs/api-reference/next/router#userouter) hook.

**custom 404**

```jsx
// pages/404.js
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}
```

# creating API routes

**req** is an instance of `http.IncomingMessage` plus pre-built middleware.

**res** is an instance of `http.ServerResponse` plus helper functions.

## API routes essentials

don't fetch API route from `getStaticProps` or `getStaticPaths`

write server-side code directly in them or call helper function.

handling form input
- form that sends a `POST` request to API route
- write code to save it to database
- api route isn't part of client bundle so server-code is safe

```jsx
export default function handler(req, res) {
  const email = req.body.email;
}
```

API routes can also be dynamic.

# deploying next.js app

## push to github

`git remote add origin https://github.com/rafaelreyesgarcia/nextjs-blog.git

git push -u origin main

use the Vercel platform

serverless platform for static and hybrid applications built to integrate with headless content, commerce or database.

additional resources

https://nextjs.org/docs/basic-features/data-fetching

https://nextjs.org/docs/basic-features/environment-variables

https://nextjs.org/learn/seo/introduction-to-seo