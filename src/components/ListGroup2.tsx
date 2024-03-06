//import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup2() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook
  //useState is a special function, called a hook,
  //that allows you to add state to a function component.
  //first component is the state variable,
  //second component is the function that updates the state variable.
  //in fact, you are not defining the setSelectedIndex function explicitly.
  //when you need to update the state variable, you call the setSelectedIndex function.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  /*
  if (items.length === 0) return <p>There are no items.</p>;
  // there is not a loop function in react. instead, you can use the map function.
  return (
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  */

  // alternative way to do the same thing

  /*const getMessage = () => {
    return items.length === 0 ? <p>There are no items.</p> : null;
  };
  
  return (
    <>
      <h1>ListGroup</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  */

  // another alternative way to do the same thing
  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>There are no items.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //className="list-group-item active"

            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={() => console.log("clicked")}

            // index below is the zero based index of the item in the array.
            //onClick={() => console.log(item, index)}

            //onClick={(event) => console.log(event)}

            // be careful about the usage of handleClick.
            // handleClick() is a function call.
            // handleClick is a reference to the function.
            //onClick={handleClick}

            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  /*
  Below is an arrow function sample
  () => 
  */

  /*
  {items.length === 0 && <p>There are no items.</p>}
      Above is a way of using the logical AND operator in JSX. see the below samples
      {logical_condition && String} --> if the condition is true, the string will be returned.
      {logical_condition && integer} --> if the condition is true, the integer will be returned.
    */
}

export default ListGroup2;
