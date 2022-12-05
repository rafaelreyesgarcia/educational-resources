# MDN HTML

## **Fundamentals** 

### **Hypertext markup language** 

structures web page and its content

made up of elements to enclose, wrap or markup different parts of content.

elements are applied to text to give them different meaning in a document.

### **Elements (part of a website)** 

Enclose/wrap, different parts of the content. 

Elements contain data items or text, images or nothing at all.

Elements contain opening tags, attributes, enclosed text content and a closing tag.

### **Enclosing tags** 

creates an element. can structure content.

HTML tags are not case sensitive 

Tags begin or end an element in source code.

best practice to write tags in lower case 

### **HTML Element Anatomy**

`<p class=”nice”> Hello world!</p>`

`<p class=”nice”>` - **opening tag**  

name of the element. Open and close with angle brackets <>. 

`class=”nice”` - **attribute and value**

extra information about the element that doesn't appear in the content. Class attribute lets you 	give an element a non-unique identifier so you can target it with style and other things.

Needs to have a space between the attribute and element name. (2+ attributes separated by spaces)

Attribute name followed by an equal sign.

attribute value wrapped by opening and closing quotation marks.

`Hello world!` - **enclosed text content** 

`</p>` - **closing tag** 

includes a forward slash before the element name. 

### **Nesting elements** 

elements inside elements.
```html
<strong> <em> </em> </strong>
```
open and close the nesting element inside the main element

### **Block-level elements**

- appears on a new line. Form a visible block on a page.
- Structural elements on the page.
- Can't be nested inside an in-line element, but it can be nested inside a block-level element.	
- Create space above and below. 

### **In-line elements**
- surround only small parts of the document
- won't cause a new line to appear 
- used within text 

### **Empty (void) elements** 

don't need an ending tag (unless XML compatible) 

Don't have any content. 

`<img>` element has two attributes `src=` and `alt=` 

there's no closing tag because there's no inner element.

It embeds an image in an HTML page.

> Empty elements (HTML, SVG, MathML) can't have child nodes (nested elements or text nodes) 

If attributes aren't specified, default values are used.

Empty elements in HTML
```html
<area> <base> <br> <col> <embed> <hr> <img> <input> <keygen> <link>  <meta> <param> 	<source> <track> <wbr> 
```
`<img>` embeds image into the page via the src (source) attribute which containts the file path to 	the image. 

Alt (alternative) atribute is the text shown when the image can't be displayed. Referred as *descriptive text*. 

Visually impaired so screen readers describe the image. 

Something has gone wrong for the image to not display.

**Marking up with HTML elements**

### **Headings  `<h1> ...<h6>`**

- used to specify certain parts as headings of your content
- Headings are used for accessibility and SEO. 

### **Paragraphs `<p>`** 

contain paragraphs of text.

### **Lists `<li>`**

list structure for content

### **unordered lists `<ul>`**

the order doesn't matter. 


### **Ordered lists `<ol>`** 

the order matters

Each item inside the list is put inside a `<li>` element

### **links `<link>`**

embeds content into the page

### **anchor `<a>`** 

element that anchors the content to a link

### **Anchor Attributes**

`href` (hypertext reference) – the web address that the link will anchor the text to

`Title` – specifies extra information about the link.

`Target` – specifies browsing context used to display the link.

`“_blank”` will display the link in a new tab.

don't omit the protocol of the URL (HTTPS:// or HTTP://) 

### **Boolean Attributes** 

have no written values 

only have one value, the same as the attribute name

Attributes can be wrapped in single or double quotes. Just a style preference. 

### **HTML entities < > “” '' &**

represent special characters in text as the special characters are part of the HTML syntax
- < &lt;
- > &gt;
- &quot;
- &apos;
- & &amp;

### **HTML Comments** `<!-- -->`

HTML comment. Browsers ignore comments. Helpful way to write notes about the code logic.

### **HTML Structure** 

`<!DOCTYPE html>`
required preamble

in the 90's doctypes meant to act as links to a set of rules 

`<html></html>`
wraps all the content on the entire page. Root element.

`<head></head>`
container that isn't content to be shown

keywords and page description, CSS styles, character set declarations

`<meta charset=”utf-8”> `
sets the character set the document will use

UTF-8 includes most characters from the majority of written languages

`<title></title>`
sets the title of the page. Appears in the browser tab. Describes the page when you bookmark/favorite it.

`<body></body>`
all the content that will be shown. 

Text, images, videos, games, audio

elements are part of the DOM (document object model) – API that represents/interacts with the HTML document. Document model loaded in the browser representing the document as a node tree. Each node represents part of document (elements, text strings, comments)

DOM – most used API allows code running in a browser to access with every node in the document.
Implemented when browsers implemented javascript.

## **HTML meta elements**

`<html>`
root (top-level) element of an html document. All other elements descend from the html element.

lang attribute – sets the language of a page

`<html lang=”en-US”>`

useful to index the page more effectively in search engines

useful for accessibility, visual impaired users using screen readers 

subset of sections of the page can be set to different languages
		
`<head>`
contents of the head element

not displayed on the website

contains metadata about the document
	
`<title>`
metadata that represents the title of the HTML document, not the document's content

fills the bookmark/favorite title 

title contents are also used in search results (useful for SEO) 
	
`<meta>`
data that describes data of the html document 

charset attribute specifies the character encoding. Characters the document can use.

Utf-8 value is universal character set includes any character from human languages.

Name attribute specifies the type of meta element. What information it contains. 

Author and description values.

Content attribute specifies the actual meta content 

descriptive content of the meta attribute 

author is useful to understand who wrote the page

description is useful to include relevant keywords to improve SEO
	
open graph data is a metadata protocol that facebook invented to provide richer metadata for websites

twitter cards is similar to open graph data

useful when URL sites are displayed on the social media sites

### Favorites icon (favicon)

reference to custom icons in metadata to display in bookmark/favorites/tab

16 px square icon

saved in the same directory as the index file

.ico .gif or .png formats 

content security policy (CSP) applies to favicons
	
```html
<link rel=”icon” href=”favicon.ico” type=”image/x-icon”>
```
	
### sitelinks 

subpages related to the main homepage link that appear in search engines. 

Configurable in google's webmaster tools

`<link>`

used to link a CSS file to the HTML document 

`rel=”stylesheet”` attribute indicates the document is a stylesheet 

`href”css-file.css”` attribute indicates the path to the stylesheet file

### `<script>`	

links a javascript file to the document 

`src=”js-file.js”` attribute contains the path to the javascript file

`defer` attribute intructs the browser to load the javascript after the page has finished parsing the entire HTML file.

There's other script loading strategies.

## **HTML Text fundamentals**

structured text consist of headings and paragraphs in the most basic structured
reading experience is easier and enjoyable 

### best practices

a single `<h1>` per page. All other headings will sit below this 

no more than 3 per page unless it is necessary.
	
### Structural markup 

easy readability. Users would leave the website otherwise.

Search engine indexing the page consider the heading as important keywords for search ranking

screen readers need an outline set

styling content and interactivity need defined elements to target them
	
### Semantics

meaning, function or appearance of content 

semantics are important to communicate meaning of content with browsers and computers
	
`<span>` element does not have semantics. Is used to wrap content that will be targeted by CSS or javascript



### lists `<li>`

unordered `<ul>` and ordered `<ol>`

nesting lists – list inside another list. 
	
### emphasis `<em>`

stressed words (italics)

recognized by screen readers to be spoken out in a different tone of voice

subtly alters the way the word is said and what it means

italics can also be done with a <span> and CSS or <i> element not necessarily just <em>

### Strong `<strong>`

emphasis on important words

recognized by screen readers

`<span>` and CSS can also achieve the bold effect. Or `<b>` element 

strong and emphasis words can be nested inside one another

### presentational elements

`<b>` bold keywords, product names, lead sentence

`<i>` italic foreign words, taxonomic designation, technical terms, a tought

`<u>` underline proper name, misspelling 

came out when CSS wasn't fully supported. 

only affect presentation not semantics. 

semantic elements are preferred over presentational elements for accessibility and SEO. 


## **Hyperlinks**

allow to link documents to other documents, resources, specific parts of documents, or make 	apps available at a web address.
	
### `<a>` element

creates a link by wrapping text or other content inside using the href attribute (hypertext 	reference)

title attribute contains additional information about the link

title is only revealed on mouse hover

### Block-level links

images can become links

```html
<a href> <img src alt> </a>
```

**URLs (unform resource locator)** – text string specifying where a resource can be found 

can point to HMTL, text files, images, text documents, video, audio, anything.

They use paths to find files 
	
**same directory**
```html
<p>contact <a ref=”contacts.html”>the staff</a>.</p>
```

**subdirectories**

where the file that will be linked to is in
```html
<p>visit <a href=”projects/index.html”> project </a>.</p>
```

**back up into parent directories**
```html
<p> a link to the <a href=”../pdfs/project.pdf”> project</a>.</p>
```

### Document fragments 

a specific part of an HTML document 



```html
<!-- assign an id attribute to the element that wants to be linked -->
<h2 id=”mailing_address”> mailing address </h2>

<!-- to include it in the end of an URL would be adding a hash/pound symbol to the end of it # -->
<p> want to contact us? Use the <a href=”contacts.html#mailing_address”>mailing address </a>. </p> 

<!-- the document fragment can reference its own link to another part of the current doccument  -->

<p> the <a href=”#mailing_address”> mailing address</a> can be found at the bottom. </p>
```

**Absolute URLs** 

location defined by the absolute location on the web

always point at the same location

**relative URLs**

relative to the file you are linking from.
	
### linking best practices

screenreader ready - 

search engine ready – keywords in link text 

don't repeat the URL as part of the text 

don't use links or link in the text 

text as short as possible

click here is poor written text
	
### Best practices examples

- Download the sales report (PDF, 10MB)
- Watch the video (stream opens in separate tab, HD quality)
- Play the car game (requires flash)
	
linking to non HTML resources has an effect when clicked like downloading a pdf, playing a song or video.
	
download attribute can be used to provide a default save filename to a resource that will be downloaded

### e-mail links

```html
<!-- mailto: URL scheme (different than the HTTPS scheme) -->
<a href=”mailto:nowhere@mozilla.org”> send email</a>

<!-- 
  if href is left just with the scheme, the email client will be open with no destination.

  URL query notation is needed when sending an email with cc, subject and body 
-->
<a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&subject=the%20body%20of%20the%20email">

<a href="mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&amp;subject=This%20is%20the%20subject">
  mailto:nowhere@mozilla.org?	cc=nobody@mozilla.org&amp;subject=This%20is%20the%20subject
</a>
```

## **Advanced text formatting**

### Description lists `<dl>`

mark up a set of items and their descriptions.

`<dt>` **(description term)** element wraps each term 

`<dd>` **(description definition)** element wraps each description. 

The browser default styles will display description lists with descriptions indented from the 	terms.

Each term can have multiple descriptions 

**quotations**

depends if you are marking up block or in-line quotation 

### blockquotes `<blockquote>`

wraps a block level element section that is quoted from somewhere else

includes the source of the quote in a URL in a cite attribute.

```html
<blockquote cite=”URL”> 
```

### Inline quotations `<q>`

same as blockquotes but affecting inline elements and using a different tag

short quotations that don't require a paragraph break
```html
<q cite=”URL”
```

### Citations

the cite attribute isn't displayed anywhere in the browser

javascript or css is needed to display it

different from the `<cite>` element (contain the title of the resource being cited)

### Abbreviations `<abbr>`

warps around abbreviation or acronym

expands the full term in a title attribute

```html
<p> we use <abbr title=”Hypertext Markup Language”>HTML</abbr> to structure web documents. </p>
```

`<acronym>` was used in earlier versions. Nowadays is combined with `<abbr>`

### Address **<address>**

wraps around contact details

only used to provide contact information with the nearest <article> or <body>

use it in the footer of the entire site or inside an article for details of the author 

```html
<address> page written by <a href=”mailto:rafael@rafael.com”>rafael</a></address>
```

**superscript** and **subscript** `<sup>` `<sub>`

wraps items like dates, chemical formulae, mathematical equations

```html
<p> today is the 7<sup>th></p>
<p> the chemical compound is 	C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></p>
```

### Computer code

elements that represent computer code using HTML 

`<code>` 
marking up generic pieces of computer code

```hmtl
< &lt
> &gt
```

`<pre>` 
retains whitespace exactly how you see it in text editor

`<var>`
marking up variable names

`<kdb>`
marking up keyboard input into the computer

`<samp>` 
marking up the output of computer program


### times and dates `<time>`

marks up time and dates in machine readable format

```html
<time datetime=”2022-04-07”>April 07 2022</time>
```

## **document and website structure**

**block level elements**
define areas of your website 

**HTML layout elements (semantic markup)**
html elements can markup content based on their functionality to improve accessibility and seo

### **Header `<header>`**
big heading at the top, logo, tagline. The same across all pages in a site.

Group of introductory content.

Child of `<body>`

defines global header of webpage. 	

### **Navigation bar `<nav>`**

links to site's main section with buttons, links or tabs

some consider the navigation bar part of the header

some consider having them separated is better for accessibility

### **main content `<main>`**


area in the center that contains the main content. Unique to the page

goes inside `<body>`

shouldn't be nested inside other elements

subsections can include `<article> <section> <div>`

### **Article `<article>`**
wraps a block of related content that makes sense on it's own without the rest of the page.

### **Section `<section>`**

groups together a single part of the page that has one single function or theme

each section begins with a heading. `<article>` can be broken into `<section>`s 
	
### **sidebar `<aside>`** 
- peripheral info, links, quotes, ads
- contextual to the main element
- second navigation system

### **Footer `<footer>`**
- strip across the bottom containing fine print, copyright notices, contact info 
- useful for SEO by providing quick access to popular content
		
### **Non semantic wrappers**
- elements that wrap other elements so they can be targeted by css styles or javascript 
- class attributes provide labels to target them

`<span>`
inline non semantic element

wraps content without adding a specific semantic meaning
	
`<div> `
block level non semantic element

doesn't add additional meaning
	
### **Line break `<br>`**

- creates a line break in paragraph.
- Only way to force a fixed short lines 
- html ignores mostwhitespace, so to force it, `<br>` is needed
	
### **horizontal rule `<hr>`**

- is just a horizontal line visually dividing the page
- denotes a thematic change

**information architecture**
planned structure of a webpage to maximize user experience

## **Debugging HTML**

html is interpreted not compiled.

html element syntax is easier to understand than programming languages.

**permissive code**

**syntax errors** 
spelling or punctuation errors in the code

**logic errors**
the syntax is correct but the code result is not right

HTML doesn't suffer from syntax errors as browsers parse the code permissively

the page still displays the code even if there are syntax errors 

### **HTML validation**

- created by W3C
- takes an html document as input, analyzes it and gives you an error report
		
## **Images in HTML**

`<img>` element

empty element

**Attributes**

`src` ***(source)*** contains a path pointing to the embedded image.

Src is equivalent to `href` in an anchor element `<a>`.

search engines read image filenames for SEO.

**hotlinking** – linking to an image hosted on someone else's website.

hotlinking is ilegal as it steals bandwidth.

is a repalced element (element content and size is defined by an external source, not by the contents of the element itself

`alt` ***(alternative)*** textual description of the image.

Used when the image can't be displayed.

useful for screendears (improves accessibility).

search engines can match alt text with search queries.

decoration images don't need an alt. Use a blank alt (`alt=””`).

link text can't be added in the anchor element or inside the alt attribute 

**width** and **height**
graphic editors should be used to resize an image or css instead of html attributes 

**title**  
gives a tooltip on mouse hover.

title information should be included in the main article text. Title is not suggested.


**`<figure> <figcaption>` elements**

provide a semantic container for figures, to link the figure to a caption 

figure wraps the image element

figcaption defines the caption's text

figcaption and image alt text shouldn't say the same thing

a figure is an independent unit of content 

**CSS background images**

`background-image` control background image placement

css background images are decoration, with no semantic meaning

html images have a meaning in relation to the content of the page.
	
## **Video and Audio**

proprietary (plugin based) technlogies like flash and silverlight embedded video and audio at the beginning of the web.

HTML5 natively embeds audio and video now with the `<audio> <video>` elements.

***OVPs (online video providers)*** offer ready made code to embed video and audio so embedding them natively in HTML is not necessarily the best route.

**`<video>` element** 

**Attributes** 

`src` contains a path to the video

source can also be a nested element to point to multiple sources so the browser has multiple options to choose from.
	
`controls` includes the browser's own control interface (playback)

`type` contains the MIME of the file specified by the source
	
browsers use the type to immediately skip to the supported video format

`width` and `height` 

`autoplay` the video starts playing right away

loop the video plays again when it finishes

`muted` the media plays with the sound turned off

`preload` buffers large files

preload values
none doesn't buffer the file
auto buffers the media
metadata buffers the metadata
	poster URL of an image to be displayed before the video. Is a splash screen or advertising	screen.

paragraph element (fallback content) is used to display text in case the browser doesn't support the video element

container formats
	define a structure in which the audio/video in the media are stored. (mp3, mp4, webm)
	contain metadata describing the media, what codecs are used to encode the channels.
	A webm file contains a movie that has
video tracks (main and alternative angle)
audio tracks (english, spanish, commentary)
text tracks (closed captions, sutitles, commentary captions)
	audio and video tracks are encoded with audio and video codecs 
	codecs convert compressed audio and video into binary data and back 
	media support is dependent on what software the user has installed







Video text tracks
	webVTT file format allows to write text files with a transcript of the words being spoken in the 	audio/video
	contains
string of text (cues)
metadata time and video at which the text string is displayed

Types of cues
	subtitles – translations of foreign material
	captions – synchronized transcriptions of dialog or description of significant sounds
	timed descriptions – text which should be spoken by the media player to describe important 	visuals to visually impaired users
	
<Track> element
	links the .vtt file to the media in html
	Attributes 
kind – specify what kind of cue it is (subtitles, captions, descriptions
src – file path to the .vtt file 
srclang – tells the browser what language the subtitles are written in
label helps readers identify the language they are searching for
	text tracks help with SEO 

	
<audio> element
	the audio element doesn't support width/height attributes as there's no visual component
	doesn't support the poster attribute.

Examples

<video>
<video src=”video.webm” controls>
	<p>your browser doesn't support HTML5 video, here is a <a href=”video.webm”> link to the video</a> instead.</p>
</video>

<source>
<video controls>
	<source src=”test.mp4” type=”video/mp4”>
	<source src=”test.webm” type=”video/webm”>
	<p>your browser doesn't support HTML5 video. Here is a <a href=”test.mp4”>link to the 	video</a> instead.</p>
</video>






other attributes
<video controls width=”400” height=”400” autoplay loop muted preload=”auto” poster=”poster.png”>
	<source src=”test.mp4” type=”video/mp4”>
	<source src=”test.webm” type=”video/webm”>
	<p>your browser doesn't support HTML5 video. Here is a <a href=”test.mp4”>link to the 	video</a> instead.</p>
</video>

<audio>
<audio controls>
	<source src=”test.mp3” type=”audio/mp3”>
	<source src=”test.ogg” type=”audio/ogg”>
	<p>your browser doesn't support HTML5 audio. Here is a <a href=”test.mp3”> link to the audio</a> instead.</p>
</audio>

<track>
<video controls>
	<source src=”test.mp4” type=”video/mp4”>
	<source src=”test.webm” type=”video/webm”>
	<track kind=”subtitles” src=”subtitles_es.vtt” srclang=”es” label=”spanish”>
</video>

2.10 other embedding technologies

in the past frames were useful to create websites
frames are small parts of a website stored in individual html pages
frames were embedded in a master document -  frameset
splitting the page in small chunks was more efficient for download speeds back then with slow network connections.
Problems outweighed the upside of using framesets
plugin technology then became popular (java applets and flash)
<object> and <embed> elements where useful at the time that used plugin technologies
accessibility, security, file size are main problems of plugin technology

<iframe> element
	allows other web documents into the current document 
	incorporates third party content without having to implement your own version of it
	security concerns are still present with iframes
	attributes 
	border: none
the iframe is displayed without a surrounding border
	allowfullscreen
the ifram is able to be placed in full screen
	src
contains a path to the URL of the document to be embedded
should be set with javascript as it decreases the page load time. Important for SEO

	width and height 
specify the iframe width and height
	fall back content 
will appear if the browser doesn't support iframes
nested inside the iframe element
is not an attribute itself
uses a paragraph and anchor element.
	sandbox
requests heightened security settings
container for code where the element can be used appropriately but not cause harm to the codebase
unsandboxed content can execute javascript, submit forms, popup windows
blank sandbox attribute is the most secure
you can add permissions changing the value (allow-scripts, allow-same-origin)

security concerns 
	iframes are attack vectors for hackers that want to modify your webpage
	they can be used to trick people into revealing sensitive information
	clickjacking hackers embed an invisible iframe into your document to capture user's interactions
	HTTPS reduces change that remote content has been tampered with in transit
	HTTPS prevents embedded content from accessing your parent document and viceversa
	
CSP content security policy
	provides a set of HTTP headers designed to improve the security of the html document 
	x-frame-options disable other websites from embedding your content into their websites to 	prevent clickjacking 
	
<embed> and <object> elements embed external content. Not used anymore 

2.11 Vector Graphics

raster images 
	defined with a grid of pixels 
	each pixel is placed and colored
	raster formats
Bitmap .bmp
PNG .png
JPEG .jpg
GIF .gif
	
Vector images
	defined by algorithms 
	contains shape and path definitions for rendering instead of pixels
	Vector formats
SVG 


SVG 
	XML based language to define vector images
	markup language for graphics not content 
	many more elements to define effects and shapes
	SVG elements
<circle> <rect> <fecolormatrix> <animate> <mask>
	text in vector images remains accessible (benefiting SEO)
	SVGs are suitable for styling/scripting
	disadvantages
	file size can grow depending on complexity of the image
	significant processing time in the browser
	not supported in older browsers

Add SVG in <img> element
	src – path to the svg gile
	aspect ratio (ratio between the width and height) 
	if no inherent aspect ratio, width and height attributes needs to be added
	image can become a hyperlink with the anchor element by nesting it into the image element
	svg files can be cached by the browser
	can't be manipulated by javascript
	inline CSS is needed inside the svg code, there's no other way to invoke css
	srcset attribute that only recent browsers recognize
	svg files can be used as css background images
	svg inline svg file can be opened in a text file and pasted in the html document 
	<svg> element is used to inline svg
	inline svg can be styled 
	svg inline cons
suitable just for a single svg. Duplication is resource intensive
extra svg code increases html size
browser can't cache inline svg

examples
<img src=”file.svg” alt=”triangle with all tree sides equal” height=”87” width=”100” />

<img src=”file.png” alt=”triangle with all tree sides equal” srcset=”file.svg”>

<svg width=”300” height=”200”>
	<rect width=”100%” height=”100%” fill=”green”>
</svg>

embed svg with an iframe
<iframe scr=”file.svg” width=”500” height=”500” sandbox>
	<img src=”file.png” alt=”triangle” />
</iframe>




2.12 Responsive Images

images that work well with different screen sizes, resolutions and other characteristics

art direction problem 
	different cropped images for various layouts
resolution switching problem
	large image isn't necessary for a small screen. Small images aren't useful for big screens. 

Multiple resolutions would be available to the user's browser. The browser determines the optimal resolution to load based on the screen of the user.

Responsive image technologies came out because of different screen sizes (phones, tablets, desktop)
CSS has better tools for responsive design than HTML 
browsers load the page with html, then interpret css and javascript. Responsive design is good to implement at first.

responsive html attributes 
Sourceset srcset  
	defines the set of images the browser can choose from and what size each image is
	different values are divided in three
image filename (file.jpg)
space
image's intrinsic width in pixels (480w)
uses w not px. Intrinsic size is the real size of the image

sizes 
	define a set of media conditions and indicates what image size would be best for certain 	conditions
media condition (max-width:600px) if the viewport width is 600 pixels or less
space
slot width (480px) then the image should fill 480 pixels 
50vw is relative to the viewport size 480px is an absolute metric
the last slot width will be the default when none of the media conditions are true
the browser ignores everything after the first matching condition 
	media conditions save bandwidth to not download file sizes bigger than needed
	older browsers ignore this attribute and just load what's defined by src

<img srcset=”fairy-480.jpg 480w,
		fairy-800.jpg 800w”
	sizes=”(max-width: 600px) 480px,
		800px”
	src=”fairy-800w,jpg”
	alt=”fairy”>




resolution switching
	same size, different resolution
	the browser uses x-descriptors instead of sizes attribute 
<img srcset=”fairy-320w.jpg,
		fairy-480w.jpg 1.5x,
		fairy-640w.jpg 2x”
	src=”fairy-640w.jpg”
	alt=”fairy”>

then applying css 

img {
	width: 320px;
}

sizes are not needed as the browser will serve the most appropriate from the sourceset
one device pixel represents one CSS pixel
if the device has double resolution (2x) then the 640.jpg will be shown

art direction 
	wanting to change the image displayed to suit different image display sizes
	the <picture> element helps

<picture>
	wrapper containing several <source> elements that provide different sources to the browser

<picture>
	<source media=”(max-width: 799px)” srcset=”elva-480w.jpg”>
	<source media=”(min-width: 800px) srcset=”elva-800.jpg”>
	<img src=”elva-800.jpg” alt=”elva girl”>
</picture>

<source> elements include a media condition. The first one that returns true is the one displayed
if the viewport width is 799px or less, the first source element will be displayed
if the viewport is 800px or more, the second source element will be displayed

srcset attributes contain the path to the image file 
the image element needs to be provided as it's the default image when none condition is met
a fallback should be included for browsers that don't support the picture element.

WebP and AVIF are new formats that maintain low file size and high quality








2.13 HTML Tables

Tables
	structured set of data (rows and columns). Tabular data
	improve accessibility
	
Table Styling	
	tables need styling information and a solid HTML structure

back in the day developers used tables to layout websites
	reduce accessibility for visually impaired users
	tag soup (involve complex markup structures so code is harder to write, maintain and debug)
	they're not automatically responsive. 

Elements

<table></table>

Table Data <td>
	smallest container inside a table cell
	fist row 
	
Table Row <tr>
	creates another row
	<td> gets nested inside this element so a new row is formed
	
Table Headers <th>
	special cells that go at the start of a row or column
	define the type of data that rows or columns contain 
	header cells are not normal cells
	
colspan and rowspan attributes
	allow to span the columns and rows across multiple cells 

<col> <colgroup> elements
	styles columns more efficiently than specifying individual colspan attributes in each <tr> <th> 	elements
	<col> is a nested element of <colgroup> empty tag
	<col> will define the style of the column with a style attribute 
	to apply the same style to different columns, we use the span attribute 
	
<table>
	<colgroup>
		<col>
		<col style=”background-color: yellow”>
	</colgroup>

or for both columns <col style=”background-color: yellow” span=”2”>

2.14 Table Advance Features

<caption>
	gives your table a caption
	nested element inside <table>
	description of the table contents
	caption helps impaired users to have a global idea of the table, to choose if they want to read it
	summary attribute is also used, but deprecated by HTML5 
	
<thead> <tfoot> <tbody>
	marks up a header, footer and body section for the table
	they aren't useful for screen reader users
	they are useful for adding CSS to the table
	
<thead>
	must wrap the part of the table that is the header
	the first row might be the header
	table header should come after <col>/<colgroup>
<tfoot>
	warps the content that is the footer
	final row with items in most cases
<tbody>
	wraps all other parts of the table
	

Nesting Tables
	nest a table inside another table
	
Accessible tables
	
scope attribute 
	can be added to the <th> element to define if it's a col (column) header or a row header
	scope can also define colgroup  rowgroup as a header of headers 
	
id and header attributes 
	can be used as an alternative to scope
	create associations between headers and cells
	unique id to each th element
	headers attribute to each td element
	for this to work, there has to be both column and row headers

