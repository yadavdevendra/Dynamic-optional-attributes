import { useEffect, useState } from "react";
import { amazon } from "../datafile/amazon";
import { shopify } from "../datafile/shopify";
import Box from "@mui/material/Box";
function ChildComponents({ id, components, handleComponent }) {
  const [firstval, setFirstval] = useState("");
  const [SecondOpt, setSecondOpt] = useState("");
  const [Third, setThird] = useState("");

  useEffect(() => {
    let found = components.find((item) => item.id === id);
    const newVal = { ...found, firstval, SecondOpt, Third };
    let newComponentList = components.map((element) => {
      if (element.id === id) {
        return { ...element, ...newVal };
      }
      return { ...element };
    });
    handleComponent(newComponentList);
  },[firstval, SecondOpt, Third]);

  const disablevalue = (option) => {
    const found = components.find((item) => item.firstval === option);
    if (found) return true;
    else return false;
  };

  function deleteclick() {
    let newComponentList = components.filter((comp) => comp.id !== id);
    handleComponent(newComponentList);
  }

  return (
    <Box className="selectopt">
      <button className="del" onClick={deleteclick}>
        Delete
      </button>
      <Box className="section">
        <Box className="select">
          <p>Amazon Attribute *</p>
          <select
            className="sec"
            onChange={(e) => {
              setFirstval(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Set Amazon Attribute
            </option>
            {Object.keys(amazon).map((data, i) => {
              return (
                <option
                  key={i}
                  value={data}
                  disabled={disablevalue(data) ? true : false}
                >
                  {data}
                </option>
              );
            })}
          </select>
        </Box>
        {firstval && (
          <Box className="select">
            <p>Shopify Attribute</p>
            <select
              className="sec"
              onChange={(e) => setSecondOpt(e.target.value)}
            >
              <option value="" disabled selected>
                Set Shopify Attribute
              </option>
              <option value="custom">Set Custom</option>
              <option value="attribute">Set From Attribute</option>
            </select>
          </Box>
        )}
      </Box>

      {SecondOpt === "attribute" && (
        <Box className="shopify-select">
          <p>Set Shopify Attribute</p>
          <select className="sec" onChange={(e) => setThird(e.target.value)}>
            <option value="" disabled selected>
              Set Shopify Attribute
            </option>
            {shopify.map((item, i) => {
              return (
                <option key={i} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </Box>
      )}

      {SecondOpt === "custom" && (
        <Box className="shopify-select">
          <p>Set Shopify Attribute</p>
          <input
            className="sec"
            type="text"
            placeholder="Set Shopify Attribute"
            onChange={(e) => setThird(e.target.value)}
          />
        </Box>
      )}
    </Box>
  );
}

export default ChildComponents;
