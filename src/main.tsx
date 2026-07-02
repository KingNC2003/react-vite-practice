import { createRoot } from "react-dom/client";
import { Children, useState, useEffect, useReducer, useMemo} from "react";
import { createPortal } from "react-dom";
import {name,age} from "./person"
import message from "./message";
import { Suspense, useTransition, forwardRef, useRef, createContext, useContext, useCallback } from "react";
import { BrowserRouter, Link, Routes, Route, Outlet, NavLink, useParams } from "react-router-dom";
import React from "react";


const myElement = (
  <table>
    <tbody>
      <tr>
        <th> Name </th>
        <th> Age </th>
      </tr>
      <tr>
        <td> Nick </td>
        <td> 23 </td>
      </tr>
      <tr>
        <td> Autumn </td>
        <td> 23 </td>
      </tr>
    </tbody>
  </table>
)

// ES6
  // Map() - .map((value, index, array) => {}
    // Map() in React
    const fruit = ["Apples", "banannas", "Grapes"];
    function MyList(){
      return ( 
        <ul>
        {fruit.map(fruit => <li key={fruit}>{fruit}</li>)}
        </ul>
      );
    }

    // Map with objects
    const users = [
      {id: 1, name: "Nick", age: 23},
      {id: 2, name: "Autumn", age: 23},
      {id: 3, name: "Anne", age: 25}
    ]
    function UserList(){
      return (
        <ul>
          {users.map(user => 
            <li key={user.id}>
              {user.name} is {user.age} years old
          </li>
        )}
        </ul>
      )
    }

// Destructuring - arrays left is [] object its {}, arrays leave ,, blank to skip object skip no commas
  // Old way
    const vehicles = ["Mustang","F-150", "Honda"];
    const sportCar = vehicles[0];
    const truck = vehicles[1];
    const normCar = vehicles[2];
  // New way
  const [sportCar1,truck1,normCar1] = vehicles;

  // Example
  function dateInfo(dat: Date){
    const d = dat.getDate();
    const m = dat.getMonth() + 1;
    const y = dat.getFullYear();

    return [d,m,y];
  }
  const [day, month, year] = dateInfo(new Date());

  // Desctructuring React components
    // Props
      function Greeting ({name, age}:{name:string,age:number}){
        return <h1> Hello, {name}! You are {age} years old.</h1>
      }

    // useState hook destructuring
      function Counter() {
        const [count, setCount] = useState(1);
        return (
          <button onClick={()=>setCount(count*20)}>
            Count: {count}
          </button>
        );
}

// Spread operator (...)
  // Add first and second array
    const numb1 = [1,2,3,4];
    const numb2 = [5,6,7,8];
    const numbAll = [...numb1,...numb2];

  // First to store than rest stored in array
    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;

  // Object latest add can overwrite duplications
    const car = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red'
    }

    const car_more = {
      type: 'car',
      year: 2021, 
      color: 'yellow'
}
    const mycar = {...car, ...car_more}

// Ternary operator - condition ? <expression if true> : <expression if false>
    function FirstScreen(){
      const auth = true;
      return (
        <h1> {auth ? "Welcome!" : "Please login"} </h1>
      )
    }

// Template strings
  // Use backticks instead of quotes.
  // Allow variable interpolation with ${}.
  // Allow expression interpolation with ${}.
  // Support multi-line strings.
  // Replace string concatenation with +.
  // Can be used in React to create dynamic text.
  // Support tagged templates, where a function processes the string.
  // Make strings easier to read when mixing text, variables, and logic.

// JSX
    // JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
    // With JSX you can write expressions inside curly braces { }.
    // The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result
    // () For multiple lines of HTML
    // The HTML code must be wrapped in ONE top level element.
    // Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
    // Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM. <  />
    // Have to use className instead of class
    // Comments in JSX are written with {/* */}
    // Return type not needed but if wanted its JSX.Element

    // JSX in react components example
     function Car() {
        const brand = "Ford";
        const model = "Mustang";
        return (
          <>
            <h2>My Car</h2>
            <p>It is a {brand} {model}.</p>
          </>
        );
      }
      
      // Inside {} can be expressions, variables, functions, object properies (Object.prop), 
      
      // JSX attribute values
        // Can use JS expressions as attribute values
        function Car1() {
          const x = "myclass";
          return (
            <h1 className={x}>Hello World</h1>
          );
        }

        // Event attributes are camelCase - <button onClick={myfunc}>Click me</button>
        // boolean attributes <button onClick={myfunc} disabled={true}>Click me</button>

        // Styles only accept JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).
          function Car390() {
            const myStyles = {
              color: "red",
              fontSize: "20px",
              backgroundColor: "lightyellow",
            };
            return (
              <h1 style={myStyles}> My car</h1>
            )
          }
      
      // JSX if statements
          // If statement are not supported inside JSX
          // Need to be used outside JSX unless ternary expression is used

    //  React components
        // Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
        // Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
        // In older React code bases, you may find Class components primarily used.
        // It is now suggested to use Function components along with Hooks, instead of Class components.
        // Components must start with uppercase letters
        // To render - createRoot(document.getElementById('root')).render()
        // Arguments can be passed into components as props
        
        // Can have components inside components
          // Function components
            // And can render components multiple times inside component
              function Patty(){
                return (
                  <h2> Meat! </h2>
                );
              }
              function Burger(){
                return (
                  <>
                  <h1> Buns</h1>
                  <Patty/>
                  </>
                )
              }
              
            // More advanced example with props
            function Car234({make,model}:{make:string, model:string}){
              return (
                <h2> {make} {model} </h2>
              )
            }

            function Garage(){
              return ( 
                <>
                <h1> Im a garage with a</h1>
                <Car234 make="Ford" model="Mustang"/>
                </>
              );
            };

          // Class components
            // Class components are an older way to create React components.
            // They are based on ES6 classes and must extend React.Component.
            // Class component names must start with a capital letter.
            // They must contain a render() method.
            // The render() method returns JSX (the UI to display).
            // Components are rendered using JSX tags such as <Car />.
            // A constructor can be used to initialize state and setup values.
            // Class component data is typically stored in this.state.
            // State values are accessed with this.state.propertyName.
            // State is updated using this.setState(), not by directly changing this.state.
            // Props are accessed through this.props.
            // Class components support lifecycle methods such as componentDidMount(), componentDidUpdate(), and componentWillUnmount().
            // Modern React generally prefers function components with Hooks instead of class components

    // React props
      // Props are arguments passed into React components.
      // Props are passed to components via HTML attributes.
      // string "", number {}, Object {}, Array {} us .prop[#] to select


      type House = {
        bedrooms: number;
        bathrooms: number 
      }

      const house:House = {
        bedrooms:2,
        bathrooms:1
      }


      function HouseInfo(house:House){
        return (
          <p> Your house has {house.bedrooms} and {house.bathrooms} bathrooms</p>
        )
      }

      // Another way
      type House1 = {
        bedrooms: number;
        bathrooms: number 
      }

      const house1:House1 = {
        bedrooms:2,
        bathrooms:1
      }


      function HouseInfo1({bedrooms, bathrooms}: House1){
        return (
          <p> Your house has {bedrooms} and {bathrooms} bathrooms</p>
        )
      }

      // Another way
      type House2 = {
        bedrooms: number;
        bathrooms: number 
      }

      const house2:House2 = {
        bedrooms:2,
        bathrooms:1
      }


      function HouseInfo2(house: House2){
        return (
          <p> Your house has {house.bedrooms} and {house.bathrooms} bathrooms</p>
        )
      }

    // Destructuring props
      // When you don't know how many properties you will receive, you can use the ...rest operator.
      // Meaning: you can specify the properties you need, and the rest will be stored in an object.
        function Car3({color, brand, ...rest}:{color:string, brand: string, model: string, year: number}) {
          return (
            <h2>My {brand} {rest.model} is {color}!</h2>
          );
        }
      // Defualt values - function Car({color = "blue", brand}) {
        
    // Props children
      // In React, you can send the content between the opening and closing tags of a component, to another component.
      // This can be accessed in the other component using the props.children property.
       
    // React events
      // Just like HTML DOM events, React can perform actions based on user events.
      // React has the same events as HTML: click, change, mouseover etc.
      // React events are written in camelCase and handlers are in {} onClick={shoot}  instead of onclick="shoot()"
        
      function Football(){
        const shoot = (a:string)=>{
          alert(a);
        }

        return (
          <button onClick={()=>shoot("You scored")} style={{ backgroundColor: "blue", color: "white",}}> Click to shoot</button>
        )
      }
      
      // Event object
        // Event handlers have access to the React event that triggered the function.
        
        function Football2(){
          const shoot = (a:string,b:any)=>{
            alert(`${a} -> ${b.type}`)
          }
          return(
            <button onClick={(event)=>{shoot("You shot",event)}}> Click</button>
          )
        }

    // Conditional rendering
      // If Statement
        function MissedGoal() {
          return <h1>MISSED!</h1>;
        }

        function MadeGoal() {
          return <h1>Goal!</h1>;
        }

        function Goal({isGoal}:{isGoal: boolean}){
          if (isGoal){
            return <MadeGoal/>
          } else{
            return <MissedGoal/>
          }
        }

      // Logical && operator
        function Car4(props: any) {
          return (
            <>
              {props.brand && <h1>My car is a {props.brand}!</h1>}
            </>
          );
        }
      
      // Ternary operator - condition ? true : false , example  { isGoal ? <MadeGoal/> : <MissedGoal/> }
        
    // Lists
      function MyCars(){
        const cars = ["Ford", "BMW", "Mercedes"]

        return (
          <>
          <ul>
            {cars.map((car)=><li>{car}</li>)}
          </ul>
          </>
        )
      }
      
      // Keys in lists
        function MyCars1(){
          const cars = [
            {id: 1, brand:"Ford"}, {id:2, brand: "BMW"}, {id:3, brand: "Mercedes"}
          ]

          return (
            <>
            <ul>
              {cars.map((car)=><li key={car.id}>{car.brand}</li>)}
            </ul>
            </>
          )
        }
          // Can also use index as key - cars.map((car, index) => <li key={index}>I am a { car }</li>)}
    
    // Forms
        function MyForm(){
          return (
            <form>
              <label> 
                Enter your name:
                <input type="text"/>
              </label>
            </form>
          )
        }    

      // HTML forms vs React forms
        // In React, form elements like <input>, <textarea>, and <select> work a bit differently from traditional HTML.
        // In standard HTML, form elements maintain their own value based on user input.
        // For example, an <input type="text"> field keeps track of its own value in the HTML DOM.
        // In React, the value of the form element is kept in the component's state property and updated only with the setState() function.
        // In other words; React provides a way to manage form data through component state, leading to what are known as "controlled components."

      // Controlled components
        // In a controlled component, form data is handled by the React component.
        // The value of the input element is driven by the React state, and any changes to that value are managed through event handlers that update the state.
        // When the data is handled by the components, all the data is stored in the component state.
        // We can use the useState Hook to keep track of each input value and provide a "single source of truth" for the entire application.
        // .preventDefault() prevents page refresh on form submission

        function MyForm1(){
          const [name, setName] = useState("");

          function handleChange(e: any){
            setName(e.target.value)
          }

          function handleSubmit(e: any){
            e.preventDefault();
            alert(name);
          }

          return (
            <>
              <form onSubmit={handleSubmit}>
                <label> Enter your name: 
                  <input 
                    type="text" 
                    value={name} 
                    onChange={handleChange}
                    />
                </label>
                <input type="submit"/>
              </form>
              <p>{name}</p>
            </>
          )
        }

    // Textarea
      // Uses value like input, can be used a input
        /* <textarea
              value={mytxt}
              onChange={handleChange}
        */
    
    // Select
        function MyForm2(){
          const [myCar, setMyCar] = useState("Volvo")

          const handleChange=(e: any)=>{
            setMyCar(e.target.value)
          }
          
          return ( 
            <form>
              <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
              </select>
            </form>
          )
        }

    // Multiple input fields
      // When you have multiple controlled input fields in a form, you can manage their state either by:
        // 1. Using a separate useState call for each input.
        // 2. Using a single useState call with an object to hold all form field values.
      // We will use the second approach, as it is more common for forms.
      // Make sure each input field has a unique name attribute.
      // Also, when initializing the state, use an object instead of a string. If the input fields have no initial value, use an empty object.

        function MyForm3() {
          const [inputs, setInputs] = useState({
            firstname:"",
            lastname:""
          });

          const handleChange = (e: any) => {
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({...values, [name]: value})) // Use value inside name variable
          }

          return (
            <form>
              <label>First name:
              <input 
                type="text" 
                name="firstname" 
                value={inputs.firstname} 
                onChange={handleChange}
              />
              </label>
              <label>Last name:
                <input 
                  type="text" 
                  name="lastname" 
                  value={inputs.lastname} 
                  onChange={handleChange}
                />
              </label>
              <p>Current values: {inputs.firstname} {inputs.lastname}</p>
            </form>
          )
        }

    // Checkbox
      // For checkboxes, use the checked attribute instead of value to control its state.
      // We'll use the useState Hook to manage the value of the textarea:
      // In the handleChange function, use the e.target.type property check if the current input is a checkbox or not.

        function MyForm4() {
          const [inputs, setInputs] = useState({
            firstname:" ",
            tomato: false,
            onion: false
          });

          const handleChange = (e: any) => {
            const target = e.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            setInputs(values => ({...values, [name]: value}))
          }

          const handleSubmit = (event: any) => {
            let fillings = '';
            if (inputs.tomato) fillings += 'tomato';
            if (inputs.onion) {
              if (inputs.tomato) fillings += ' and ';
              fillings += 'onion';
            }
            if (fillings == '') fillings = 'no fillings';
            alert(`${inputs.firstname} wants a burger with ${fillings}`);
            event.preventDefault();
          };

          return (
            <form onSubmit={handleSubmit}>
              <label>My name is:
              <input 
                type="text" 
                name="firstname" 
                value={inputs.firstname} 
                onChange={handleChange}
              />
              </label>

              <p>I want a burger with:</p>
              <label>Tomato:
              <input 
                type="checkbox" 
                name="tomato" 
                checked={inputs.tomato} 
                onChange={handleChange}
              />
              </label>
              <label>Onion:
                <input 
                  type="checkbox" 
                  name="onion" 
                  checked={inputs.onion} 
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          )
        }

    // Radio buttons
      // Radio buttons are typically used in groups where only one option can be selected.
      // All radio buttons in a group should share the same name attribute.
      // You control radio buttons based on whether the radio button's value matches the selected value in your state.

      function MyForm5() {
        const [selectedFruit, setSelectedFruit] = useState('banana');

        const handleChange = (event:any) => {
          setSelectedFruit(event.target.value);
        };

        const handleSubmit = (event: any) => {
          alert(`Your favorite fruit is: ${selectedFruit}`);
          event.preventDefault();
        };

        return (
          <form onSubmit={handleSubmit}>
            <p>Select your favorite fruit:</p>
            <label>
              <input 
                type="radio" 
                name="fruit" 
                value="apple" 
                checked={selectedFruit === 'apple'} 
                onChange={handleChange} 
              /> Apple
            </label>
            <br />
            <label>
              <input 
                type="radio" 
                name="fruit" 
                value="banana" 
                checked={selectedFruit === 'banana'} 
                onChange={handleChange} 
              /> Banana
            </label>
            <br />
            <label>
              <input 
                type="radio" 
                name="fruit" 
                value="cherry" 
                checked={selectedFruit === 'cherry'} 
                onChange={handleChange} 
              /> Cherry
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        );
      }

    // Portals
      // React Portals provide a way to render HTML outside the parent component's DOM hierarchy.
      // This is particularly useful for components like modals, tooltips, and dialogs that need to break out of their container's layout.
      // A Portal is a React method that is included in the react-dom package.
      // It is used to render HTML outside the parent component's DOM hierarchy.
      // Normally the returned HTML element is a child of the parent component, and returned like this:

      function Modal ({isOpen, onClose, children}:{isOpen: boolean, onClose: any, children: any}){
          if (!isOpen){
            return null;
          }

          return createPortal(
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px'
              }}>
                {children}
                <button onClick={onClose}>Close</button>
              </div>
            </div>,
            document.body
          );
      }
      
      function MyApp() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <div>
            <h1>My App</h1>
            <button onClick={() => setIsOpen(true)}>
              Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <h2>Modal Content</h2>
              <p>This content is rendered outside the App component!</p>
            </Modal>
          </div>
        );
      }

    // Suspense
      // Suspense is a React feature that lets your components display an alternative HTML while waiting for code or data to load.
      // The most common use cases are:
      // Data fetching with suspense-enabled frameworks
      // Loading components dynamically with React.lazy()

      function App() {
        return (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
            </Suspense>
          </div>
        );
      }

      // lazy() loads a component later.
      // Suspense shows something while waiting.
      // fallback is the loading message/UI.
      // Lazy loading helps the first page load faster.
      // Normal imports load immediately.
      // Lazy imports load only when needed.
      // Lazy components usually need Suspense.
      // Use lazy loading for big components, pages, routes, charts, modals.
      // Do not lazy-load tiny components.
      // Suspense does not load things; it only handles the waiting display.
      // One Suspense component can wrap multiple lazy components
      // Simple idea: lazy = load later, Suspense = waiting area, fallback = what users see while waiting.
      // Lazy example: const Header = lazy(() => import('./Header'));

    // CSS styling
      // 3 Common ways to style Inline styling, CSS stylesheets, CSS Modules
      
      // Inline
        // Inline example:  <h1 style={{color: "red"}}>Hello Style!</h1> ** Two {{because js and style needs object
        // camelCase instead of hypen
        // Can create object and assing to style:{object}

      // CSS stylesheet
        // You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.

      // CSS modules
        // CSS Modules let you write CSS that is scoped locally to a specific component.
        // The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.
        // The CSS file have to have the .module.css extension and can be used by importing it into your React file(s).
          // Composing clsses
            // CSS Modules allow you to combine classes using the composes keyword:
            // Which means that one class can inherit the styles of another class.
            // For the previous example, both the primary and the secondary classes are depending on the styles of the mybutton class.
            // This can be done by adding composes: mybutton to the primary and secondary classes:
          // Global classes
              // When using CSS Modules, the classes in the .module.css file can only be used in the component that imports them. This is done by prefixing the class name with a hash of the file name and a unique identifier. It is safe to use the same class name in different files, as the names will be unique.
              // However, sometimes you want your classes to be available globally, and use them in other components.
              // You can do this with the :global syntax:
              // You can combine global and local classes in the same CSS Module
    
    // CSS in JS
      // CSS-in-JS is a styling technique where you can write CSS directly in your JavaScript code.
      // This approach allows you to:
      // Write CSS using JavaScript
      // Create component-scoped styles
      // Use dynamic styles based on props
      // Avoid CSS class name conflicts

      // Another powerful feature of CSS-in-JS is the ability to use props to make styles dynamic.  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'}; color: white;
      
      // Extending styles
        // Another way of letting multiple elements have the same styles is to extend existing styled components.
        // For example, we can create a PrimaryButton and SuccessButton that both have the same styles as the Button component, but they also have separate background colors:

      // Component scoped styles
        // Just like with CSS Modules, styles created in CSS-in-JS are scoped to the component.
        // They are given unique names and can only be used in the component that imports them.

      // Global styles
        // You can also create global styles, which will be given normal class name and will be available for all components:

    // React router
      // React Router is a library that provides routing capabilities for React applications.

      // Routing means handling navigation between different views.

      // React Router is the standard routing library for React applications. It enables you to:
        // Create multiple pages in your single-page application
        // Handle URL parameters and query strings
        // Manage browser history and navigation
        // Create nested routes and layouts
        // Implement protected routes for authentication
        // Without a router, your React application would be limited to a single page with no way to navigate between different views.
        // INSTALL REACT ROUTER: ******npm install react-router-dom******

        // Nested routes
        // You can have a Route inside another Route, this is called nested routes.
        // Nested routes allow you change parts of the page when you navigate to a new URL, while other parts is not changed or reloaded, almost like having a page within a page.
        // Let's use the example above, and add two new components that will be rendered inside the Products component.

          function Home342(){
            return (
              <>
              <h1> Home Page </h1>
              <MyList/>
              <UserList/>
              <Greeting name="Nicholas" age={23}/>
              <Counter/>
              <FirstScreen/>
              <Car390/>
              <Burger/>
              <Garage/>
              <HouseInfo bedrooms={house.bedrooms} bathrooms={house.bathrooms}/>
              <HouseInfo1 {...house1}/>
              <HouseInfo2 {...house2}/>
              <Car3 brand="Ford" model="Mustang" color="red" year={1969} />
              <Football/>
              <Football2/>
              <Goal isGoal={true}/>
              <Car4 brand="Ford"/>
              <MyCars/>
              <MyCars1/>
              <MyForm/>
              <MyForm1/>
              <MyForm2/>
              <MyForm3/>
              <MyForm4/>
              <MyForm5/>
              <MyApp/>
              <Outlet/>
              <TransitionTest/>
              <App2/>
              <App3/>
              <Timer/>
              <App4/>
              <App5/>
              <App6/>
              <Score/>
              <App7/>
              <WithCallbackExample/>
              <Home/>
              </>
            )
          }

          function Disp(){
            return( <h1> BurgerMan</h1>)
          }

          function App1(){
            return (
              <BrowserRouter>
                <nav> 
                  <Link to="/"> Home</Link> |{" "}
                  <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
                  <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink> |{" "}
                  <NavLink to="/Burger/Nick" style={navLinkStyles}>Burger</NavLink>
                </nav>

                <Routes>
                  <Route path = "/" element={<Home342/>}>
                    <Route path="/about" element={<Disp/>}/>
                  </Route>
                  <Route path="/Burger/:firstname" element={<Info/>}/>
                </Routes>
              </BrowserRouter>
            )
          }
    
      // Style active links
        // There is a special version of the Link component called NavLink that knows whether the link's URL is "active" or not.
        // The NavLink is especially useful for: Navigation menus, Breadcrumbs, Tabs
        // A NavLink is considered active if the current URL matches its to prop.
        // The NavLink component makes it easier to style active links.
          const navLinkStyles = ({ isActive } : {isActive:boolean}) => ({
          color: isActive ? '#007bff' : '#333',
          textDecoration: isActive ? 'none' : 'underline',
          fontWeight: isActive ? 'bold' : 'normal',
          padding: '5px 10px'
          }
        )

      // URL parameters
        // URL parameters are variables that you can add to your route paths. They are often used to pass data between components.
        // In the path http://localhost:5173/customer/Tobias, the URL parameter is Tobias.
        // URL parameters let you create dynamic routes where part of the URL can change. Think of them as variables in your URL.
        // React Router provides the useParams hook to access these parameters in your components.
          function Info() {
          const { firstname } = useParams();
          return <h1>Hello, {firstname}!</h1>;
        }

    // Transitions
        // The useTransition hook helps you keep your React app responsive during heavy updates.
        // It lets you mark some state updates as "non-urgent", allowing other, more urgent updates to happen first.
        // The useTransition hook returns two items:
          // isPending: tells you if a transition is active
          // startTransition: function to mark updates as transitions
        //Use transitions only for non-urgent updates. For example, typing in an input field should be urgent, but filtering a large list can be a transition.

          function SearchResults({ query } : {query: string}) {
            // Simulate slow search results
            const items = [];
            if (query) {
              for (let i = 0; i < 1000; i++) {
                items.push(<li key={i}>Result for {query} - {i}</li>);
              }
            }
            return <ul>{items}</ul>;
          }

          function TransitionTest() {
            const [input, setInput] = useState('');
            const [query, setQuery] = useState('');
            const [isPending, startTransition] = useTransition();

            const handleChange = (e: any) => {
              // Urgent: Update input field
              setInput(e.target.value);
              
              // Non-urgent: Update search results
              startTransition(() => {
                setQuery(e.target.value);
              });
            };

            return (
              <div>
                <input 
                  type="text" 
                  value={input} 
                  onChange={handleChange} 
                  placeholder="Type to search..."
                />
                {isPending && <p>Loading results...</p>}
                <SearchResults query={query} />
              </div>
            );
          }

      // Forward ref
          // forwardRef lets your component pass a reference to one of its children. It's like giving a direct reference to a DOM element inside your component.
          // Common uses for forwardRef:
            // Focusing input elements
            // Triggering animations
            // Measuring DOM elements
            // Integrating with third-party libraries

              const MyInput = forwardRef((props:any, ref:any) => (
                <input ref={ref} {...props} />
              ));

              function App2() {
                const inputRef = useRef<HTMLInputElement>(null);

                const focusInput = () => {
                  inputRef.current?.focus();
                };

                return (
                  <div>
                    <MyInput ref={inputRef} placeholder="Type here..." />
                    <button onClick={focusInput}>Focus Input</button>
                  </div>
                );
              }
                          
      // Higher Order Components (HOC)
        // A Higher Order Component (HOC) is like a wrapper that adds extra features to your React components. Think of it like putting a case on your phone - the case adds new features (like water protection) without changing the phone itself.
        // HOCs are functions that take a component and return an enhanced version of that component.

        // A HOC that adds a border to any component
          function withBorder(WrappedComponent: any) {
            return function NewComponent(props:any) {
              return (
                <div style={{ border: '2px solid blue', padding: '10px' }}>
                  <WrappedComponent {...props} />
                </div>
              );
            };
          }

          // Simple component without border
          function Greeting1({ name }:{name:string}) {
            return <h1>Hello, {name}!</h1>;
          }

          // Create a new component with border
          const GreetingWithBorder = withBorder(Greeting);

          function App3() {
            return (
              <div>
                <Greeting1 name="John" />
                <GreetingWithBorder name="Jane" />
              </div>
            );
          }
        
      // Sass
          // Sass is a CSS pre-processor.
          // Sass files are executed on the server and sends CSS to the browser.
          // Sass adds extra features to CSS like variables, nesting, mixins, and more.

      // ******React Hooks - VERY IMPORTANT******
        // Hooks allow functions to have access to state and other React features without using classes.
        // They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.
        // Hooks allow functions to have access to state and other React features without using classes.
        // They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.
        // You must import Hooks from react.
        // State generally refers to application data or properties that need to be tracked.
        // Hooks can only be called inside React function components.
        // Hooks can only be called at the top level of a component.
        // Hooks cannot be conditional
        // Hooks will not work in React class components.
        // If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

          // useState
            // The React useState Hook allows us to track state in a function component.
            // State generally refers to data or properties that need to be tracking in an application.
            // To use the useState Hook, we first need to import it into our component - import { useState } from "react"; Notice that we are destructuring useState from react as it is a named export.
            
            // We initialize our state by calling useState in our function component.
            // useState accepts an initial state and returns two values: const [color, setColor] = useState("red");
             // The current state.
              // A function that updates the state.

            // We can now include our state anywhere in our component
              // import { useState } from 'react';
              // import { createRoot } from 'react-dom/client';

              /* function FavoriteColor() {
                 const [color, setColor] = useState("red");
                 return <h1>My favorite color is {color}!</h1> 
                */

                // To update our state, we use our state updater function.
                  /* <button
                    type="button"
                    onClick={() => setColor("blue")}
                  >Blue</button> 
                  */

            // The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
            // We could create multiple state Hooks to track individual values.
              // Object example
                // Since we are now tracking a single object: car, we need to reference that object when rendering the component. (Ex: car.brand)
                  /* function MyCar() {
                    const [car, setCar] = useState({
                      brand: "Ford",
                      model: "Mustang",
                      year: "1964",
                      color: "red"
                    });
                  */

            // Objects and arrays in state
              // When state is updated, the entire state gets overwritten.
              // What if we only want to update the color of our car?
              // If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
              // We can use the JavaScript spread operator to help us.
              /*
                const updateColor = () => {
                setCar(previousState => {
                  return { ...previousState, color: "blue" }
                });
                }
              */
              // Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.
              // We then return an object, spreading the previousState and overwriting only the color.

          // useEffect (Run something after render)
            // The useEffect Hook allows you to perform side effects in your components.
            // Some examples of side effects are: FETCHING DATA, directly updating the DOM, and timers.
            // useEffect accepts two arguments. The second argument is optional.
            // useEffect(<function>, <dependency>)
              function Timer() {
                const [count, setCount] = useState(0);

                useEffect(() => {
                  setTimeout(() => {
                    setCount((count) => count + 1);
                  }, 1000);
                });

                return <h1>I've rendered {count} times!</h1>;
              }
            // But wait!! It keeps counting even though it should only count once!
            // useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
            // This is not what we want. There are several ways to control when side effects run
            // We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
              
              /*
              1. No dependency passed:
                useEffect(() => {
                  //Runs on every render
                });

              2. An empty array:
                useEffect(() => {
                  //Runs only on the first render
                }, []);

              3. Props or state values:
                useEffect(() => {
                  //Runs on the first render
                  //And any time any dependency value changes
                }, [prop, state]);
              */

            // Effect cleanup
              // Some effects require cleanup to reduce memory leaks.
              // Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
              // We do this by including a return function at the end of the useEffect Hook.
                /* useEffect(() => {
                  let timer = setTimeout(() => {
                    setCount((count) => count + 1);
                  }, 1000);

                  return () => clearTimeout(timer)
                }, []);
                */

          // useContext
            // React Context is a way to manage state globally.
            // It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

              // State should be held by the highest parent component in the stack that requires access to the state.
              // To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
              // To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
                /*
                  function Component1() {
                    const [user, setUser] = useState("Linus");

                    return (
                      <>
                        <h1>{`Hello ${user}!`}</h1>
                        <Component2 user={user} />
                      </>
                    );
                  }

                  function Component2({ user }) {
                    return (
                      <>
                        <h1>Component 2</h1>
                        <Component3 user={user} />
                      </>
                    );
                  }

                  function Component3({ user }) {
                    return (
                      <>
                        <h1>Component 3</h1>
                        <h2>{`Hello ${user} again!`}</h2>
                      </>
                    );
                  }

                  createRoot(document.getElementById('root')).render(
                    <Component1 />
                  );
                */
                // Even though component 2 did not need the state, it had to pass the state along so that it could reach component 3.
                // The solution is to create context.
                // To create context, you must Import createContext and initialize it:
                // Wrap child components in the Context Provider and supply the state value.
                // In order to use the Context in a child component, we need to access it using the useContext Hook.

                  /*
                    const UserContext = createContext();
                    function Component1() {
                      const [user, setUser] = useState("Linus");

                      return (
                        <UserContext.Provider value={user}>
                          <h1>{`Hello ${user}!`}</h1>
                          <Component2 />
                        </UserContext.Provider>
                      );
                    }

                    function Component2() {
                      return (
                        <>
                          <h1>Component 2</h1>
                          <Component3 />
                        </>
                      );
                    }

                    function Component3() {
                      const user = useContext(UserContext);

                      return (
                        <>
                          <h1>Component 3</h1>
                          <h2>{`Hello ${user} again!`}</h2>
                        </>
                      );
                    }

                    createRoot(document.getElementById('root')).render(
                      <Component1 />
                    );
                  */
          
          // useRef
            // The useRef Hook allows you to persist values between renders.
            // It can be used to store a mutable value that does not cause a re-render when updated.
            // It can be used to access a DOM element directly.
            // If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
            // To avoid this, we can use the useRef Hook.

              function App4() {
              const [inputValue, setInputValue] = useState("");
              const count = useRef(0);

              useEffect(() => {
                count.current = count.current + 1;
              });

              return (
                <>
                  <p>Type in the input field:</p>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <h1>Render Count: {count.current}</h1>
                </>
              );
            }
            
            // useRef() only returns one item. It returns an Object called current.
            // When we initialize useRef we set the initial value: useRef(0).

            // Accessing DOM elements
              // The useRef Hook is often used to access DOM elements directly.
              // First, we create a ref using the useRef Hook: const inputElement = useRef();.
              // Then, we attach the ref to a DOM element using the ref attribute in JSX: <input type="text" ref={inputElement} />.
              // Finally, we can access the DOM element using the current property: inputElement.current.
              // Ref: // NOT LIKE NORMAL ATTRIBUTE - Sets
                function App5() {
                  const inputElement: any = useRef(null);

                  const focusInput = () => {
                    inputElement.current.focus();
                  };

                  return (
                    <>
                      <input type="text" ref={inputElement} /> 
                      <button onClick={focusInput}>Focus Input</button>
                    </>
                  );
                }
                
            // Tracking state changes
              // The useRef Hook can also be used to keep track of previous state values
              // This is because we are able to persist useRef values between renders.
                function App6() {
                  const [inputValue, setInputValue] = useState("");
                  const previousInputValue = useRef("");

                  useEffect(() => {
                    previousInputValue.current = inputValue;
                  }, [inputValue]);

                  return (
                    <>
                    <br></br>
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <h2>Current Value: {inputValue}</h2>
                      <h2>Previous Value: {previousInputValue.current}</h2>
                    </>
                  );
                }

              // This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.
              // In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.

          // useReducer
            // The useReducer Hook is similar to the useState Hook.
            // It allows for custom state logic.
            // If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful
            // useReducer(reducer, initialState, init)
            // The reducer function contains your custom state logic and the initialStatecan be a simple value, but generally will contain an object. The init argument is optional and is used to initialize the state.
            // The useReducer Hook returns the current state and a dispatch method.
                
                const initialScore = [
                  {
                    id: 1,
                    score: 0,
                    name: "John",
                  },
                  {
                    id: 2,
                    score: 0,
                    name: "Sally",
                  },
                ];

                const reducer = (state:any, action:any) => {
                  switch (action.type) {
                    case "INCREASE":
                      return state.map((player:any) => {
                        if (player.id === action.id) {
                          return { ...player, score: player.score + 1 };
                        } else {
                          return player;
                        }
                      });
                    default:
                      return state;
                  }
                };

                function Score() {
                  const [score, dispatch] = useReducer(reducer, initialScore);

                  const handleIncrease = (player:any) => {
                    dispatch({ type: "INCREASE", id: player.id });
                  };

                  return (
                    <>
                      {score.map((player:any) => (
                        <div key={player.id}>
                          <label>
                            <input
                              type="button"
                              onClick={() => handleIncrease(player)}
                              value={player.name}
                            />
                            {player.score}
                          </label>
                        </div>
                      ))}
                    </>
                  );
                }

          // useCallback
            // The useCallback Hook is used to memoize a callback function.
            // Memoizing a function means caching the result of a function so that it does not need to be recalculated.
            // The useCallback function only re-executes when one of its dependencies changes value.
            // This allows us to isolate resource intensive functions so that they will not automatically run on every render.
            // The useCallback and useMemo Hooks are similar:
              // useMemo returns a memoized value.
              // useCallback returns a memorized function.
            // The useCallback Hook accepts two arguments.
              // useCallback(callback, dependencies)
                // callback: The function that you want to memoize.
                // dependencies: An array of dependencies for the callback function. The memoized callback will only change if one of these dependencies has changed.

              // Child component that receives a function prop
              const Button = React.memo(({ onClick, text }:{onClick: any, text: any}) => {
                console.log(`${text} button rendered`);
                return <button onClick={onClick}>{text}</button>;
              });

              // Parent component with useCallback
              function WithCallbackExample() {
                const [count1, setCount1] = useState(0);
                const [count2, setCount2] = useState(0);

                // These functions are memoized and only recreated when dependencies change
                const handleClick1 = useCallback(() => {
                  setCount1(count1 + 1);
                }, [count1]);

                const handleClick2 = useCallback(() => {
                  setCount2(count2 + 1);
                }, [count2]);

                console.log("Parent rendered");
                return (
                  <div>
                    <h2>With useCallback:</h2>
                    <p>Count 1: {count1}</p>
                    <p>Count 2: {count2}</p>
                    <Button onClick={handleClick1} text="Button 1" />
                    <Button onClick={handleClick2} text="Button 2" />
                  </div>
                );
              }

          // useMemo
            // The React useMemo Hook returns a memorized value.
            // The useMemo Hook only runs when one of its dependencies update. This can improve performance.
            // The useMemo and useCallback Hooks are similar:
              // useMemo returns a memoized value.
              // useCallback returns a memoized function.
            // The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
            // In this example, we have an expensive function that runs on every render.
            // When changing the count or adding a todo, you will notice a delay in execution.

            // To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.
            // We can wrap the expensive function call with useMemo.
            // The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
            // In the following example, the expensive function will only run when count is changed and not when todo's are added.

              const App7 = () => {
              const [count, setCount] = useState(0);
              const [todos, setTodos] = useState<string[]>([]);
              const calculation = useMemo(() => expensiveCalculation(count), [count]);

              const increment = () => {
                setCount((c) => c + 1);
              };
              const addTodo = () => {
                setTodos((t) => [...t, "New Todo"]);
              };

              return (
                <div>
                  <div>
                    <h2>My Todos</h2>
                    {todos.map((todo, index) => {
                      return <p key={index}>{todo}</p>;
                    })}
                    <button onClick={addTodo}>Add Todo</button>
                  </div>
                  <hr />
                  <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                    <h2>Expensive Calculation</h2>
                    {calculation}
                  </div>
                </div>
              );
            };

            const expensiveCalculation = (num: any) => {
              console.log("Calculating...");
              for (let i = 0; i < 1000000000; i++) {
                num += 1;
              }
              return num;
            };

          // Custom hooks
            // You can make your own Hooks!
            // When you have components that can be used by multiple components, we can extract that component into a custom Hook.
            // Custom Hooks start with "use". Example: useFetch.
              // Build a hook
                // First, let us make an example without a custom Hook.
                // In the following code, we are fetching data from a URL and displaying it.
                // We will use the JSONPlaceholder service to fetch some fake data.

                  type Todo = {
                    userId: number;
                    id: number;
                    title: string;
                    completed: boolean;
};  

                  const Home = () => {
                  const [data, setData] = useState<Todo[]>([]);

                  useEffect(() => {
                    fetch("https://jsonplaceholder.typicode.com/todos")
                      .then((res) => res.json())
                      .then((data) => setData(data));
                }, []);

                  return (
                    <>
                      {data &&
                        data.map((item:any) => {
                          return <p key={item.id}>{item.title}</p>;
                        })}
                    </>
                  );
                };




createRoot(document.getElementById("sandy")!).render(
  <>
    <App1/>
  </>
);

