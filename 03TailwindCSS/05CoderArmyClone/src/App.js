import React from "react";
import ReactDOM from "react-dom/client"
import Header from "../components/Header";
const AppLayout=()=>{
    return <div>
        <Header/>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)

export default AppLayout;