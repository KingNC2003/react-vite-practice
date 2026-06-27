import { createRoot } from "react-dom/client";
import { Children, useState } from "react";
import { createPortal } from "react-dom";
import {name,age} from "./person"
import message from "./message";
import { Suspense } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


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
          </>
        )
      }

      function App1(){
        return (
          <BrowserRouter>
            <nav> 
              <Link to="/"> Home</Link> |{" "}
              <Link to="/about">About</Link> |{" "}
              <Link to="/contact">Contact</Link>
            </nav>

            <Routes>
              <Route path = "/" element={<Home342/>}/>
            </Routes>
          </BrowserRouter>
        )
      }

      // Nested routes
        // You can have a Route inside another Route, this is called nested routes.
        // Nested routes allow you change parts of the page when you navigate to a new URL, while other parts is not changed or reloaded, almost like having a page within a page.
        // Let's use the example above, and add two new components that will be rendered inside the Products component.









        

createRoot(document.getElementById("sandy")!).render(
  <>
    <App1/>
  </>
);

