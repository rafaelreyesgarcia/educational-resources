# from react to next.js

`npm init -y` create a package.json

`npm install react react-dom next`

install react and next to add them as dependencies to package.json

`node_modules` contains dependencies

`index.html`
- don't need cdn scripts
- `html` and `body` tags are created by next.js
- code that interacts with `app` and `ReactDOM.render()` has to be removed
- next.js compiles JSX 
- no more `script` tags

`index.html` becomes `index.jsx`

- move file to a `pages` folder in root directory.

- default export to main react component in `index.jsx`

- add a script to package.json to run next.js dev server

run dev server will start the server in port 3000 `localhost:3000` 

**fast refresh** gives instantaneous feedback on edits, pre-configured with next.js

# how next.js works

next.js provides a framework to structure an application.

## development and production environments

development happens in the local machine

production happens when the application is deployed and consumed

during development state, next.js optimizes the environment to enhance developing experience (typescript, ESLint, fast refresh)

during production, next.js optimize for the end-user experience. (compilation, minification, etc)

next.js has a built in compiler written in rust and SWC (platform to compile, minify and bundle code)

## compiling

JSX and typescript are modern versions of javascript.

compiling refers to the process of taking code in one language, and outputting it in another language or another version of the same language.

## minifying

developers write code optimized for human readability using
- comments
- spaces
- indents
- multiple lines

minification is the process of removing unnecessary code formatting to optimize for speed of execution.

next.js automatically minifies js and css.

## bundling

modules, components and functions are modular, composable and functional.

this architecture creates a complex web of file dependencies.

bundling is the process of resolving web dependencies and merging (packing) the files (modules) into an optimized bundle for the browser.

## code splitting

applications can be split up into multiple pages accessible from different URLs.

each page becomes a unique **entry point** into the application. 

goal is to improve application initial load time by only loading what is necessary to run that page.

next.js built in support for code splitting.

each file in `pages/` splits into its own js bundle during build time.

- code between pages is also split into another bundle to avoid redownloading the same code in different entry points.
- next.js after initial page load can pre-load code of other pages.
- dynamic imports manually split the code

## build time, runtime

build time happens when the application code is prepared for production.

next.js optimizes code to be deployed on servers and consumed by end-users

- html files for static generated pages
- js for rendering pages on the server
- js for adding interactivity on the client
- css files

run time is the period of time when the app runs in response to a user's request after it has been built and deployed.

## client and server

client refers to the browser that sends requests to server where the application is deployed.

turns the response received into an interface the user can interact with.

servers are computers that store application code, receive requests, compute and execute business logic and sends back a response.

## rendering

unavoidable unit of work to convert code into HTML representation.

- can take place on the server or client.
- can happen ahead of time, during build time or even at runtime.

**pre-rendering**

serverside rendering and static site generation are referred as pre-rendering

the fetching of external data and transformation of react components into HTML happens before the result is sent to the client.

**client-side**

browser receives an empty HTML shell from server along with javascript instructions of how to construct the UI.

the initial rendering work happens on the user's device.

`useEffect()` to fetch data can use client-side rendering

next.js pre-renders by default.

## pre-rendering types

**server-side rendering**

HTML generated on a server for each request.

generates HTML, JSON data and JS instructions to make the page interactive are sent to the client.

HTML displays a non-interactive page.

**hydration**

react uses JSON data and js instructions to make components interactive.

`getServerSideProps` renders pages using server-side rendering

server components don't require client-side js to render.

allows to keep logic on the server and only send the result to the client reducing bundle size sent to client to improve performance.

**static site generation**

HTML is generated on the server, but there's no server at runtime.

content is generated once at build time, and HTML is stored in a CDN and re-used for each request.

`getStaticProps`  renders pages using static site generation

incremental static regeneration creates or update static pages after build time to avoid rebuilding the entire site if data changes.

## network

linked computers that are capable to share resources

application code can be distributed to origin servers, content delivery networks and the edge.

**origin servers**

when an origin server receives a request, it does some computation and returns a response. This response can be moved to a CDN.

**content delivery network**

store static content like HTML and image files in multiple places around the world.

when a new request is made, the closes CDN can respon with a cached result.

computation doesn't happen at each request.

CDNs are well suited to store static result of server computation.

**the edge**

concept for the fringe of the network closes to the user.

edge servers are distributed to multiple locations.

edge servers can run small code unlike CDNs

both caching and execution can be done.

reduces code sent to client and request doesn't have to go all the way to the origin thus reducing latency.

next.js code can be run at the edge with middleware and react server components


next.js features
- page-based routing system supports dynamic routes
- pre-render (SSG and SSR)
- automatic code splitting
- client-side routing and optimized prefetching
- built-in CSS and Sass support and for any CSS-in-JS library
- API routes to build API endpoints with serverless functions

