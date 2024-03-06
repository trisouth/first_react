import { useState } from "react";
import Alerts from "./components/Alerts";
import Button from "./components/Button";

const App4 = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {/*
      below method is not efficent when you want to pass a large text or even
      html code 
      <Alerts text="Utku Guney" /> 
      
      <Alerts>Utku Guney</Alerts>
      <Button onClick={() => console.log("clicked")}>My Button</Button>
      */}
      {alertVisible && (
        <Alerts onClose={() => setAlertVisible(false)}>Utku Guney</Alerts>
      )}
      {<Button onClick={() => setAlertVisible(true)}>Show Alert</Button>}
    </div>
  );
};

export default App4;
