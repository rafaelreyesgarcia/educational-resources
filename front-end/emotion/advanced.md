# best practices

## use typescript and object styles

this enables intellisense and some static type checking.

```jsx
const myCss = css({
  color: 'blue',
  grid: 1 // Error: Type 'number' is not assignable to type 'Grid | Grid[] | undefined'
})
```

## colocate styles with components

normal css styles are defined in separate file.

benefits of colocating styles with components, makes it easier to maintain as its easier to tell which components use a given piece of css.

style sharing approaches

1. export css objects

```jsx
export const errorCss = css({
  color: 'red',
  fontWeight: 'bold'
})

// Use arrays to compose styles
export const largeErrorCss = css([errorCss, { fontSize: '1.5rem' }])

import { errorCss } from '...'

return <p css={errorCss}>Failed to fizzle the frozzle.</p>
```

2. share styles via component reuse

```jsx
export function ErrorMessage({ className, children }) {
  return (
    <p css={{ color: 'red', fontWeight: 'bold' }} className={className}>
      {children}
    </p>
  )
}

// `fontSize: '1.5rem'` is passed down to the ErrorMessage component via the
// className prop, so ErrorMessage must accept a className prop for this to
// work!
export function LargeErrorMessage({ className, children }) {
  return (
    <ErrorMessage css={{ fontSize: '1.5rem' }} className={className}>
      {children}
    </ErrorMessage>
  )
}

import { ErrorMessage } from '...'

return <ErrorMessage>Failed to fizzle the frozzle.</ErrorMessage>

```

- component reuse allows to share both logic and styles
- styles are always colocated with components

## use `style` prop for dynamic styles

css prop or `styled` should be used for static styles

`style` prop should be used for dynamic styles.

some components might share static css, but some properties might be dynamic.

```jsx
<style>
  .css-1udhswa {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-style: url(https://i.pravatar.cc/150?u=0);
  }

  .css-1cpwmbr {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-style: url(https://i.pravatar.cc/150?u=1);
  }

  .css-am987o {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-style: url(https://i.pravatar.cc/150?u=2);
  }
</style>
```

## define colors and style constants as js variables

```jsx
export const colors = {
  primary: '#0d6efd',
  success: '#198754',
  danger: '#dc3545'
}
```
