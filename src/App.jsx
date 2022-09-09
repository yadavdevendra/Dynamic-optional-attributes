import { Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ChildComponents from "./components/ChildComponents";

function App() {
  const [components, setComponents] = useState([]);
  const handleComponent = (data) => {
    setComponents(data);
  };

  const handleClick = () => {
    const id = Math.floor(Math.random() * 9999999999999);
    setComponents([
      ...components,
      {
        id,
        ChildComponents,
        firstval: "",
        SecondOpt: "",
        Third: "",
      },
    ]);
  };

  console.log(components);

  return (
    <div className="App">
      <div className="title">
        <Typography>Optional Attributes</Typography>
        <button onClick={handleClick}>Add Attribute</button>
      </div>
      {components.length <= 0 && (
        <div className="sms">
          Please click add attribute to show dropdowns without click can't show
          anything
        </div>
      )}
      {components.map((item) => {
        return (
          <item.ChildComponents
            key={item.id}
            id={item.id}
            components={components}
            handleComponent={handleComponent}
          />
        );
      })}
    </div>
  );
}

export default App;
