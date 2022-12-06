# HTML

## **Introduction**

- Hyper Text Markup Language
- Describes the structure of a web page
- consists of a series of elements
- elements contain instructions to the browser on how to display content

### **Web Browsers**
- they read HTML documents and display them
- the content inside the `<body>` section will be displayed in the browser
- The content inside the `<title>` element will be shown in the browser's title bar and bookmarks. 

## **Editors**

Create and edit HTML documents

## **Basics**

`<!DOCTYPE>` declaration 
- All document must start with a document type declaration 
- represents the document type
- is not case sensitive 

the document starts with an `<html>` and ends with an `</html>` element

visible part of the document is within `<body></body>`

**HTML Headings**

headings define what the content will be about

`<h1>` defines the most important heading

`<h2>`...`<h6>` define subheadings

**HTML Paragraphs `<p>`**
define the written content 

**HTML Links `<a>`**
anchor element

the links file path is defined by the href attribute 

attributes are used to provide additional information about the element

**HTML Images `<img>`**
source src contains the file path to the image

alternative text alt 

width 

height 

## **HTML Elements**
- elements consist of tags (start/end) and content 
- empty elements do not have an end tag
- nested elements are elements within other elements
- the html element is the root element and all other elements are nested in it
- the body element defines the document's body, `<h1>` and `<p>` are nested within the body
- html tags are not case sensitive
- lowercase are recommended regardless 

## **HTML Attributes** 
- provide additional information about HTML elements
- all elements can have attributes
- they are always defined in the start tag
- usually come in name/value pairs (`name=”value”`)
- attributes are not required to be quoted but is best practice to do it (double or single)
- quotes are needed when the attribute value contains spaces

`href`
Hyperlink attribute 

specifies the URL of the page it links to. `<a>`

`src`
defines the path to the `<img>`

**Absolute URL**
links to an external image hosted on another site

**Relative URL**
links to an image hosted within the site

`Width height`
defines the width and height of the `<img>`

`alt` 
alternate text for an image if it can't be displayed

`style`
adds styles to an element like color, font, size

`lang`
declares the language of the web page in the `<html>` element

country codes can also be added (en – language US – country) `en-US`

`title`
extra information about the element

displayed as a tooltip when the mouse hovers over the element


## **HTML Headings**

- titles or subtitles that you want to display
- search engines use headings to index the structure and content of the page
- headings show a glimpse of the document structure
- inline styling can add styling properties 

## **HTML Paragraphs**

always starts on a new line. A block of text
browsers add white space (margin) before and after the paragraph automatically.

**Horizontal Rules `<hr>`**
- defines a thematic break in an HTML page
- used to separate content
- empty tag

**Line Breaks `<br>`**
defines a line break without starting a new paragraph 

empty tag

`<pre>` 
text inside is displayed in a fixed width font 

preserves both spaces and line breaks

## **HTML Styles**

attribute to add styles to an element 

```
<tagname style=”property:value;”>
```

property is a CSS property 

value is a CSS value

**CSS Properties**

`background-color `
defines the background color for an html element

`color`
color defines the text color of an element

**Fonts**

`font-family` defines the font of an element

**Text Size**

`font-size` defines the text size for an element

**Text alignment**

`text-align` defines the horizontal text alignment for an element

## **HTML Text Formatting**

display special types of text 

`<b>` - bold text 

`<strong>` - Strong important text  

`<i>` - italic  

`<em>` - emphasized 

`<mark>` - text that should be marked or highlighted 

`<small>` - smaller text.

`<del>` - deleted text from a document. Browsers will strike a line through deleted text.

`<ins>` - inserted text that has been inserted into a document. Browsers display it with an underline.

`<sub>` subscript – half a character below the normal line. Chemical formulas.

`<sup>` superscript half a character above normal line. Used for footnotes. 

`<b>` and `<strong>`

b only defines bold, and strong defines importance. 

> Screen readers use `<strong>`.

`<i> <em>` 

`<i>` defines a text in an alternate voice or mood.

used to indicate a technical term, foreign phrase, thought, names.

`<em>` defines emphasized text.

> Screen readers use `<em>`. 

## **HTML Quotations and Citations**

`<blockquote>`
- section that is quoted from another source
- uses a cite attribute to link the source URL

`<q>`
short quotations using quotation marks. Inline quotes.

`<abbr>`
- defines abbreviations and acronyms.
- Useful information for browsers, translation systems and search engines.
- Uses the global title attribute to show the description by hovering the mouse on the abbreviation 

`<address>`
- defines contact information for the author/owner of the document or article.
- Uses `<br>` every line.
- Contact information can be email, URL, physical address, phone number, social media handle.
- Browsers display it in italics.

`<cite> `
- defines the title of a creative work (poem, book, song, movie, painting, sculpture
- person's name is not a title of work

`<bdo>`
- bi-directional override used to override the current text direction 
- uses the dir attribute to change the text direction 

## **HTML Comments**

not displayed in the browser

help communicate ideas with people working on the source code of the document.

`<!--` start tag
`->` end tag

## **HTML Colors**
- predefined color names or RGB, HEX, HSL, RGBA or HSLA values
- there's 140 standard color names
- `background-color` of an element
- text color of an element
- border color of an element
- A stands for alpha channel, gives a opacity (transparency) value to the color

### **RGB and RGBA**

- rgb(red, green, blue)
- a value between 0 and 255
- 16,777,216 possible colors
- shades of gray are defined using equal values for all three parameters 
- rgba(red, green, blue, alpha)
- alpha parameter is a number between 0.0 (fully transparent) and 1.0 (no transparency)

### **HEX**
-  hexadecimal colors specified with #RRGGBB (red) (green) (blue) hexadecimal integers 
- hexadecimal values are between 00 and ff 
- shades of gray are defined by equal values

0(0-9)  
0(a-f)  
1(0-9)  
1(a-f)  

### **HSL HSLA**

- hue saturation and lightness 
- alpha channel is an extension
- hsl(hue, saturation, lightness)

hue is a degree of the color wheel 0 to 360

0 is red  
120 is green  
240 is blue  

saturation is a % value, intensity of a color

50% is 50gray/50color    
0% means a shade of gray 100% is the full color

lightness is a % value, how much light a color has

0% is black  
100% is white   

shades of gray are achieved by setting hue and saturation to 0 and adjusting lightness to get darker/lighter shades.

the alpha channel defines the opacity of a color.

## **HTML Styles**
- CSS stands for cascading style sheets
- formats the layout of multiple pages at once
- cascading means that a style applied to a parent element will also apply to children elements within the parent, unless specified differently.

**How to add CSS to HTML documents** 

- inline by using a style attribute inside the elements
- internal by using a `<style>` element in the `<head>` section
- external by using a `<link>` element to link to an external CSS file

> best way is to use external css files

**link element attributes**

`rel` – defines the relationship between a linked resource and the current document.

`href` – path to the external file can be absolute or relative.

**Properties**

`color` `font-family` `font-size` `border` (around an HTML element)
`padding` (space between the text and border)
`margin` (space outside the border)

## **HTML Links**

hyperlinks jump to another document

the mouse arrow turns into a hand 

**syntax**

start tag `<a>`

**attributes** 

`href` – link's destination

`target` – where to open the linked document 

- `_self` – default. Opens in the same window/tab
- `_blank` – opens in a new window/tab
- `_parent` – opens in the parent frame
- `_top` – opens in the full body of the window

### **default style** 

- unvisited link is underlined blue
- visited link is underlined purple
- active link is underlined red
- links can be styled with css to have another look

### **image as link**
- nests the `<img>` inside the `<a>` tag 
- link to an email
- `mailto:` scheme inside the `href` attribute that opens user's email program 
- Button as a link.
- uses an html button as a link
- needs javascript 

**Title attribute**

shows extra information about an element.

Shown as a tooltip text when the mouse hovers over the element.



```html
<!-- Different link Colors -->
<Style>
a:link{}
a:visited {}
a:hover {}
a:active {}
</style>

<!-- Different Styles for a button -->
<style>
a:link, a:visited{}
a:hover, a:active{}
</style>

```

### **How To Create a Bookmark in HTML**

```html
<!-- first use the id attribute to create a bookmark in the element -->
<h2 id=”C4”>Chapter 4 </h2>

<!-- then add a link to the bookmark -->
<a href=”#C4”>Jump to Chapter 4</a>

<!-- this link can also go to a bookmark on another page -->
<a href=”test.html#C4”>Jump to Chapter 4 </a>
```

## **HTML Images**

**Syntax**

`<img>` tag embeds an image into the page

`<img>` tag is an empty tag. It contains attributes only

images are linked to web pages. The tag creates a space for the referenced image.

`src` – the path to the image

`alt` – alternate text for the image. Broken link icon and alt text is shown if the browser can't find 	the image or visually impaired users.

`style` -  can specify the width and height of an image. Can't be override by the style element.

```html
<img src=”girl.jpg” alt=”girl in a jacket” style=”width:500px,height:600px;”>
```

### **Images in another folder**

```
src="folder/file.jpg"
```

images on another website/server
```
src=”https://www.site.com/images/file,jpg”
```
GIFs are supported as image files



```html
<!-- Image as link -->
<a href=”site.com”>
	<img src=file.jpg alt=”text” style=”width:42px,height:42px;”>
</a>

<!-- image floating
insert an image floating left or right of a paragraph text -->
<p><img src=”file.jpg” alt=”text” style=”float:right;”>
The image will float to the right </p>
```

`<map>` defines an image map. 

`<area>` clickable area inside an image map.
`<picture>` container for multiple image resources.

### **Image Maps**

`<map>` image map with clickable areas.

`<area>` defines the clickable areas.

Performs different actions depending on where the image is being clicked.

image is inserted with an `<img>` element.

`usemap` attribute – value starts with a hash followed by the name of the image map to create a relationship. This links the image with the map elements
then a `<map>` element is added.

`name` attribute must have the same value as the `usemap` `<img>` attribute.

`<area>` elements are created to define the clickable areas

shape is an attribute of the area element	

`rect` – rectangular. Coordinates come in pairs (x,y) (34,44) 34 px from the left margin, 44 from the top.

`circle` – circular. Locates the center of the circle (x,y, radius) then specifies a radius 

`poly` – polygonal. Contains several coordinate points. Find coordinates for all edges of the 	shape. Write them in pairs (x,y) per edge.

`default` – entire region. 

`href` the link to where the imagemap will send the user. 
`onclick` attribute can trigger a javascript function.

## **Background images**

- `style` attribute is used to add background-image(s) to an element.
- background image can also be added in the `<style>` element in the `<head>`.
- the image will repeat if it's smaller than the element.
- `backgroun-repeat` attribute property should be set to no-repeat.
- `background-size` attribute can cover the entire element with the cover property
- `background-attatchment` attribute property to fixed to make sure the element will always be covered
- background stretch to fit the entire element 
- `background-size` property to 100% 100%

### **HTML <Picture>**

different pictures for different devices or screen sizes.

contains one or more `<source>` elements each referring to a different image using the srcset attribute.

each `<source>` has a media attribute defining the condition to display that source
bandwidth.

for smaller devices is not necessary to download large files.

The browser will use the source element with matching attribute values and ignore the rest.
Format Support.

some browsers don't support all image formats.

Add multiple formats and the browser will use the first format it recognizes.

## **HTML Favicon**

small image displayed next to the page title in the browser tab

.ico, .png, .gif, .jpeg, .svg format 

```html
<!-- how to add a favicon -->
 <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> 
```

## **HTML Tables**

- arrange data into rows and columns.
- Table Cells (Table Data) defined by `<td>` `</td>`
- table data elements can contain any type of html elements
- Table Rows `<tr></tr>`
- Table Headers `<th></th>`
- default they're centered and bold but can be styled with CSS

**Add borders**

CSS border property on `<table>`, `<th>` and `<td>` elements

**Collapsed borders**

avoiding double borders is achieved with the `border-collapse` Attribute with collapse property.

Styling the background color of each cell and giving the border color the same as the document background gives the impression of an invisible border.

`border-radius` attribute will make rounded corners

```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
} 
```

**`border-style` Properties**
- dotted
- dashed
- solid
- double
- groove
- ridge
- inset
- outset
- none
- hidden

`Border-color`
sets the color of the border 

**Table Sizes**

using the style attribute with the width height attributes to either table, table data or table header elements.

% sizes means how wide or tall the element will be compared to the parent element.

A table (child) is inside a parent (body).

```html
<!-- 
  Column width 
  Row Height  
-->
<table style="width:100%"> 
 <th style="width:70%">Firstname</th> 
<tr style="height:200px"> 
```

**Vertical Headers**
the first cell in each `<tr>` as `<th>`

**align table headers**
default are bold and centered. 

Css property `text-align` to change the default

**Header for multiple columns**
colspan attribute on the <th> element defining how many columns should the header extend (span) to.

**Table Caption** `<caption>`

### **Padding and Spacing**

**Cell Padding**

css properties to affect the padding and spacing

`padding` (for all sides)

- padding-top
- padding-bottom
- padding-left
- padding-right

**Cell Spacing**

default space is 2 pixels

`border-spacing` property 

`colspan` 
cell span over multiple columns

the value of the attribute represents the number of columns

`rowspan`
cell span over multiple rows

**Table Styling**

**Zebra Stripes**

`:nth-child(even)` selector

- applied on `<tr>`
- even selects even rows
- odd selects odd rows

**Vertical Zebra Stripes**
- applied to `<td>`
- apply the selector on `<th>` to affect headers.

**Combine vertical and horizontal zebra stripes**

use rgba() to specify transparency.

**Horizontal dividers**

border-bottom property to `<tr>` elements

**Hoverable Table**

`:hover` selector used on `<tr>` element to hightlight rows 

`<colgroup>`
- styles specific columns of a table
- is a container for the columns
- each group is specified with a `<col>` element
- span attribute defines how many columns gets this style
- style attribute defines the style
- colgroup is a child of the `<table>` element
- placed before element except `<caption>` element
- multiple colgroups uses multiple col elements 
- empty colgroups `<col>` that will not be affected 
	
**Legal CSS Properties**

only width, visibility, background and border properties will affect colgroups 

hide columns with `visibility: collapse`

## **HTML Lists**	

set of related items

### **Unordered lists (bulleted)**

`<ul>` element for the list, each list item with `<li>`

CSS property `list-style-type` defines the list item marker
- disc (bullet)
- circle
- square
- none

### **Ordered lists (numbered)**

`<ol>` element for the list. Each item with `<li>`

`type` attribute defines the type of the list.

- `type=”1”` (numbered with numbers)
- `A` (uppercase letters)
- `a` (lowercase letters)
- `I` (uppercase roman numbers)
- `i`(lowercase roman numbers)

default count starts from 1. setting a different count is achieved with the `start` attribute. 

### **Description lists**

`<dl>` element for the list. Each item with `<dt>` description term.

list of terms with a description `<dd>` of each term.

lists can be nested
a `<li>` element can contain other HTML elements.

**Horizontal lists with CSS**
css property `float` can display a list horizontally with the `left` or `right` value

## **Block and inline elements**
display values of an html element

block-level elements start on a new line. The browser adds some margin before and after the element.

block-level elements take up the full width available (stretches out to the left and right)
`<p>` paragraphs.

`<div>` block-level division or section in an html.
- has no required attributes but style, class, id are commonly used
- combined with CSS, it can be used to style blocks of content

- inline elements don't start on a new line
- takes as much width as necessary
- inline elements can't nest block-level elements

`<span>` inline container marks up a part of a text 

## **HTML Class Attribute** 

- class attribute defines a class for an element
- points to a class name in a style sheet
- used by javascript to access and manipulate elements with the given class
- class attribute can be used on any html element (block-level or inline)
- the class name is case sensitive

***syntax***
```css
.classname{
  /* css properties */
}
```
- elements can belong to multiple classes (separate classes with a space).
- javascript can access elements with `getElementsByClassName()`
 
## **HTML id attribute**

- a unique id for a single element.
- specific style declaration in a style sheet
- also used by javascript to manipulate the element
- case sensitive
- can't start with a number, must not have whitespaces

***Syntax***
```css
#idname{css properties}
```

**HTML Bookmarks**
- allow readers to jump to specific parts of a webpage
- create an id for an element to be bookmarked 
- add a link to the bookmark pointing at a section of the page or another webpage.

## **iFrames**

- displays a webpage within a webpage
- `<iframe>` defines an inline frame

***syntax***
```html
<iframe src=”url” title=”description”></iframe>
```

- titles are best practice so screenreaders know what the content is.
- `height` and `width` attributes specify the iframe size
- the `style` attribute also defines height and width 
- they have borders by default
- to remove the border use the style attribute with border value none
`style=”border:none;”`
- size style and color can be changed too 
- iframes can be used as the target frame for a link
- target attribute in the <a> element must refer to the name attribute of the iframe element

## **HTML Javascript**

javascript makes pages dynamic and interactive.

`<script>` used to define a client-side script.

contains script statements or it can point to an external script with the `src` attribute.

image manipulation, form validation, dynamic content

```js
// select an html element
document.getElementById();
// change content 
.innerHTML = “text!”;
// change styles
.style.fontSize = “25px”;
.style.backgroundColor = “yellow”;
// change attributes
.src = “anotherpicture.gif”;
```

`<noscript>` element that defines an alternate content to be displayed in case the user has scripts disabled or the browser doesn't support scripts
kind of like a fallback

## **File Paths**

describes the location of a file in a website's folder structure.

- `image.jpg` – located in the same folder as the current page.

- `image/image.jpg` located in the folder images in the current folder.

- `/images/image.jpg` located in the images folder at the root of the web
../image.jpg located in the folder one level up from the current folder.

file paths are used to link external files (pages, images, style sheets, javascripts).

**Absolute**
full URL to the file

**Relative**
relative to the current page (same folder, different folder, root, level up).

> relative file paths are best practices

## **HTML Head element**

- contains metadata (data about data).
- placed between the html and body tags
- metadata of the document. Is not displayed.

`<title>`
- title of the document. Text only. Shown in the title bar or tab.
- required in html documents
- page title is used by search engines for SEO
- used in favorites and bookmarks

`<style>`
defines style information for the html page

`<meta>`

character set, page description, keywords, author of document, viewport settings
`name=”viewport”`

`content=”width=device-width` sets the width of the page to follow the screen-width of the device

`initial-scale=1.0` sets initial zoom level when page is loaded for the first time

`<link>`
relationship between the document and an external source
```html
<link rel=”stylesheet” href=”style.css” />
```
`<script>`
defines client-side javascripts

`<base>`
specifies the base URL for all relative URLs in the page
both href and target attribute must be present

**Layout Elements and techniques**

- `<header>` header for a document or section
- `<nav>` navigation links
- `<section>` sections in a document or article
- `<article>` independent and self-contained content
- `<aside>` aside from the main content (sidebars)
- `<footer>` footer of document or section
- `<details>` additional details the user can open or close
- `<summary>` heading for the details element

**techniques to create multicolumn layouts**
- **CSS framework**  
w3.CSS and bootstrap are CSS frameworks  to create style sheets fast
- **CSS Float property  ** 
float and clear properties are the main properties to create entire layouts  
tied to the document flow. May harm the flexibility  
- **CSS Flexbox**  
ensures that elements behave predictably
- **CSS Grid**
grid-based layout system with rows and columns

## **HTML Responsive Design** 

- creates pages that look good on all devices.
- automatically adjust for different screen sizes and viewports

**Responsive images**

- use the CSS `width` property set to 100%.
- `max-width` property set to 100% will scale down if it has to, but never be larger than original size
- `<picture>` element defines different images for different browser window sizes.

**responsive text size**
- adding `vw` (viewport width) to the `font-size` value will resize the text according to browser's window size.  
1vw = 1% of viewport width.

**media queries**

- define different styles for different browser sizes
- all CSS frameworks offer responsive design
- W3.CSS alternative to bootstrap
- independent of jQuery or any other javascript library
- bootstrap uses HTML, CSS jQuery 

## **Computer code Elements**

`<kbd>` keyboard input 

`<samp>` sample output from a computer program 

`<code>` for a piece of computer code

doesn't preserve extra whitespace or line-breaks

code element can be nested inside a pre element to fix this

`<var>` defines text as variables

**Semantic Elements**

describes meaning to the browser and developer.

**non-semantic** - `<div> <span>` tell nothing about the element.

**semantic** - `<form> <table> <article>` defines the content of the element.

`<section>`
thematic grouping of content often with a heading

`<article>`
independent self contained content

makes sense on its own

both section and articles can nest each other

`<header>`
container for introductory content or navigational links

headers cant be placed within a footer, address or another header.

`<footer>`
defines the footer of the document.

authorship, copyright, contact, sitemap, back to top, related.

`<nav>`
navigational links for the page.

not all links are intended for nav. Only major links from the page.

`<aside>`
content should be indirectly related to the surrounding content.

`<figure>` 
self-contained content (illustrations, photos, diagrams, charts).

`<figcaption>`
defines a caption for a figure element.

## **Style Guide**

- always declare document type
- lowercase element names
- close all html elements
- lowercase attribute names
- quote attribute values
- always specify alt, width and height or images
- spaceless around equal signs 
- avoid long code lines
- add blank lines to separate large or logical code blocks
- and two spaces of indentation
- never skip the `title` element
- don't omit `body`, `head` and `html` elements
- XML/XHTML compatibility will require closing empty tags
- add lang attribute inside the `html` tag to declare the language of the page
- define the character set
- define the viewport settings in the meta element for responsive design 
- use short comments. Long comments indented with two spaces and span more than one line

### **CSS guidelines**

- `type` attribute in linking styles and scripts is not necessary 
- short styles can be compressed in one line
- long styles should leave one line per property 
- opening bracket on the same line as selector
- two spaces of indentation
- semicolon after each property-value pair including last
- only use quotes around values if the value contain spaces
- closing bracket on a new line without leading spaces
- lowercase filenames
- proper file extensions
- no difference between htm and html file extensions

## **HTML Entities**

character entities are used to displayed reserved characters in HTML.

**non-breaking space** `&nbsp;`

a space that won't break into a new line.

two separated words will stick together.

**non-breaking hypen** `&#8209;`

**less than <** `&lt;` 
**greater than >** `&gt;` 
**ampersand** `&amp;` 

**diacritical marks** 

a glyph added to a letter

grave  ̀  `&#768;` 
acute  ́  `&#769;` 

combined letter with glyph construct (a&#768;) à 

### **HTML Symbols**

- symbols that aren't present on your keyboard
- mathematical, technical, currency symbols are not present 
- can be added with an entity name or entity number (decimal or hexadecimal)

**EMOJIS**

- letters (characters) from the UTF-8 unicode character set 
- entity numbers start with ampersand and hash symbol &# and end with a semicolon ;
- emojis are characters so they can be styled and modified like any other character in HTML 

**HTML Encoding (character sets)**
- ASCII was the first character encoding standard 
- it has 128 characters numbers, letters and some special characters 
- ISO-8859-1 was the default character set for HTML 
- supported 256 characters. HTML4 also supported UTF-8
- ANSI(windows-1252) original windows character set. Identical to ISO with extra 32 characters 
HTML5 uses UTF-8 that has almost all characters and symbols in the world

**ASCII**
- uses values 0-31 for control characters
- 32-126 for letters, digits and symbols
- doesn't use values from 128-255

**ANSI**
- identical to ASCII from 0 to 127
- propriatery set of character values from 128-159
- identical to UTF-8 from 160-255

**ISO-8859-1**
- identical to ASCI from 0-127
- doesn't use values from 128-159
- identical to UTF-8 from 160-255

**UTF-8**
- identical to ASCI from 0-127
- doesn't use values from 128-159
- identical to ANSI and ISO from 160-255
- values from 256 to more than 10,000

**URLs Uniform Resource Locators**

another word for web address.

can be a domain name or an **internet protocol (IP)** address.

web browsers request pages from web servers with a URL.

***Syntax***

`Scheme` – defines the type of internet service (https)  
`prefix` – defines a domain prefix (www)  
`domain` – internet domain name  
`port` – port number at the host (default is 80 for http)  
`path` – path at the server (omitted and leads to the root directory of the site  
`filename` – name of the document or resource  

**URL encoding**
- URLs can only be sent on the internet using the ASCII character set
- characters outside the set need to be converted 

**XHTML**
- extensible hypertext markup language
- stricter more XML based version of HTML
- XML is a markup language

**differences** 
- doctype declaration mandatory
- xmlns attribute in html tag mandatory
- `<head><title><body>` mandatory
- elements need proper nesting
- all elements need to be closed
- attribute names always in lowercase
- attribute names always quoted
- attribute minimization forbidden

### **HTML Forms**

collects user input

input is sent to a server to be processed 

**`<form>` element**
- used to create a form for user input
- container for different types of input elements

**`<input>` element**
- where data is input 
- `text`, `radio` (button for multiple choices) `checkbox` (selecting zero or more choices) `submit` (button) `button` (clickable button)
- `name` attribute – needed to submit the value of the input field to the file handler. Otherwise is not submitted at all.

```html
<input type=”text”>
```

- single line input field for text input
- type attribute defines the type of input
- id attribute to assign an id to the input
- name attribute 
- default width of an input field is 20 characters 

**`<label>` element**
- defines a label for form elements
- useful for screenreader users as it reads out loud the label on the input element
- for attribute should be equal to the id attribute of the input element to bind them together

```html
<input type=”radio”>
<!-- radio buttons  -->

<input type=”checkboxes”>
<!-- selects zero or more options of a number of choices -->
<input type=”submit”>
<!-- defines a button for submitting the form data to a form handler -->
```

**form handler** – a file on the server with a script for processing input data.

form handler is defined in the action attribute.

### **Form Attributes**

`action` – defines the action to be performed when the form is submitted

`target` – defines where to display the response received

- `_blank` new window/tab
- `_self` in the current window
- `_parent` in the parent frame
- `_top` in the full body of the window

`framename` – displayed in the iframe

`method` – defines the http method to be used

> form-data can be sent as URL variables or as HTTP post transaction.

`method=”get”` 
- shows results in the address bar.
- length of URL is limited (2048 characters).
- useful to bookmark the result.
- non-secure data like query strings in google searches.

`method=”post”` 
- doesn't show results in the address bar
- appends the data inside the body of the http request
- no size limits
- can't be bookmarked
- good for sensitive data

`Autocomplete` – the browser automatically complete values based on values the user has entered before.

`novalidate` – boolean attribute. Defines that the form data (input) should not be validated when submitted. 

### **Form Elements**

`<input>`

`<label>`
- defines label for form elements.
- for attribute equal to the id attribute of the input element.

`<select>` element drop down list.

`<option>` option that can be selected. 

`Selected` attribute defines a pre-selected option.

`size` attribute to specify the number of visible values.

`multiple` attribute to allow the user to select more than one value.

**`<textarea>` element**
multi-line input field.

`rows` attribute defines the lines of the text area.

`cols` attribute defines the width of text area (default is 20px).

`style` attribute can also define the size of the text area.

`<button>`
clickable button

`<fieldset>` 
used to group related data in a form

`<legend>` defines a caption for the fieldset

`<datalist>` defines a list of predefined options for an input element.

list attribute of the input element must refer to id attribute of datalist element

`<output>`
represents the result of a calculation

**input types**

`text`- single line text input field

`password` – password field

`submit` – button for submitting data to a form handler

`value` attribute defines the text in the button

`reset` – resetss all form values to the default values

`radio` – selects onluu one of a number of choices

`checkbox` -let a user select zero or more options of a limited number 

`Button` – defines a button

`color` -  input fields that contain a color

`date`  - input fields that contain a date

`min` and `max` attributes set a limit from dates to choose from

`datetime-local` – defines date and time with no time zone

`email` - 

`file` – file uploads 

`hidden`
- not visible to users
- developers include data that can't be seen or modified by users 
- stores database record that needs to be updated when the form is submitted

`month` selects month and year

`number` numeric field

`range` control for entering a number whose exact value is not important 

`search`  search fields

`tel`  phone number

`time` select a time no time zone

`URL`  

`week`  week and year

**input attributes**

`value` – initial value for an input field

`readonly` – input field is read-only

`size` – visible width in characters (default 20)

`maxlength` – max characters allowed in an input field

to alert the user of the restriction, javascript is needed
`min` `max`
multiple user is allowed to enter more than one value in input field

pattern defines regular expression
 
`placeholder` short hint describes the value of an input field

`required` the input field must be filled out

step legal number intervals for an input field 

`autofocus` input field should automatically get focus when the page loads

`height` and `width` for image input types.

`list` input element with predefined values in a datalist element
autocomplete 

`form` attribute defines the form the input element belongs to.

value of the form attribute must equal the value of the id attribute of the form element

`formaction` overrides the action on the form element to submit input elements to a different file holder on the server.

`formenctype` defines how the form data should be encoded when submitted.

`formmethod` defines http method for sending form data to the action url.

`formtarget` name or keyword to display the response that is received after submitting.

### **HTML CANVAS GRAPHICS**

`<canvas>`
- used to draw graphics on a webpage.
- only a container for graphics.
- Javascript is used to draw the graphics.
- canvas is a rectangular area.
- Default with no border no content. 
- `id` attribute specifies the canvas
- `width` and `height` attributes define the size of the canvas
- `style` can add a border

### **SVG Graphics**

scalable vector graphics

`<svg>` container for svg graphics

- svg is a language to describe 2d graphics in xml
- svg is xml based. 
- Canvas is rendered by pixel

### **Video HTML**

- video element shows a video on the page
- controls attribute adds video controls (play, pause and volume)
- always include width height .
- `<source>` defines alternative video files that the browser can choose from
- text inside the video element will only be showned in browsers that don't support the video element.

`autoplay` attribute 

`muted` after autoplay to start the video automatically but muted

`<track>` element defines text tracks in media players

`<audio>` element


