import { createRoot } from "react-dom/client";

const myElement = (
  <table>
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
  </table>
)

// ES6
  // Map()
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


 

createRoot(document.getElementById("sandy")!).render(
  <>
    {myElement}
   <MyList/>
   <UserList/>
  </>
);