import React from "react";
import ReactDOM from "react-dom/client"

//React.createElement ==> Object ==> HTML Element

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Abin Babu");

//JSX - HTML like or XML like syntax
const JSXHeading = <h1>JSX Heading</h1>

const TitleComponent = () => (<h1>JSX title</h1>)

//component composition
const HeadingComponent2 = () => (
    <div>
        <TitleComponent />
        {TitleComponent()}
        {99676-888}
        <h1>JSX Heading</h1>
    </div>)

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>

    <AppLayout />
</>)


// https://babeljs.io/
// const heading = <h1>Hello</h1>   => JSX Code
//const heading - /*#__PURE__*/React.createElement("h1", null, "Hello") => browser-compatible JavaScript out



// Header
//     Logo 
//     Nav-items 
// Body 
//     Search 
//     Restaurant Container 
//         Restaurant Card 
// Footer 
//     Copyright 
//     Links 
//     Address 
//     Contact




