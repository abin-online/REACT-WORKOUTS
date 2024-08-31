// const heading = React.createElement("h1", {id:"heading"}, "Hello World")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// console.log(heading); //heading
imo;
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("h2", {
        id: "child1"
    }, "This is H2"),
    React.createElement("h1", {
        id: "child2"
    }, "This is H1")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=react.6bd02f5a.js.map
