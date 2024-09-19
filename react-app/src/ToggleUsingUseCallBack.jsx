import React, { useState } from "react";
import ListItems from "./ListItems";

const ToggleUsingUseCallBack = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number + 1, number + 2, number + 3];
  };

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <ListItems getItems={getItems} />
    </div>
  );
};

export default ToggleUsingUseCallBack;
