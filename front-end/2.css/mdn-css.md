# Cascading Style Sheets

- used to layout and style web pages.
- user agent styles (default browser style for html documents).
- user agents often refer to browsers. 
	
## **Syntax**
- rule based language.
- rules define specific styles that can be applied to elements.
- **Selector** – selects the HTML element that the rule will style.
- `{}` - curly braces contain **declarations** – these have *property* and *value* pairs.
- each pair defines the property of the element we are selecting, and the value we'll give it.
- properties and values are separated by colons. 
	
## **Specifications**
- web standard technologies are defined in documents called specifications (specs)
- standards organizations publish these (W3C, WHATWG, ECMA, Khronos)
	
## **Classes**
- selectors can target specific elements we tag with a class attribute. 
- Classes begin with a period `.classname`
- classes can be applied to multiple elements.
- the rule can define the element and class to target specific elements with a certain class.
	
## **Selectors**
- targets HTML to apply styles to content.  
- **descendant combinator** – defines an element nested in another element (parent nested).
- **adjacent sibling combinator** – adding a style to elements directly after in the same hierarchy 	level in the html document.
	
## **Applying CSS to HTML** 

**External Stylesheet**
- link element inside the head element.
- href attribute references the file on the system/server.

**Internal Stylesheet**
- style element inside the head element.
- not efficient with multiple pages.

**Inline Styles**
- css declarations that affect a single html element with a style attribute. 
- least efficient implementation of them all.
- content management systems might restrict you to use inline and internal methods.

## **Specificity** 
- hierarchy (cascade) of rules to define what selector is stronger when there's two different selectors and one element
- later styles replace conflicting earlier styles	
- classes have more specificity than element selectors
	
**Properties** -  human readable identifiers.

**Values** – indicates how to style the property.

when both are paired (property: value) is called a **CSS declaration**.

CSS declaration blocks (multiple declarations) are paired with selectors to produce CSS rulesets

properties and values are case-insensitive.

## **Functions**

function-name (parentheses to enclose the values of the function)
	
`@rules`
instructions for what CSS should perform or how it should behave

`@media`
use conditional logic for applying css styling.

**Shorthands**
set several values in a single line.

## **CSS Comments**
`/* */`

## **White Space**
- actual space, tabs and new lines
- browsers ignore CSS whitespace
- property names never have whitespace
- different values are separated by one space

## **Processing CSS**
- browser loads the HTML 
- converts HTML into a DOM (represents the document in the computer's memory)
- browser fetches resources linked to the document including css files
- browser parses css figuring what rules should be applied to which nodes in the DOM (render 	tree)
- render tree is laid out 
- visual display is shown (painting)

## **DOM (document object model)**
- tree like structure 
- each element, attribute and text becomes a DOM node in the tree structure 
- nodes defined by relationship between nodes
- nodes can be parents, children, siblings 
- DOM is where the CSS and the HTML document meet

rules and selectors that the browser don't understand get ignored

## **Cascade and Inheritance**

**Conflicting rules**

### **Specificity**

how the browser decides which rule to apply when multiple rules have different selectors to the same element.

universal selector, combinators and negation pseudo-class have no effect on specificity.

**Element** selector more general, less specific.

**Class** selector more specific.

### **Inheritance**

child (nested) elements inherit property values from selectors targeting parent elements

some don't inherit (width, margin, padding, border property).

**Controlling inheritance**

4 universal special properties to control inheritance in CSS.

`inherit` ­ property value applied to be the same as the parent element.

`initial` – initial value of that property of a selected element.

`revert` -  resets the property value to the browser's default style.
- `revert-layer` – resets to the value established in the previous cascade layer.

`unset` -resets property to its natural value (if it inherits naturally or goes to initial)

### **Cascade** 

when two rules apply to the same element and have equal specificity, the one that comes last is applied.

the order of CSS rules.

**Source order** – the one that comes last in the CSS will be applied.

### **Common practice**

- define generic styles for the basic elements.
- Create classes for elements that are different.

## **Selectors**

- used to target HTML elements with CSS rules.
- Subject of the selector – targeted HTML  elements.
- Selector list to combine same css rules for different elements.
- Type class and ID selectors (`name` `.class` `#id`)
- Attribute Selectors `a[attribute]`
- Pseudo-classes and Pseudo-elements (`a:hover` `p::first-line`)
- Combinators (`article > p` )

### **Type selector**

- tag name (element selector)
- Universal selector (`*`) 
- selects everything in the document.
- Used in reset stylesheets (to strip out all of the browser styling)

### **Class selectors**

- starts with a `.` character.
- Applied to a class.
- Element selector and class selector can be combined.
- Multiple classes can be combined.

### **ID selectors**

- starts with a `#` character.
- ID is unique.
- Don't use the ID multiple times.

### **Attribute selectors**

`[attr]` – matches elements with an attribute.

`[attr=value]` – matches elements with attribute and exact value.

`[attr~=value]` – matches elements with attribute with exact value or contains the value word. 

`[attr|=value]` – matches element with attribute with exact value or the value begins with the word followed by a hypen.

**Substring matching selectors**

`[attr^=value]` matches attribute whose value begins with the string.

`[attr$=value]` matches attribute with value ending with the string.

`[attr*=value]` matches attribute that contain the value anywhere within the string.


The `i` character matches all values regardless case-sensitive

### **pseudo-classes**

- selector that selects an element in a specific state.
- Can be written without any element selector but is usually recommended to be specific.
- pseudo-elements
- acts as if a new html has been added.

Pseudo-classes and pseudo-elements can be chained together.

- `::before` and `::after` generates content with the content property.
- Usually used to insert icons. 
- Used with css counters.

### **Combinators**

- **descendant combinator** selects nested elements.
- **child combinator** selects only the direct child of an element.
- **adjacent sibling combinator** selects only the next sibling element. (not nested).
- **general sibling combinator** selects all next siblings.

## **Box Model**

- types of display
- outer and inner
- inner display defines how the elements inside a box are laid out. 

### **types of boxes**

**block boxes**
- the box will break onto a new line.
- It will become as wide as its container, filling up 100% of the space.
- Width and height are respected.
- Padding margin and border will cause other elements to be pushed away.

**inline boxes**
- won't break a new line.
- Width and height don't apply.
- Vertical padding, margins and borders will apply but won't cause other inline boxes to move away.
- Horizontal padding margins and borders will apply and will move other inline boxes away.

### **Parts of a box**

**content**
**padding**
- can't have negative values.
- Pushes content away from the border.
- Top, right, bottom, left
**border**
`syntax (width, style, color)`
top, right, bottom, left
 
### **margin** 

- separates elements (boxes) with empty space.
- Can have positive and negative values.
- Negative values can cause boxes to overlap.

`Margin-top, right, bottom, left`

margin collapsing.

`width` and `height` attributes define the values for the content box.

Padding and border is added to those values to get a total box value.

The margin is not counted in the box size.

`Box-sizing: border-box `
tells the browser to include the padding and border in the width and height properties.

> `Box-sizing` should be applied to the html element.

`::before ::after` should be set to` box-sizing:inherit`.

- inline elements don't respect width and height.
- Vertical margin padding and border is respected.
- They don't change the relationship of other content to the inline box.
- Padding and border overlaps.
- Horizontal padding, margins and borders are respected.
- Will cause other content to move away from the box.

`display:inline-block`
- respects the width and height.
- Avoids overlapping.
- Doesnt' break onto a new line.
- Gives links a larger hit area by adding padding.

## **Backgrounds and Borders**

### **background properties**

**color**

**image**
- `url('image.png')`
- multiple can be separated with a comma.

**repeat**
`no repeat, repeat-x, repeat-y, repeat` (both)

**size** 
- can take length and percentage values.
- `Cover` – covers the box area while retaining aspect ratio.
- `Contain` – makes the image the right size to entirely fit in the content box.
- `Auto` – rendered at intrinsic dimensions and proportions.
- Dimensions (width, height) proportions (aspect ratio).

**position**
- position in the box.
- Top left (0,0)
- (x,y) coordinates.
- Top, bottom, left, right, center
- 4 value syntax is (x, xoffset, y, yoffset)

**gradient**

**attachment** 
- defines how the background scrolls, when the content scrolls.
- `Scroll` background scrolls when the page is scrolled.
- `Fixed` – background fixes to viewport. 
- `Local` – fixes the background to the element.
	
**background shorthand syntax**
`background: image position size repeat attachment origin clip color`

**border shorthand syntax**
`border: width style color`

`border-radius`

## **Text Directions**

**writing modes** – different directionalities in written text.

- `Horizontaltb` – top to bottom block flow.  
(inline, block)
- `Vertical-rl` – right to left.
- `Vertical-lr` – left to right.  
(block, inline)
	
`inline-size` (replacement for width in horizontal mode)

`block-size` (replacement of height, in horizontal mode)

### **logical properties**

- replace physical properties
- `inline-size` (width) 
- `block-size` (height) 
- `margin-block-start` (refers to the margin at the start of the block dimension)
- `padding-left` is `padding-inline-start` (inline dimension)
- `border-bottom` to `border-block-end`
- logical properties are linked to the writing mode. 

replace top right bottom and left
- `Block-start`
- `inline-end`
- `block-end`
- `inline-start`

## **Overflowing Content**

box sizes are assigned by `width` and `height` (`inline-size`, `block-size`)

- `overflow:visible` – default. We see the content when it overflows.

- `overflow:hidden` – hides the overflow.

- `overflow:scroll` – adds scrollbars when content overflows.
- `overflow-x` `overflow-y`
- `word-break` or `overflow-wrap` are preferred over `overflow-x`
- values are in (x,y) coordinates.
- `overflow:hidden`
- `overflow:auto` – only adds scrolls if its needed.

## **Values and Units**

value types are also called data types.

**Integer** – whole numbers. Can be negative.
**Number** - it might have a decimal. Can be negative.

**Dimension** – a number attached with a unit. (`45deg`, `5s`, `10px`)

includes
- length
- angle
- time
- resolution

**Percentage** 
- fraction relative to another value. 
- child relative to the parent of the same property.
- some properties don't accept percentage values.

### **Lengths**

**relative**  
- relative to the parent's element properties or viewport sizes.
- `Em`, `ex`, `ch`, `rem`, `lh`, `vw`, `vh`, `vmin`, `vmax`

> `ems` and `rems` are the most important (used?).

**absolute**
- centimeter(`cm`), milimeter(`mm`), quarter-millimeters (`q`), inches (`in`), picas (`pc`), points (`pt`), pixels.(`px`)
- useful for printing rather than display on screen. Pixels are the most useful.

### **Colors**

- color system in modern computers is 24bit.
- allows displaying 16.7 million distinct colors.
- 256 different values per channel (red, green, blue) (256*256*256)

**color values**

**1. color keywords** (predefined values)

**2. hexadecimal values**
- 6 values. Each value can take one of 16 values.
- 0 to 9, 10-5(A-F)
- each pair represent one RGB channel.

**3. RGB and RGBA**
- each channel can be a number between 0 and 255.
- alpha channel is opacity. 0 transparent. 1 opaque. 

**HSL and HSLA**
- hue saturation and lightness.
- Hue can be between 0 and 360.
- saturation – value from 0 to 100%
- lightness value from 0-100%

### **position value type**

- set of two coordinates 
- keywords like `top` `right` `bottom` `left` `center`.
- offsets in **lengths**.

> if only one is set, the other will default to center.

**Keywords** are called **identifiers** (predefined values)

**strings** are text we can use as value. (content property)

### **functions**

reusable section of code that can be run multiple times to complete a repetitive task.

`calc()` helps to set values that can't be defined when writing css.
- Calculation that needs to be done at runtime.

## **Sizing Items**

### **intrinsic size**

- an image that contains sizing information.
- Size determined by the image itself, not by any formatting we apply to it.
- Div elements don't have an intrinsic size. (width and height).

### **extrinsic size**

- formatted size given to an element.
- Percentages act as length units relative to another property of another element.
- Block elements fill 100% of space. Percentages reduce that space. 

### **Min and max sizes**

- min properties will give a minimum size, but it will grow larger if the content in it grows.
- Max properties do the reverse. Used to make images responsive to smaller screens.

### **Viewport units**
sizing relative to the viewport of the user with `vw` `vh` 


## **Styling Tables**

`table-layout:fixed`
can size the columns according to width of headings.

`:nth-child selector`
spreads 100% in different widths according to how many columns there are.

`Border-collapse: collapse `
standard best practice.

### **Custom fonts for headings and data elements**

`letter-spacing` on headings and cells. 

`center-align` the text in table cells. 

`font-weight` also helps separate headings and cells

`background-image` can be added to `thead` and `tfoot`
color of text inside the header and footer.

`text-shadow` makes it readable.

linear gradients to `th` and `td` elements.

`:nth-child` `even` and `odd` for zebra stripes
               

## **Images, Media and Forms**

- images and video are replaced elements.
- Css can't affect internal layout. 
- Only position can be affected among other elements.
- Aspect ratio is displayed by default (an intrinsic dimension of x y)
- max-width 100% will enable the image to become smaller in size than the box.
- Technique works with video and iframe.

### **Object-fit** 

can resize replaced elements in a variety of ways.

`Cover` – sizes image down. Aspect ratio is maintain. Fills the box. Some parts will be cropped.

`Contain` – sizes image down. Letterboxing happens if the aspect ratio differs from the box. All the image will fit in the box, some areas of the box won't be filled with the image to preserve its aspect ratio and fit all the image.

Default image values prevent from stretching in flex box and grid layouts. 

### **Form elements**

- some form elements don't inherit font styling by default.
- good idea to set margins and paddings to 0 then add them as you need.
- `auto overflow` is also useful to only show a scrollbar when needed.

**Form reset (to provide a base style)**

`font-family` and `font-size` (as some form elements don't inherit font styling by default).

`box-sizing:border-box`

`padding` and `margin` to 0

`auto overflow`

## **Debugging CSS**

### **browser devtools**

- **HTML pane** of devtools is already normalized by the browser.
- **view source** is html source code as stored on the server.
- **HTML tree** in browser shows what the browser is rendering.
- you can expand on shorthands.
- toggle values in the **rules view** on and off when a panel is active.
- **layout view** shows the box model and description of properties.
Includes properties that have an initial value set.
- Solving specificity issues
- Helps figuring out if the property and value is supported by the browser.
- Validate html and css to debug.
- detects if something overriding CSS

Reduced test case (isolate the problem) is useful.

Dynamically generated code **(CMS) content management system**.

## **Organizing CSS**

- a **style guide** should be set.
- peep **consistency** in the code.
- **readability** to have each property and value pair on a new line.
- Comment your CSS
- **general styles section**
- **utilities section**(styling choices to lots of different elements)
- **sitewide section**
- **specific section**
- avoid too specific selectors.
- multiple stylesheets to break different styles. (**modular styling**).
- css coding guides 

### **object oriented CSS (OOCSS)**

separate css into reusable objects.

examples
- SMACSS
- ITCSS
- ACSS

### **BEM** 

- block element modifier
- a block is a stand alone entity
- a modifier is a flag on a block or element that changes styling.

**pre processors**
runs over raw files and turns them into a stylesheet.

**post processors**
- takes finished stylesheet and optimizes it.
- Removes comments to reduce size.

> **variables** help optimize and shorten code and improve readability.


## **Text and Font Styling**

1. text starts at the top left (or top right in RTL) and flows towards the end of the line, then goes onto the next line. 
2. This pattern repeats until all the content has been placed.

**Font styles** – properties that affect the text's font.

**Text layout styles** – properties that affect spacing and layout features.

- All text inside an element is styled as one single entity.

- The `<span>` element or pseudo-elements can target just specific text.

### **Fonts**

`color` 
foreground content color.

`font-family`
sets a different font for the text.

**Web safe fonts**
fonts available in most operating systems.

**default fonts**
- serif
- sans-serif
- monospace
- cursive
- fantasy

**font stacks**
supply multiple fonts so that the browser has multiple fonts to choose from. 

`font-size`

size of the font defined in length units and percentages.

pixels the number of pixels high the text should be.

`em` is equal to the font size set on the parent element (the width of a capital M contained inside it).

`rem` equal to the font size set on the root element (html).

`font-size` is set to 16px by default on browsers. 

`h1` element has a default size of 2rem so final size would be 32px. 

setting font-size on container elements to not complicate calculations.

> Best to set the default to `10px` so the calculations are easier.

`Font-style`

- normal
- italic
- oblique (simulated italic)

`font-weight`

- normal
- bold
- lighter
- bolder
- 100-900 (numeric boldness values).

`text-transform`

- none
- uppercase
- lowercase
- capitalize (all words capitalized)
- full-width (glyphs are written inside a fixed-width square).

`text-decoration`

- none
- underline
- overline
- line-through

shorthand for (`line`, `style`, `color`, `thickness`)

`line` (none, underline, overline, line-through, underline overline, underline line-through)

`style` (solid, double, dotted, dashed, wavy)

`font-shadow` 

`font-shadow: horizontal offset vertical offset blur radius base color.`

> Multiple shadows separated by commas.

### **Text Layout**

`text-align: left right center justify`

`line-height`
sets the height of each line of text.

Can take length and size units. But also a unitless value (multiplier).

the font-size gets multiplied and becomes the line-height
recommended 1.5 or 2 (double spaced)

`letter-spacing`
space between letters.

`word-spacing`
space between words.

`font-family`

`font` shorthand for many properties
style, variant, weight, stretch, size, line-height, 

`font-size` and `font-family` are the only required. 

A forward slash `/` needs to be put between `font-size` and `line-height`.


## **Styling Lists**

**vertical rhythm** – lists keeping same vertical spacing as surrounding elements.

`list-style-type`
type of bullet to use. Styles `<ul>` or `<ol>`

`list-style-position`
bullet position inside or outside of the list.

`list-style-image`
custom image for the bullet.

`List-style` shorthand for
`type`, `image`, `position` 

type can be used as a fallback in case image is not available.

Html attributes for lists
start, reversed, value (Specific number), 


## **Styling Links**

### **link states**

`link` – a link that has a destination.   
`visited` – link that has been visited.  
`hover` – hovered over by a mouse pointer.  
`focus` – a link that is focused.   
`active` – a link that is activated.  


**Default values**

- links are **underlined**
- unvisited links are **blue**
- visited links are **purple**
- hovering a link makes the pointer change to a **hand icon**
- focused links have an **outline** around them.
- Active links are **red**

css properties to change link defaults
- color 
- cursor
- outline 

order of selectors
1. link
2. visited
3. focus
4. hover
5. active

Including an image to the links can be done with 
`a[href^=”http”]` 

using background properties, size and padding

> absolute URLs should be used for external links  
relative URLs should be used for links to your own site

## **Web Fonts**

`@fontface `
sets `font-family `

`src` contains the url for the file and the format of the file.

Multiple declarations can be separated by commas.

font editor in mozilla 

variable fonts are advanced fonts that allow many variations in a single file.

## **Introduction to CSS Layouts**

**normal flow**
how the broser lays out html pages by default.

**Block elements** – appear one below the other.
**Inline elements** – appear beside one another.

**(X,Y)** inline, block  in horizontal mode. 

### **Methods to change the elements layout**

**1. `display`**

- block
- inline
- inline-block

default display properties of elements

- paragraph `<p>` – block. 
- Anchor  `<a>`– inline. 
- List item `<li>` – block.
	
**2. Flexbox flexible box layout**

- one dimensional (either rows or columns)
- applied to the parent elements. So direct children become flex items.
- `flex-direction` of the parent has an initial value of row.
- `align-items` in the parent has an initial value of stretch.
- The parent becomes the ***flex container***.
- Children become ***flex items***.
- `flex` property can instruct children to fill the empty space of the container.

**3. float**

`left` `right` `none` `inherit` 

can cause block elements to wrap along one side of an element. (images have floating text around them)

the floated element is moved to left or right and removed from normal flow.

Surrounding content floats around it.

**4. position**

- precisely control placement of boxes inside other boxes.
- manages and fine tunes the position of specific items on a page.

`Static`
default all elements have.

`Relative`
- moves an element relative to  its position in normal flow.
- it overlaps other elements.
- `top`, `right`, `bottom` and `left` properties should be used with relative position.
- element is pushed away by the value set in these properties to the opposite way.

`absolute`
- moves out of the normal flow completely. Its in its own layer.
- `top`, `right`, `bottom`, `left` properties will push it away from the edges of its container.
- then its fixed to a position relative to the edges of its closest positioned ancestor.
- useful for complex layout effects.
- different content panels sit on top of one another and are shown or hidden at command.
- information panels that sit off screen by default but can slide on screen using a control button.

`fixed`
fixes an element relative to the browser's viewport.

`sticky`
an element acts like static until it hits a defined offset from the viewport, then it acts fixed.
 
**5. table layout** 

features designed for tables can be used for non table elements. 

Disadvantages
- heavy on markup
- Inflexible
- Difficult to debug
- Semantically wrong.

**6. multi-column layout**
- content of a block to layout in columns. 
- `column-count` tells the browser how many columns we want to have
- `column-width` tells the browser to fill the container with many columns as  possible defined of a specified width.

**7. Grid Layout**
- two dimensional (rows and columns)

`display:grid`

- `grid-template-rows` and `grid-template-columns` define row and column tracks for the parent. 
- `grid-column` and `grid-row` sets the start and end line of each item.


## **Normal Flow**

### **default layout**

System that defines how elements are placed inside the browser's viewport.

Elements can be adjusted by changing position or removing them entirely from the flow. 

### **Box model**

padding, margin and borders are added to the content of an element.

### **Block level elements**

- fills the available inline space of the parent element containing it.
- grow along the block dimension to accommodate the content. 
- are laid out vertically.
- Adjacent elements sit below. 
- Span 100% of the width of the parent.
- Are as tall as the child content inside.
- Total width and height is `content`+`padding`+`border`
- separated by margins. If they touch, the larger one remains due to margin collapsing.


### **Inline elements**

- can't have their width or height styled. 
- They all sit on the same line along with any adjacent text content. 
- Overflowing content then moves to a new line. 

## **Flexbox**

- one dimensional layout for arranging items in *rows* or *columns*. 
- flex items expand to fill additional space or shrink to fit into smaller spaces.
- **floats** and **positioning** were the only features for creating layouts before flexbox.
- display:flex is set on the parent element to act as a container for flex items.

### **Main axis**
- axis running in the direction of the items. 
- As rows across the page, or columns down the page.
- `main-start` is where the axis begins, and `main-end` is where the axis ends.

### **Cross axis**

axis running perpendicular to the direction of the items.

`cross-start`, and `cross-end`.

### **Flex container**

the parent element that contains the flex items.

### **Flex items**

items laid out as flexible boxes inside the container.

`flex-direction` 
- defines which direction the main axis runs.
- The direction where the flex items are laid out in.
- default is set to `row` (in the direction of browser's default)
- `column` defines the main axis from top to bottom.
- `rows` defines the main axis from left to right.
- `row-reverse` and `column-reverse` reverse the previous two.

`flex-wrap`
- sometimes flex items will overflow the container if the content of the items is bigger than the width and height of the container.
- `flex-wrap` wrap the container
- `flex`length unit in the children.

`flex-flow` shorthand for (`direction`, `wrap`)

`flex`
unitless value that defines how much available space along the main axis each flex item will take up compared to other flex items.

- 1 means all items will take an equal amount of the spare space left after padding and margin properties.
- 1 flex item and 3 flex item, would mean the first item will take 25% and the 2 item 75% of the available space.
-  inimum size value can be given. `flex: 1 200px`
- each item will be given 200px minimum, after that the proportions kick in.
- also accepts the keyword `auto`.

flex is a shorthand for 
- `grow` – how much it grows to fill the container available space.
- `shrink` – how much it shrinks in order to prevent overflow.
- `basis` – the minimum space per flex item.

`align-items`
- controls where the items sit on the cross axis.
- default value is `stretch`. (stretches all items to fill the parent in the direction of the cross axis)
- `center` – causes the items to maintain intrinsic dimensions, but centered across the cross axis.
- `flex-start` and `flex-end` aligns items at the start or end of the cross axis.

`align-self`
override individual flex item behavior from the group of flex items.

`justify-content`
- default value is `flex-start` (items sit at the start of the main axis)
- `flex-end` to sit at the end of the main axis.
- `center` – sit in the center of the main axis.
- `space-around` – distributes all items evenly along the main axis. Space left at either end.
- `space-between` Similar to `space-around` but no space at either end.

`order`
- changes the layout order of flex items without affecting the source order.
- default order value of 0.
- higher values will appear later in the order than lower values.
- negative order values will make items to appear earlier than 0 values.

### **Nested flex boxes**
makes a flex item a container for more flex items.


## **Grids**

- two dimensional layout
- content can be lay out in rows and columns.
- collection of horizontal and vertical lines.
- gaps space between rows and columns.
- gaps are referred to gutters.

`display:grid` enables the layout on the parent as a container.

`grid-template-columns` 
adds columns with any length unit or percentage values.

`grid-template-columns: 200px 200px 200px;` for three columns. 

`fr` unit represents a fraction of the available space in the grid container.

length values will use the space first, and the available space will be set with fractions.

`column-gap` and `row-gap` creates space between tracks.

`gap` is a shorthand for both (row, column)

`repeat()` 
- function that repeats all or a section of tracks.
- `grid-template-columns: repeat(3, 1fr)` will repeat 3 columns of 1 fraction each.

`grid-template-columns` or rows are explicit grids.

**implicit grid** is when content is placed outside the explicit grid.

default tracks in the implicit grid are auto sized.

`grid-auto-rows` `grid-auto-columns` give size to tracks on implicit grids.

`minmax()` function
sets a minimum and maximum size for a track.

`auto-fill`
used in the repeat function to create as many columns as will fit into the container.

Grids always have lines.

Numbered from 1 related to the writing mode.

Arranging items in accordance with lines can be done with 
- `grid-column-start`
- `grid-column-end`
- `grid-row-start` 
- `grid-row-end`

`grid-column` and `grid-row` are shorthands.

`grid-template-areas`
- alternate way to arrange items on the grid.
- Gives elements names
- every cell of the grid must be filled.
- Span across two cells, repeat the name.
- Leave a cell empty use a period character.
- Areas must be rectangular.
- Areas can't be repeated in different locations.

`grid-area` property applied to elements to placed them on the grid as defined on grid-template area.

**grid frameworks**
tend to be based around 12 or 16 column grids.

## **Floats**

- originally used for floating images inside blocks of text. 
- Element with the float set will be taken out of the normal layout flow.
- Stuck to the side that its defined in the property.
- Content that could come below, will be wrapped around now.
- The boxes of the following item run behind the float.

### **Clearing floats**

stopping the following element to wrap around the float element.

`left`, `right` both values for the clear properties.
 
clearing boxes wrapped around the float

`clearfix`
add empty content after the box that contains both the float and content wrapping around it.

Setting clear property to both.

### **Using overflow as clearfix alternative**

`overflow:auto` does the same.

**BFC** block formatting context.

`display: flow-root`

## **Positioning**
take elements out of normal flow. 

### **static positioning**

- default in every element.
- Normal position in document flow.

### **Relative positioning**

- modifies the position with `top`, `right`, `bottom` and `left` properties. 
- Define where to move the positioned element to.
- Values can be any units. 
- Results are inverse as the properties defined. `top` pushes the element to the bottom. 

### **Absolute positioning**
- no longer exists in the normal document flow.
- Used for popup information boxes, control menus, rollover panels.
- `top` `right` `bottom` `left` properties define the distance the element should be from the containing element.
- margins affect positioned elements.
- margin collapsing doesn't.

### **Positioning contexts**

- The containing element of an absolute positioned element depends on the position property of the ancestor.
- If ancestors don't have position explicitly set, default is static. 
- The absolute positioned element will be contained in the initial containing block. 

Initial containing block has the dimensions of the viewport.

Is the block that contains the html element. 

### **Ancestor relative**

nested element absolute

### **z-index**

- stacking order of positioned elements.
- the source order is from top to bottom. 
- Elements later in the source order get on top over earlier elements in the source code.
- Reference to the Z axis.
- Positive values move then to the front.
- Negative values move them to the back.
- Z-index is set to auto (0) by default.
- Unitless values. 

### **Fixed positioning**

- similar to absolute.
- Positioned the element in place of relative to the viewport instead to the nearest positioned ancestor.
- Top right bottom or left properties are needed in 0 to fix the element on that side. 

### **Sticky positioning**

- hybrid between relative and fixed.
- Acts relative until scrolled to a certain treshold defined with side properties (top right bottom left)
- then it becomes fixed to those values.

### **Scrolling index**
created with data terms and data descriptions wrapped in a data list.

Sticky to the nearest ancestor. 

## **Multiple Column Layout**

simulates printed content like newspapers.

### **three column layout**

wrapper contains 

`column-count`
creates the number of columns.

`column-width`
size of the columns. 

The browser gives as many columns as it can of the specific size. 

Remaining space is shared between the columns.

`column-gap`
changes the size of the gap (space) between columns.

`column-rule`
adds a rule between columns. Similar to border. 

shorthand for (width, style, color)

`column-span`
causes an element to span across all or none (default) the columns. 

`break-inside`
fragmentation rule that can avoid fragmentation.

`page-break-inside`
also can avoid fragmentation.

## **Responsive Design**

HTML is responsive by default.

A **liquid layout** – browser will automatically reflow the text to fit the window. 

> Fixed layouts create overflow problems. 

Early in mobile development, two sites were needed, one for mobiles and one for desktops. 

that brought issues as the user was trapped in mobile versions without being able to access desktop version. 

Responsive design was coined in 2010.

**fluid images** (`max-width`, `min-width`)
media queries 

**responsive** – a layout that can respond to the device being used to view the content. 

### **Mobile first design**

multiple-column flexbox and grid are responsive by default.

multicol is the oldest of the 3.

### **responsive images**

- `max-width` images
- the image when showed smaller than intrinsic size, might be wasting bandwidth.
- You may want different aspect ratios of images on mobile and desktop.
- You might want to show different images.

`<picture>` element and the `<img>` `srcset` and `sizes` attributes solve those problems.

### **responsive typography**

- media queries can also change the size of the font.
- never set text using viewport units.
- The user loses ability to zoom any text.
- `calc()` function solves the zoom problem. 

### **viewport meta tag**
- tells mobile browsers that the width of the viewport should be set to the device width.
- Scales the document to 100% of intended size.
- Always include the meta tag.
- Mobile browser render the site with a viewport width wider than the real device width (default 980px)
- then shrink the rendered result so it fits in display.
- Media queries won't work as intended if this tag is not included.

## **Media Queries**

apply styles only when the browser and device environment matches the rule.

***Syntax*** 

```css
@media media-type and (media-feature-rule) {
/* CSS rules */   
}
```
***media-type*** – tells the browser what kind of media this code is for.

`all`, `print` or `screen` values.

***media-feature*** – rule or condition for the css to be applied.

minimum and maximum width create layouts that respond to different screen sizes.

### **Orientation**

allows to test `portrait` or `landscape` mode

desktop has a standard landscape. 

### **Hover**

- level 4 specification
- condition that gets triggered if the user can hover an element with a pointing device.
- touch screen and keyboard navigation doesn't hover. 

### **Pointer**

`none` 
the user has no pointer device.

`fine` 
mouse or trackpad. Precisely target a small area.

`Coarse`
finger on a touchscreen.

`and logic`
combines media features.

`or logic` 
any of the mentioned queries can trigger the rules if one or the other is met.

`not logic`
reverses the meaning of the query. It will only get triggered if the condition isn't met.

### **Best practice**

start with a mobile small design, and add media queries as the viewport increases in size.

Simple single column mobile first design.

Cards that are at least 200px wide and as many of these cards to fit into the main article.

```css
div {
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```
combination of modern layout methods enhanced with media queries is the best. Approach.

## Legacy Layout Methods

use float property to create what grid and flexbox do nowadays.
