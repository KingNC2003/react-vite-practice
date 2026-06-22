import { createRoot } from "react-dom/client";
import { useState } from "react";
import {name,age} from "./person"
import message from "./message";

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

          



createRoot(document.getElementById("sandy")!).render(
  <>
    {myElement}
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
  </>
);

