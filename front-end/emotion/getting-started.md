# introduction

writting css styles with javascript.

predictable style composition.

rich features
- source maps
- labels
- testing utilities
- string and object styles supported

## framework agnostic

`npm i @emotion/css`

simplest way of using emotion, requires no additional setup (babel, configs)

supports vendor-prefixing, nested selectors, media queries.

server side rendering requires additional setup.

```js
import { css } from '@emotion/css'

const color = 'white'

render(
  <div
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)
```

## react

`npm i @emotion/react`

best used with a  configurable react build environment 

`css` prop similar to `style` 

server side rendering with zero configuration/

theming works right away

```jsx
import { css } from '@emotion/react'

const color = 'white'

render(
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)
```

`npm i @emotion/styled @emotion/react

if `styled.div` style API is preferred.


# install

`npm install --save @emotion/react`

```jsx
import { css } from '@emotion/react'

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
)
render(
  <SomeComponent>
    <AnotherComponent />
  </SomeComponent>
)
```

`styled` is a way to create react components that have styles attached to them.

`npm install --save @emotion/styled`

```jsx
import styled from '@emotion/styled'

const Button = styled.button`
  color: hotpink;
`

render(<Button>This is a hotpink button.</Button>)
```

emotion has an optional babel plugin to optimize styles by compressing and hoisting them.

vanilla emotion is used with `@emotion/css`

```js
import { css } from '@emotion/css'

const app = document.getElementById('root')
const myClassName = css`
  color: hotpink;
`
app.classList.add(myClassName)
```

# css prop

babel preset or JSX pragma is used to use the `css prop`

```json
{
  "presets": ["@emotion/babel-preset-css-prop"]
}

// new JSX runtimes react =>16.14.0
{
  "presets": [
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}

// using JSX runtimes with Next.js using next/babel preset

{
  "presets": [
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

set JSX pragma at the top of source file that uses `css prop`

```jsx
/**@jsx jsx */
```

similar to a linter configuration. Configures the jsx babel plugin to use `jsx` instead of `React.createElement`

if a zero-config tool with automatic detection of runtimes is used or using a react version that has the new jsx runtime (create react app 4) then the pragma should be different

```js
/** @jsx jsx */
import { jsx } from '@emotion/react'
```

any component or element with a `className` prop can use the `css` prop.

styles supplied to the prop are evaluated and computed class is applied to `className`

object styles

```jsx
render(
  <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      }
    }}
  >
    This has a hotpink background.
  </div>
)
```

string styles

```jsx
import { css } from '@emotion/react'

const color = 'darkgreen'

render(
  <div
    css={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
  >
    This has a hotpink background.
  </div>
)
```

css from `@emotion/react` doesn't return computed class name string, so other emotion based styles inside `css` prop, other `css` calls or `styled` API can be used.

**style precedence**

class names containing styles from `className` prop override `css` prop styles

class names from sources other than emotion are ignored and appended to the computed class name.

this allows components with styles defined on `css` prop to be customized via `className`

default styles ar eoverriden in `ArticleText`

```jsx
const P = props => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'Sans-Serif',
      color: 'black'
    }}
    {...props} // <- props contains the `className` prop
  />
)

const ArticleText = props => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray'
    }}
    {...props} // <- props contains the `className` prop
  />
)

const SmallArticleText = props => (
  <ArticleText
    css={{
      fontSize: 10
    }}
    {...props} // <- props contains the `className` prop
  />
)
```

styles are concatenated together inserted via `insertRule`

```css
.css-1 {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  font-family: sans-serif;
  color: black;
}

.css-2 {
  font-size: 14px,
  font-family: Georgia, serif,
  color: darkgray;
}

.css-3 {
  font-size: 10px;
}

/* final result */

.css-result {
+ margin: 0;
/* - font-size: 12px; */
+ line-height: 1.5;
/* - font-family: 'sans-serif'; */
/* - color: black; */
/* - font-size: 14px, */
+ font-family: Georgia, serif,
+ color: darkgray;
+ font-size: 10px;
}
```

# styled components

`styled` is a way to create react components with styles attached to them.

`styled` is inspired by `styled-components` and `glamorous`

`styled` is similar to `css` except is called with an html tag or component and then called with template literal for string styles or regular function call for object styles.

```jsx
import styled from '@emotion/styled'

const Button = styled.button`
  color: turquoise;
`

render(<Button>This my button component.</Button>)
```

interpolations or arguments in `styled` are called with `props` to be able to change the styles based on the props

```jsx
import styled from '@emotion/styled'

const Button = styled.button`
  color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
`

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))

render(
  <Container column>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
  </Container>
)
```

styling any component

```js
import styled from '@emotion/styled'

const Basic = ({ className }) => <div className={className}>Some text</div>

const Fancy = styled(Basic)`
  color: hotpink;
`

render(<Fancy />)
```

`withComponent` changes the rendered tag.

```js
import styled from '@emotion/styled'

const Section = styled.section`
  background: #333;
  color: #fff;
`

// this component has the same styles as Section but it renders an aside
const Aside = Section.withComponent('aside')

render(
  <div>
    <Section>This is a section</Section>
    <Aside>This is an aside</Aside>
  </div>
)
```

emotion allows for components to be targeted like regular CSS selectors

```js
import styled from '@emotion/styled'

const Child = styled.div`
  color: red;
`

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`

render(
  <div>
    <Parent>
      <Child>Green because I am inside a Parent</Child>
    </Parent>
    <Child>Red because I am not inside a Parent</Child>
  </div>
)

// component selectors used with object styles

const Parent = styled.div({
  [Child]: {
    color: 'green'
  }
})

// object styles
import styled from '@emotion/styled'

const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
)

render(<H1 color="lightgreen">This is lightgreen.</H1>)
```

emotion passes all props except `theme` to custom components and only props that are valid html attributes 

`shouldForwardProp` customizes prop forwarding.

```js
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'

const H1 = styled('h1', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'color'
})(props => ({
  color: props.color
}))

render(<H1 color="lightgreen">This is lightgreen.</H1>)
```

composing dynamic styles that are based on props

```js
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyle = props =>
  css`
    color: ${props.color};
  `

const Container = styled.div`
  ${dynamicStyle};
`
render(<Container color="lightgreen">This is lightgreen.</Container>)
```

`as` prop uses styles from a styled component but change the element that's rendered.

```js
import styled from '@emotion/styled'

const Button = styled.button`
  color: hotpink;
`

render(
  <Button as="a" href="https://github.com/emotion-js/emotion">
    Emotion on GitHub
  </Button>
)
```

`as` prop is used by `styled` when it's not forwarded.

`as` prop by default is used for html tags and forwarded for components.

nesting selectors using `&`

```js
import styled from '@emotion/styled'

const Example = styled('span')`
  color: lightgreen;

  & > strong {
    color: hotpink;
  }
`

render(
  <Example>
    This is <strong>nested</strong>.
  </Example>
)
```

# composition

compose styles by interpolating value returned from `css` in another style block.

```js
import { css } from '@emotion/react'

const base = css`
  color: hotpink;
`

render(
  <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
    This is hotpink.
  </div>
)
```

regular css you can compose style together using multiple class names. Limiting as the order they're defined, is the order they'll be applied. Reason why `!important` is overused.

```js
render(
  <div>
    <style>
      {`
        .danger {
          color: red;
        }
        .base {
          background-color: lightgray;
          color: turquoise;
        }
      `}
      >
    </style>
    <p className="base danger">What color will this be?</p>
  </div>
)
// .base will always have higher precedence than .danger

// emotion can create styles and combine them (composition)
import { css } from '@emotion/react'

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`

render(
  <div>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles overwrite the danger
      styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </div>
)
```

composition allows to merge styles in the order you use them instead of css precedence rules.

# object styles

writing styles with objects.

instead of writing regular css properties `kebab-case` they are written with `camelCase`

object styles are useful with `css` prop, you don't need a css call like with string styles.

```js
// OBJECT STYLES

// with css prop
render(
  <div
    css={{
      color: 'darkorchid',
      backgroundColor: 'lightgray'
    }}
  >
    This is darkorchid.
  </div>
)

// styled
import styled from '@emotion/styled'

const Button = styled.button(
  {
    color: 'darkorchid'
  },
  props => ({
    fontSize: props.fontSize
  })
)

render(<Button fontSize={16}>This is a darkorchid button.</Button>)

// child selectors
render(
  <div
    css={{
      color: 'darkorchid',
      '& .name': {
        color: 'orange'
      }
    }}
  >
    This is darkorchid.
    <div className="name">This is orange</div>
  </div>
)

// media queries
render(
  <div
    css={{
      color: 'darkorchid',
      '@media(min-width: 420px)': {
        color: 'orange'
      }
    }}
  >
    This is orange on a big screen and darkorchid on a small screen.
  </div>
)

// if numbers are values of css properties, px is appended to the number unless css property is unitless
render(
  <div
    css={{
      padding: 8,
      zIndex: 200
    }}
  >
    This has 8px of padding and a z-index of 200.
  </div>
)

// nested arrays are flattened
render(
  <div
    css={[
      { color: 'darkorchid' },
      { backgroundColor: 'hotpink' },
      { padding: 8 }
    ]}
  >
    This is darkorchid with a hotpink background and 8px of padding.
  </div>
)

// fallbacks that don't support features with arrays
render(
  <div
    css={{
      background: ['red', 'linear-gradient(#e66465, #9198e5)'],
      height: 100
    }}
  >
    This has a gradient background in browsers that support gradients and is red
    in browsers that don't support gradients
  </div>
)

// with css
import { css } from '@emotion/react'

const hotpink = css({
  color: 'hotpink'
})

render(
  <div>
    <p css={hotpink}>This is hotpink</p>
  </div>
)

// composition
const hotpinkHoverOrFocus = css({
  '&:hover,&:focus': hotpink
})

const hotpinkWithBlackBackground = css(
  {
    backgroundColor: 'black',
    color: 'green'
  },
  hotpink
)

render(
  <div>
    <p css={hotpink}>This is hotpink</p>
    <button css={hotpinkHoverOrFocus}>This is hotpink on hover or focus</button>
    <p css={hotpinkWithBlackBackground}>
      This has a black background and is hotpink. Try moving where hotpink is in
      the css call and see if the color changes.
    </p>
  </div>
)
```

# nested selectors

nest selectors to target elements inside the class or component

```jsx
import { css } from '@emotion/react'

const paragraph = css`
  color: turquoise;

  a {
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
`
render(
  <p css={paragraph}>
    Some text. <a>A link with a bottom border.</a>
  </p>
)

// using & to select current class nested in another element

const paragraph = css`
  color: turquoise;

  header & {
    color: green;
  }
`
render(
  <div>
    <header>
      <p css={paragraph}>This is green since it's inside a header</p>
    </header>
    <p css={paragraph}>This is turquoise since it's not inside a header.</p>
  </div>
)
```

# media queries

media queries behave the same as regular css except no need to specify a selector inside the block

```jsx
import { css } from '@emotion/react'

render(
  <p
    css={css`
      font-size: 30px;
      @media (min-width: 420px) {
        font-size: 50px;
      }
    `}
  >
    Some text!
  </p>
)

// reusable media queries
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

render(
  <div>
    <div
      css={{
        color: 'green',
        [mq[0]]: {
          color: 'gray'
        },
        [mq[1]]: {
          color: 'hotpink'
        }
      }}
    >
      Some text!
    </div>
    <p
      css={css`
        color: green;
        ${mq[0]} {
          color: gray;
        }
        ${mq[1]} {
          color: hotpink;
        }
      `}
    >
      Some other text!
    </p>
  </div>
)
```

defining media queries in constants is easier than rewriting media queries each time.

they are still verbose so **facepaint** allows to define what each css property should be at each media query as an array

facepaint only works with object styles

`npm install --save facepaint`


```jsx
import facepaint from 'facepaint'

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

render(
  <div
    css={mq({
      color: ['green', 'gray', 'hotpink']
    })}
  >
    Some text.
  </div>
)
```

# global styles

insert global styles like resets or font faces

`Global` component is used for this.

accepts `styles` prop that accept same values as `css` prop, but inserts styles globally.

global styles are removed when styles change or global component unmounts.

```jsx
import { Global, css } from '@emotion/react'

render(
  <div>
    <Global
      styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
    />
    <Global
      styles={{
        '.some-class': {
          fontSize: 50,
          textAlign: 'center'
        }
      }}
    />
    <div className="some-class">This is hotpink now!</div>
  </div>
)
```

