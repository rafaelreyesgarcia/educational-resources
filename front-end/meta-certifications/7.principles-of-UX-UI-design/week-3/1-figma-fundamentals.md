# frames, layers and basic shapes

- use layers panel
- drag and organize layers
- construct shapes
- duplicate, scale, group and align elements

**frames**

other design tools refer to frames as artboards.

a container where the design lives.

**layer**

object within a frame.

**group**

are multiple objects combined so a single top layer is created that holds all the objects.

frames and groups are similar, but frames provide much more functionality.

zoom menu is in upper right of the screen, has zooming shorcuts.

basic shapes tools menu

holding shift will lock proportions

shapes have properties 

rectangle properties
- x and y coordinates
- width and height
- angles
- borders

other shape menus
- constraints
- layer
- fill
- stroke
- effects
- export

# layers groups and frames

use descriptive layer names to organize layers

## group vs frames

ctrl + g usually groups layers in design software.

logically related layers should be grouped to become a component.

parent element in a document is related to the group object.

constraints for a group are default left top.

frames are similar to a window or artboard.

resizing the frame only resizes the window in which you view the contents not the contents itself.

if constraints of a group are set to scale, group will scale with parent element (a frame).

a frame's size is independent of children (nested layers)

size of a parent won't change if children are moved or resized.

frames like rectangles are objects that can be styled

a frame's children can overflow past its bounds.

`clip contents` can clip that out-of-bound areas.

**auto-layout resizing**

auto-layout can be applied to frames.

**grids and layouts**

can be applied to any frame from an artboard, UI region or small component.

**create components**

all component layers must be housed in a single frame.

if elements are housed in a group, figma will convert the group into a frame.

# type and text

font determines readability and appeal of text.

color, size, spacing and width deliver a message.

text properties and design panel on right sidebar.

T keyboard shorcut

text auto resize can be
- horizontally
- fixed
- vertically

ctrl + b - bold

ctrl + i - italics

ctrl + u - underline

by default figma uses percentage values.

**text align**

align horizontally or vertically

# typography best practices

more than 90% of online information is text.

text enchances user experience and usability.

captures user's attention.

typography makes language visible.

a style guide should include a typography study.

**typography** is the layout and arrangement of content using pre-made letter systems (typefaces and fonts)

**lettering** entails creating letterforms

**typeface** has multiple font weights, consistent style across characters, numbers and symbols.

## typography elements

**baseline**

point at which the text line rests. calculates distance between written content and other elements.

**cap height**

height of capital letters.

M, H, T, I

indicates height of flat letters not round letters or pointy letters.

**x-height**

known as corpus size, distant between lowercase x baseline and meanline.

measuring the top of characters like x is easier than caracters that overshoot or are rounded.

**ascenders and descenders**

ascender is a part that extends above the x-height and cap-height. 

descender downward strokes that extend beyond the baseline.

**weight**

overall thickness of a typeface.

most well-known
- light
- regular
- medium
- bold

**tracking**

spacing between all font characters.

consistent adjustment of space between letters.

**kerning**

is the space that exists between two specific letters.

doesn't apply to all characters like tracking.

**leading**

space between two lines of text. 

**whitespace**

space between blocks of text.

make text more appealing and improve readability.

**stroke**

straight or curved line forms main body.

**serif**

stroke or foot-like element is connected to the main stroke of some typefaces.

tiny 'feet' guide reader's eyes to the next character.

**sans-serif**

typeface that doesn't have any strokes or extra elements at the ends of a letter.

often used for digital interfaces.

## improving UX with typography

**hierarchy**

hierarchical elements separate blocks and improve communication.

desktop font size 16px or higher for body text

iOS font size of at least 11px

android use at least 12px

**text colors**

colors can be associated with an emotion as well as represent a visual hierarchy.

**line length**

a simple formula to determine the length is to multiply the font size by 30.

**avoid text walls**

avoid creating walls of text.

insert paragraph breaks at intervals.

images, quotations, headings, subheadings, bulletpoints can breakdown text walls.

# grids and constraints

responsive design is an approach to web page creation that makes use of flexible layouts that remove the need to design layouts to suit every device.

a web page or app is built of squares and rectangles which are contained within a grid system.

columns and lines organize the contents of a page, create alignment and order.

form basic structure of the user interface

design in figma with responsive web design in mind.

1. create a desktop frame (1440 x 1024) 
2. layout grid, 10px by 10px default
3. change type to column grid
4. 5 column default to 12 columns
5. type to stretch so items resize automatically
6. margin 70, spacing between content and left and right side
7. gutter 20
8. create another grid layout this time row
9. set 1000 rows type top and margin to 0 and gutter 0
10. add content blocks 
11. zoom menu top right can disable grids.
12. constraints are used to fix content on a layour of a grid. If frame is altered, the content is responsive.

# creating grids for tables and mobile

colums should be set to 8.

a nudge is how much you can move layers on a frame using the arrow keys.

small nudge allows to move a layer by increments of 1px

big nudge is done using shift + arrow keys

default, figma uses 10px

preferences -> nudge amount sets the large nudge value to 8px

# grid systems

containers in webpages are squares and rectangles that
- organize content on the page
- create alignment and order
- basic structure of UI

grids system are invisible lines and columns that hold elements and contents.

grid systems are made up of 
- columns
- rows
- gutters
- modules
- margins

**columns**
- 12 columns on desktop
- 8 on tablet
- 4 on mobile

most grids have 60 to 80px column widths.

**gutter**

negative space between columns

common gutter is 20px

**modules or content modules**

intersection of rows and columns create units of space.

text, images, buttons fit into modules.

**margin**

margin is negative space between outside column's edge and the frame.

## types of grid

**block grids**

simplest grid structure. large rectangular area taking most of the space inside a format.

single column that can include one or multiple elements arranged vertically surrounded by margins.

used for continous blocks of text, full-width images.

**column grid**

most common.

composed of several columns, primarily used to organize multiple elements into columns.

organize multiple elements into columns.

column width traditionally doesn't change, but number of column does depending on device.

minimum 2 columns with no max

**modular grid**

multiple items.

**hierarchical grids**

freestyle whose elements are placed among the grids and columns 'spontaneously'

refer to irregular grids that accomodates specific content needs.

**baseline grids**

set leading from one line of text to the next.

easier to organize, create vertical rythm and are aesthetically pleasing.

process of creating a grid

- creating the grid
- leave whitespace as negative space (margins, gutters)
- don't worry to break the grid after created.

**960 grid system**

960pixel width 12 columns or 16 columns

- overall width is 960px
- max of 12 or 16 columns
- gutter spacing of 20px (10px right 10px left)
- 940px total content area

# manipulating elements

joining shapes 
- union
- substract
- intersect
- exclude (Areas that interect)

align multiple objects
- left
- horizontal center
- right
- vertical centers
- bottom

distribute elements
- vertically
- horizontally

when resizing a group, effects, strokes and text sizes of children won't scale with the parent.

to scale these properties with a parent, the scale tool should be selected.


# working with images

**importing**

resizing with the mouse and refining size to match the container. align them both.

**fill an object**

dropdown menu in fill menu to select image.

additional editing options are available in this menu (exposure, contrast, saturation, shadows, etc)

fit makes sure the all the image fits, but can introduce whitespace.

crop can crop an image to a desired size.

tile option allows to create a pattern of the image.

**masking**

image should be on top of a shape.

select both and create a mask.


# save and import figma files

file > save local copy

import a fig file to draft section.

a draft file is a private file that contains work in progress.

import draft files into figma.

drafts > import file

# self-review: design text hierarchy and grid

1. How many columns are used in a desktop grid system?

A 12-column grid system is typically used on a desktop.

2. Typography hierarchy consists of three sections

**heading**

The heading is the first section the viewer should see, so the most crucial information should be placed here and used to draw the viewer's attention.

**sub-heading**

The subheading divides the design layout into different sections, expanding the header information and giving the reader more information about the body text.

**body**

The body text's primary function is to convey the information you want.

3. Set the number of typefaces to two or three to avoid user confusion and distraction from the information and messages you are trying to convey on your website.

Correct! You need to set the number of typefaces to two or three to avoid user confusion and distraction from the information and messages you are trying to convey on your website. 

# knowledge chekc: type and text design

1. Every web page is made up of squares and rectangles. They are located within an encompassing grid layout
**true**

2. Gutters are the negative space between the outside column’s edge and the frame
**false that's margin**

3. What grids are used to set the leading line of text to the following line of text?
**baseline grid**

4. ---- is a container where your design lives.
**frame**

5. Responsive design is an approach to web page creation that uses flexible layouts, removing the need to design layouts to suit every device.
**true**



