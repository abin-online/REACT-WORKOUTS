import React, { useEffect, useMemo, useState } from 'react';

const ToggleUsingNoMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const doubleNumber = useMemo(()=> {
  //   return slowFunction(number)
  // },[number])

  const [doubleNumber , setDoubleNumber ] = useState()

  useEffect(()=> {
    setDoubleNumber(slowFunction(number))
  } , [number])

  const themeStyle = useMemo(()=> {
      return  {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
      };
  },[dark])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <h3 style={themeStyle}>{doubleNumber}</h3>
    </div>
  );
};

export default ToggleUsingNoMemo;

function slowFunction(num) {
  console.log('Calling slow function...');
  for (let i = 0; i < 1000000000; i++) {} // Simulating a slow calculation
  return num * 2;
}
