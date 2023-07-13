import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement gives a ReactElement which is a JS Object ==> HTMLElement(render)
// const heading = React.createElement(
// "h1",
// {id:"heading"},
// "Gayusuryu"
// );

// console.log("heading",heading);

const elem = <span>GS </span>;

//JSX (JS syntax) is not html inside js.It is HTML like or XML like syntax
//React Element
const jsxHeadingTitle = (<h1 id="heading" className="head">
    {elem}
    Gayusuryu in JSX</h1>
);

//To insert react element to react component put a { } and insert the variable inside that.
// We can say this as also writing js inside jsx/html 

//React Functional component
const TitleComponent = () =>{
    return <h1>Gayusuryu title functional component</h1>
};

//React Functional component
// const HeadingComponent = () =>{
// return <h1>Gayusuryu heading functional component</h1>
// };
//We can ignore {} and return if there is only one line
// const Fn = () => true;

//Component composition ==> When we insert one component into another
const HeadingComponent = () =>(
    <div id="heading">
    {jsxHeadingTitle}
    <TitleComponent/>
    {<TitleComponent></TitleComponent>}
    {TitleComponent()}
    <h1>Gayusuryu heading functional component</h1>
    </div>
);

//React.Fragment = behaves like an empty tag
const HeadingComponent2 = () =>(

    // <React.Fragment>
    // <div id="heading">
    // {jsxHeadingTitle}
    // <TitleComponent/>
    // <h1>Gayusuryu heading functional component 1</h1>
    // </div>

    // <div id="heading2">
    // <TitleComponent/>
    // <h2>Gayusuryu heading functional component 2</h2>
    // </div>
    // </React.Fragment>

    <>
    <div id="heading">
    {jsxHeadingTitle}
    <TitleComponent/>
    <h1>Gayusuryu heading functional component 1</h1>
    </div>

    <div id="heading2">
    <TitleComponent/>
    <h2>Gayusuryu heading functional component 2</h2>
    </div>
    </>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("jsxHeadingTitle",jsxHeadingTitle);

// root.render(heading); 

root.render(jsxHeadingTitle);  //This is how you render react element
root.render(<HeadingComponent/>); //This is how you render React component

