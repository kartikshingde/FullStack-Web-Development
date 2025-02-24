import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement=> ReactElement-JS Object =>HTMLELement(rendering ke baad)

// JSX(transpiled before it reaches to JS Engine)- PARCEL =>use package- Babel(takes js into browser understand js)

// JSX => Babel transpiles it to => React.createElement => ReactElement-JS Object =<HTMLElement(after rendering)


const Title = ()=> (
  <h1 id="heading">
    
    Namaste React Using JSX 🚀
    
  </h1>
);


//  React Functional Component
// Component Composition

const number=10000;
const HeadingComponent = ()=>(
  <div className="container">
    {<h2>the number written in is {number+1000}</h2>}


    {Title()}   
    <Title/> 
    {/*  or it is same as <Title></Title> */}

    <h1 className="heading">Nameste React Functional Component</h1>

  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
