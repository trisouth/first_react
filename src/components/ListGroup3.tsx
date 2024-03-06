// how to pass parameters to a component

import { useState } from "react";

// { items: [], heading: string }

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // capture the selected item and no need to return anything.
}

/*
if you prefer the below format, you dont need to prefix the items and heading with props.
function ListGroup3({ items, heading }: Props) {
  return (
    <div>
      <h1>{heading}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
*/

function ListGroup3(props: Props) {
  /*
in different scenarios, what will be the next action of clicking a list item varies.
you can filter some other objects based on the selected item. or you can redirect
to another page. or you can just log the selected item to the console.

in order to handle different requirements, you can pass a function as a parameter to the component.
that function doesnt need to be a selected item handler, it can be anything based on the
requirements.
*/

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>There are no items.</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup3;
