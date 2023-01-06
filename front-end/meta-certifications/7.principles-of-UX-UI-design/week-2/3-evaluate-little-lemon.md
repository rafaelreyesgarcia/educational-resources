# little lemon evaluation

evaluating little lemon online ordering functionality

empathy and journey maps of the persona are used when evaluating the design of a user interface.

journey
- the user tries to order online food.
- order online button lands her on reserve a table page.
- the word menu and greek salad are tappable but she doesn't know.
- the word go is supposed to direct her
- there's no basket
- confusion between go and add buttons

# little lemon form breakdown

forms are essential types of user interactions on web and apps.

users should be able to complete forms quickly and easily

text fields where the user needs to input data should be aligned to the left as best practice

## include only vital fields

book web forms: filling in the blanks by luke wroblewski

<quote> "Any question you ask people in a Web form requires them to parse it, formulate a response and then input their answer in the affordance you have provided on the form. Being vigilant about every question you ask allows you to remove questions that are not absolutely necessary or can be asked at a better time or place or can be inferred automatically. And the fewer questions you ask, the better the odds are of people completing your forms quickly and easily." </quote>

bad 
- unnecessary fields 'middle initial' 'evening phone' 
- address has three lines
- user is expected to retype email address

## required fields and errors

first name should have an asterisk to indicate required field.

## character limits

security and storage are the reasons to require lower and upper characters.

validation should be performed on the input to ensure correct
- type
- length
- format
- range

> when users log in to access information it can be validated against a database.

longest name in the world is only 747 characters long. 

**solution**
- remove minimum number of characters 
- implement max character requirement (50 is good)
- validation should be performed on the input

## email

best approach is to send a confirmation link to the user instead of forcing them to retype their email.

## payment not explaining CVV

last 3 digits on back of card is not

# menu icons in navigation

## navigation icons

**hamburger menu**

resembles two buns and a patty.

found in the top or bottom corner of websites and apps.

informs users there's more options to uncover.

displays menu area with multiple sections.

best practice to avoid this icon in desktop views.

**kebab menu**

three vertical dots originated in material design.

**meatballs menu**

three horizontal dots.

**bento menu**

named after bento boxes, is grid-based.

**Döner menu**

turkish dish, Döner.

using it together with sort by is best practice.

also used with global filters.

vertical stack of three lines of varying sizes.

# navigation best practices

iterate and test to gain valuable feedback and refactor solutions.

content strategy involves presenting content on a website in a meaninful way to promote products.

structure content under headings.

**organization** groups and labels other related content.

**presentation** is how components are assembled.

**specifications** are the content requirements for each piece.

information architecture can be used to find out good navigation.

website nagivation can be organized into 5 sections
- home
- about
- menu
- reservations
- order online

a hierarchy and order of elements in a navigation bar creates meaning and organization in a website.

navigation influence the sense of orientation, organization that is present on all pages to reinforce structure.

logo acts as a link to the homepage.

# knowledge check: navigation and form design

1. Should you spend time designing forms from the user's perspective, or are they there simply to collect information from your users for the stakeholder's benefit?
**yes**

A poorly designed form may result in page and website abandonment due to user frustration, which benefits nobody as it may result in a drop in conversions and sales.

2. Which of these are guidelines or best practices for form design?

**Keep forms simple and straightforward**

Avoid adding any unnecessary fields or questions. Include only the required information in your form. 

**Sort your form fields from the simplest to the most difficult**

Begin your form with the most straightforward field questions (such as name and email) before moving on to the more time-consuming questions.

**Clearly label your form**

Give your form a label that lets your visitors know what will happen once they submit it.

**Make use of inline form field validation**

Inline form validation is a procedure that checks a visitor's information in real time as they fill out the form

3. The best practice is to use a Captcha instead of a reCaptcha during form design.

The best practice is to use a reCaptcha instead of a Captcha during form design, as the Captcha is based on image identification.

4. What content strategy involves presenting content on your website in a meaningful way?
- specifications
- organization
- prioritization
- presentation

5. A Kebab menu consists of an image of three equal lines and informs users that there is more to discover beyond the three lines. 
**no**

# module summary

- evaluate interactive design
- evaluation methods in UX/UI
- best practice principles in design
- good form design
- component driven products
- design systems
- interface guidelines
- evaluate content and structure with usability principles

# module quiz: evaluating interactive design

1. The hamburger icon is a menu icon that opens an inline menu
**false**

2. Who wrote the 10 Usability Heuristics for UI design?
**Jakob Nielsen**

3. Should a form field have a minimum character count, for example, a first name with three characters?
**no**

At least 220 three-character names exist. In some ways, this is dehumanizing because the system regards someone as unreal or invalid. 

4. Which of these form-field labels are necessary?
- optional
- fail feedback
- required

5. good design is as little design as possible is one of dieter rams principles?
**yes**

Design should always be intentional. Anything that doesn’t serve a purpose for the user should be excluded. With less clutter, a design will achieve more clarity for the user. 

6. strive for consistency is one of dieter rams principle?
**no**

This is one of Shneiderman’s 8 Golden Rules of UI Design. It is critical to maintain uniformity throughout the site, whether it's the layout, the size of the button, the color code or the tone used when writing the page.

7. What is a severity rating in a heuristic evaluation?

It defines a score between zero and four to indicate how much it violates a heuristic

8. What is an error rating?

It defines a score between zero and four to indicate how easily the violation may be fixed

9. A brand style guide is a set of reusable pre-made design components and patterns that can be used to design products at scale
**no**

A design system is a set of reusable pre-made design components and patterns that can be used to design products at scale.  

10. Who wrote the 8 Golden Rules for UI Design
**Ben Shneiderman**

