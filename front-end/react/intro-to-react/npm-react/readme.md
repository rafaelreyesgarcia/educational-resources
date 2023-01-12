# tooling

install prettier

`npm i -D prettier`

create a script to format files 

```json
"scripts": {
    "format": "prettier \"src/**/*.{js,html}\" --write"
  },
```

backlashes allow prettier to handle the path instead of the shell.

--write flag allows to rewrite (format) the code in src files following prettier guidelines

vs code

- install prettier extension
- settings `format on save` enable
- settings `require config` check `prettier require config`

install eslint

`npm install -D eslint eslint-config-prettier`

install parcel

`npm install -D parcel-bundler`

install react

`npm i react react-dom`

`npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

# jsx

jsx needs `{}` to enclose javascript expressions.

an expression can be anything after an assignment operator

if else statements are not expressions but ternary operators are 

# hooks

single line arrow functions don't require `{}`

never go inside if statements or other hooks or for loops always at top level

useState returns an array

destructuring the array `const [state, useState] = useState('');`

for select tags `onChange` handler might not trigger so `onBlur` has to set the same event listener in order to prevent this. 

```jsx
<select
  id='animal'
  value={animal}
  onChange={e => setAnimal(e.target.value)}
  onBlur={e => setAnimal(e.target.value)}
>
  <option>ALL</option>
  {ANIMALS.map(animal => (
    <option key={id} value={animal}>{animal}</option>
  ))}
</select>
```

# effects

how to handle asynchronous code?

useEffect is disconnected from rendering

schedules the function after the render happens

# devtools

NODE_ENV=development

larger and slower developer environment than production

strict mode

don't use deprecated stuff

