import ReactDOM from "react-dom/client"
import React from "react";

const App=()=>{

    return (
        <div className="grid">
            <div className="min-h-[100px] rounded-lg shadow bg-orange-500"></div>
            <div className="min-h-[100px] rounded-lg shadow bg-teal-500"></div>
        </div>
    )

}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

export default App;