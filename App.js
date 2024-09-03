import React from "react";
import ReactDOM from "react-dom/client"

import './index.css'

import Header from './src/component/Header'
import Body from "./src/component/Body";

import CounterApp from "./src/component/CounterApp";
import AutoIncrementCounter from "./src/component/AutoIncrement";



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)