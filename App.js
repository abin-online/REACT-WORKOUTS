// const heading = React.createElement("h1", {id:"heading"}, "Hello World")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// console.log(heading); //heading

import React from "react";
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div", {id:"parent"} ,[
                React.createElement("h2", {id:"child1"} ,"Eda Mone" ),
                React.createElement("h1", {id:"child2"} ,"This is H1" )
            ])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



