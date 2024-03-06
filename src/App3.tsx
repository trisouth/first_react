//import MessageFunction from "./Message";
import ListGroup3 from "./components/ListGroup3";

function App3() {
  /*
    you can use the component as a tag in the JSX code.
    you must always close the function tag. Both of the below are valid.
    <MessageFunction></MessageFunction>
    <MessageFunction /> 
    */

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup3
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App3;
