# installation

1. install tailwind CSS

`npm install -D tailwindcss` (-D flag shortcut to --save-dev)

or

`npx tailwindcss init`

2. configure template paths 

`tailwind.config.js` 

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

add @tailwind directives to main CSS file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. start wailwind CLI build process

```cmd
npx tailwindcss -i ./scr/input.css -o ./dist/output.css --watch
```

5. add compiled CSS file to the `<head>` of the html file. 


# install with vite using react

1. create project

```cmd
npm create vite@latest my-project -- --template react
cd my-project
```