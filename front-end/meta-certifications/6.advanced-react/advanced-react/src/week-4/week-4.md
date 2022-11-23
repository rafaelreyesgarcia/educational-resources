# graded assessment 

## course recap

module 1
- render lists in react
- forms in react (controlled and uncontrolled component)
- react context (props and state) re-rendering with context

module 2
- useState hook to work with complex data and manage state
- useEffect 
- rules of hooks and fetching data with hooks
- useReducer (for more complex state than useState) and useRef (underlying DOM)

module 3
- JSX in depth
- component composition with children (containment and specialization)
- spread operator
- reusing behavior (cross-cutting concerns) and HOCs and render props
- integration tests with react testing library and jest

module 4
- graded assessment

## solution walk-thrhough 

### App.js file 

```js
import { ChakraProvider } from "@chakra-ui/react"; 
import Header from "./components/Header"; 
import LandingSection from "./components/LandingSection"; 
import ProjectsSection from "./components/ProjectsSection"; 
import ContactMeSection from "./components/ContactMeSection"; 
import Footer from "./components/Footer"; 
import { AlertProvider } from "./context/alertContext"; 
import Alert from "./components/Alert"; 

function App() { 
 return ( 
   <ChakraProvider> 
     <AlertProvider> 
       <main> 
         <Header /> 
         <LandingSection /> 
         <ProjectsSection /> 
         <ContactMeSection /> 
         <Footer /> 
         <Alert /> 
       </main> 
     </AlertProvider> 
   </ChakraProvider> 
 ); 
} 

export default App;
```

### context/alertContext.js

```js
import {createContext, useContext, useState} from "react"; 

const AlertContext = createContext(undefined); 

export const AlertProvider = ({ children }) => { 
  const [state, setState] = useState({ 
    isOpen: false, 
    type: 'success', 
    message: '', 
  }); 

  return ( 
    <AlertContext.Provider 
      value={{ 
        ...state, 
        onOpen: (type, message) => setState({ isOpen: true, type, message }), 
        onClose: () => setState({ isOpen: false, type: '', message: '' }), 
      }} 
    > 
      {children} 
    </AlertContext.Provider> 
  ); 
}; 

export const useAlertContext = () => useContext(AlertContext);
```
### components/Header.js

```js
import React, { useEffect, useRef } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faLinkedin, 
 faMedium, 
 faStackOverflow, 
} from "@fortawesome/free-brands-svg-icons"; 
import { Box, HStack } from "@chakra-ui/react"; 
 
const socials = [ 
 { 
   icon: faEnvelope, 
   url: "mailto: hello@example.com", 
 }, 
 { 
   icon: faGithub, 
   url: "https://www.github.com/sureskills", 
 }, 
 { 
   icon: faLinkedin, 
   url: "https://www.linkedin.com/in/sureskills/", 
 }, 
 { 
   icon: faMedium, 
   url: "https://medium.com/@sureskills", 
 }, 
 { 
   icon: faStackOverflow, 
   url: "https://stackoverflow.com/users/sureskills", 
 }, 
]; 

/** 
* This component illustrates the use of both the useRef hook and useEffect hook. 
* The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation. 
* The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted. 
* Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements. 
*/ 
const Header = () => { 
 const headerRef = useRef(null); 
 
 useEffect(() => { 
   let prevScrollPos = window.scrollY; 
 
   const handleScroll = () => { 
     const currentScrollPos = window.scrollY; 
     const headerElement = headerRef.current; 
     if (!headerElement) { 
       return; 
     } 
     if (prevScrollPos > currentScrollPos) { 
       headerElement.style.transform = "translateY(0)"; 
     } else { 
       headerElement.style.transform = "translateY(-200px)"; 
     } 
     prevScrollPos = currentScrollPos; 
   } 
   window.addEventListener('scroll', handleScroll) 
 
   return () => { 
     window.removeEventListener('scroll', handleScroll) 
   } 
 }, []); 
 
 const handleClick = (anchor) => () => { 
   const id = `${anchor}-section`; 
   const element = document.getElementById(id); 
   if (element) { 
     element.scrollIntoView({ 
       behavior: "smooth", 
       block: "start", 
     }); 
   } 
 }; 
 return ( 
   <Box 
     position="fixed" 
     top={0} 
     left={0} 
     right={0} 
     translateY={0} 
     transitionProperty="transform" 
     transitionDuration=".3s" 
     transitionTimingFunction="ease-in-out" 
     backgroundColor="#18181b" 
     ref={headerRef} 
   > 
     <Box color="white" maxWidth="1280px" margin="0 auto"> 
       <HStack 
         px={16} 
         py={4} 
         justifyContent="space-between" 
         alignItems="center" 
       > 
         <nav> 
           <HStack spacing={8}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a> 
             ))} 
           </HStack> 
         </nav> 
         <nav> 
           <HStack spacing={8}> 
             <a href="#projects" onClick={handleClick("projects")}> 
               Projects 
             </a> 
             <a href="#contactme" onClick={handleClick("contactme")}> 
               Contact Me 
             </a> 
           </HStack> 
         </nav> 
       </HStack> 
     </Box> 
   </Box> 
 ); 
}; 

export default Header; 

```

### components/Card.js

```js
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import React from "react"; 
 
const Card = ({ title, description, imageSrc }) => { 
   return ( 
     <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl" 
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} /> 
       <VStack spacing={4} p={4} alignItems="flex-start"> 
         <HStack justifyContent="space-between" alignItems="center"> 
           <Heading as="h3" size="md"> 
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg"> 
           {description} 
         </Text> 
         <HStack spacing={2} alignItems="center"> 
           <p>See more</p> 
           <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
         </HStack> 
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 
```

### components/Alert.js

```js
import { 
 AlertDialog, 
 AlertDialogBody, 
 AlertDialogContent, 
 AlertDialogHeader, 
 AlertDialogOverlay, 
} from "@chakra-ui/react"; 
import { useAlertContext } from "../context/alertContext"; 
import { useRef } from "react"; 
 
/** 
* This is a global component that uses context to display a global alert message. 
*/ 
function Alert() { 
 const { isOpen, type, message, onClose } = useAlertContext(); 
 const cancelRef = useRef(); 
 const isSuccess = type === "success" 
 
 return ( 
   <AlertDialog 
     isOpen={isOpen} 
     leastDestructiveRef={cancelRef} 
     onClose={onClose} 
   > 
     <AlertDialogOverlay> 
       <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}> 
         <AlertDialogHeader fontSize="lg" fontWeight="bold"> 
           {isSuccess ? 'All good!' : 'Oops!'} 
         </AlertDialogHeader> 
         <AlertDialogBody>{message}</AlertDialogBody> 
       </AlertDialogContent> 
     </AlertDialogOverlay> 
   </AlertDialog> 
 ); 
} 
 
export default Alert;
```

### components.Footer.js

```js
import React from "react"; 
import {Box, Flex} from "@chakra-ui/react"; 
 
const Footer = () => { 
 return ( 
   <Box backgroundColor="#18181b"> 
     <footer> 
       <Flex 
         margin="0 auto" 
         px={12} 
         color="white" 
         justifyContent="center" 
         alignItems="center" 
         maxWidth="1024px" 
         height={16} 
       > 
         <p>Pete • © 2022</p> 
       </Flex> 
     </footer> 
   </Box> 
 ); 
}; 
 
export default Footer; 
```

### components/FullScreenSection.js

```js
import * as React from "react"; 
import { VStack } from "@chakra-ui/react"; 
 
/** 
* Illustrates the use of children prop and spread operator 
*/ 
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
 return ( 
   <VStack 
     backgroundColor={boxProps.backgroundColor} 
     color={isDarkBackground ? "white" : "black"} 
   > 
     <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}> 
       {children} 
     </VStack> 
   </VStack> 
 ); 
}; 
 
export default FullScreenSection;
```

### components/LandingSection.js

```js
import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Pete!"; 
const bio1 = "A frontend developer"; 
const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://i.pravatar.cc/150?img=7" 
         size="2xl" 
         name="Your Name" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;
```

### component/ProjectsSection.js

```js
import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: "React Space", 
   description: 
     "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️", 
   getImageSrc: () => require("../images/photo1.jpg"), 
 }, 
 { 
   title: "React Infinite Scroll", 
   description: 
     "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️", 
   getImageSrc: () => require("../images/photo2.jpg"), 
 }, 
 { 
   title: "Photo Gallery", 
   description: 
     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
   getImageSrc: () => require("../images/photo3.jpg"), 
 }, 
 { 
   title: "Event planner", 
   description: 
     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
   getImageSrc: () => require("../images/photo4.jpg"), 
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;
```

### components/ContactMeSection.js

```js
import React, {useEffect} from "react"; 
import { useFormik } from "formik"; 
import { 
 Box, 
 Button, 
 FormControl, 
 FormErrorMessage, 
 FormLabel, 
 Heading, 
 Input, 
 Select, 
 Textarea, 
 VStack, 
} from "@chakra-ui/react"; 
import * as Yup from 'yup'; 
import FullScreenSection from "./FullScreenSection"; 
import useSubmit from "../hooks/useSubmit"; 
import {useAlertContext} from "../context/alertContext"; 
 
/** 
* Covers a complete form implementation using formik and yup for validation 
*/ 
const ContactMeSection = () => { 
 const {isLoading, response, submit} = useSubmit(); 
 const { onOpen } = useAlertContext(); 
 
 const formik = useFormik({ 
   initialValues: { 
     firstName: "", 
     email: "", 
     type: "hireMe", 
     comment: "", 
   }, 
   onSubmit: (values) => { 
     submit('https://john.com/contactme', values); 
   }, 
   validationSchema: Yup.object({ 
     firstName: Yup.string().required("Required"), 
     email: Yup.string().email("Invalid email address").required("Required"), 
     comment: Yup.string() 
       .min(25, "Must be at least 25 characters") 
       .required("Required"), 
   }), 
 }); 
 
 useEffect(() => { 
   if (response) { 
     onOpen(response.type, response.message); 
     if (response.type === 'success') { 
       formik.resetForm(); 
     } 
   } 
 }, [response]); 
 
 return ( 
   <FullScreenSection 
     isDarkBackground 
     backgroundColor="#512DA8" 
     py={16} 
     spacing={8} 
   > 
     <VStack w="1024px" p={32} alignItems="flex-start"> 
       <Heading as="h1" id="contactme-section"> 
         Contact me 
       </Heading> 
       <Box p={6} rounded="md" w="100%"> 
         <form onSubmit={formik.handleSubmit}> 
           <VStack spacing={4}> 
             <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
               <FormLabel htmlFor="firstName">Name</FormLabel> 
               <Input 
                 id="firstName" 
                 name="firstName" 
                 {...formik.getFieldProps("firstName")} 
               /> 
               <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
               <FormLabel htmlFor="email">Email Address</FormLabel> 
               <Input 
                 id="email" 
                 name="email" 
                 type="email" 
                 {...formik.getFieldProps("email")} 
               /> 
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
             </FormControl> 
             <FormControl> 
               <FormLabel htmlFor="type">Type of enquiry</FormLabel> 
               <Select id="type" name="type" {...formik.getFieldProps("type")}> 
                 <option value="hireMe">Freelance project proposal</option> 
                 <option value="openSource"> 
                   Open source consultancy session 
                 </option> 
                 <option value="other">Other</option> 
               </Select> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
               <FormLabel htmlFor="comment">Your message</FormLabel> 
               <Textarea 
                 id="comment" 
                 name="comment" 
                 height={250} 
                 {...formik.getFieldProps("comment")} 
               /> 
               <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
             </FormControl> 
             <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
           </VStack> 
         </form> 
       </Box> 
     </VStack> 
   </FullScreenSection> 
 ); 
}; 
 
export default ContactMeSection;
```

### hooks/useSubmit.js

```js
import {useState} from "react"; 
 
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 
 
/** 
* This is a custom hook that can be used to submit a form and simulate an API call 
* It uses Math.random() to simulate a random success or failure, with 50% chance of each 
*/ 
const useSubmit = () => { 
 const [isLoading, setLoading] = useState(false); 
 const [response, setResponse] = useState(null); 
 
 const submit = async (url, data) => { 
   const random = Math.random(); 
   setLoading(true); 
   try { 
     await wait(2000); 
     if (random < 0.5) { 
       throw new Error("Something went wrong"); 
     } 
     setResponse({ 
       type: 'success', 
       message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`, 
     }) 
   } catch (error) { 
     setResponse({ 
       type: 'error', 
       message: 'Something went wrong, please try again later!', 
     }) 
   } finally { 
     setLoading(false); 
   } 
 }; 
 
 return { isLoading, response, submit }; 
} 
 
export default useSubmit;
```


### header animation

Header.js has two core hooks `useRef` `useEffect`

the header hides when scrolling down, shows up when scrolling back up

a side effect is implemented to subscribe to the scroll event on the window object using `window.addEventListener`

important to remove subscriptions before unmounting phase

### header navigation

## **final course assessment: advanced react**

1. Yup.string().email("Invalid email address").required("Required")

2. 
```jsx
const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);


function App() {
  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      createdAt: '18:00',
    }, 
    {
      id: 'todo2',
      createdAt: '20:30',
    }
  ]);

  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      {todos.map((todo, index) => (
        <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
      ))}
    </div>
  );
}
```

3. 
```jsx
import{ createContext, useContext, useState} from"react";

const ThemeContext = createContext(undefined);

export const ThemeProvider= () => {
  const[theme, setTheme] = useState("light");

  return(
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(!theme),
      }}
    >
    </ThemeContext.Provider>
  );
};
```
- toggleTheme implementation is incorrect
- children are not passed through

4. A tree of elements cannot mix and match both components and DOM elements as the type property.  
it is false to claim that they cannot be mixed and matched. Actually, they can.

5. 
```jsx
const Button = ({ children, ...rest }) => (
  <button onClick={() => console.log("ButtonClick")} {...rest}>
    {children}
  </button>
);

const withClick = (Component) => {
  const handleClick = () => {
    console.log("WithClick");
  };

  return(props) => {
    return<Component {...props} onClick={handleClick} />;
  };
};

const MyButton = withClick(Button);

export default function App() {
  return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
}
```
**false**

6. Question 6
When writing a test for a React component using jest and react-testing-library, how would you assert that a function has been called with some specific arguments?  
**toHaveBeenCalledWith**

7. valid implementations of the render prop pattern  
```jsx

<MealProvider render={data => (
  <p>Ingredients: {data.ingredients}</p>
)} />

<Row renderIcon={() => <Icon name="add" />} />

```

8. What do you need to add to this code to make the useEffect run only once?  
```jsx
React.useEffect(()=> {
 console.log('The value of the person variable is', person)
})
```

**add an empty dependency array**

9. setRestaurantName variable value will not be reset between re-renders of the App component.
```jsx
import {useState} from "react";

export default function App() {
  const [restaurantName, setRestaurantName] = useState("Lemon");

  function updateRestaurantName() {
    setRestaurantName("Little Lemon");
  };

  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>
        Update restaurant name
      </button>
    </div>
  );
};
```

10. is this valid?
```jsx
if (data !== '') {
  useEffect(() => {
    setData('test data');
  });
}
```