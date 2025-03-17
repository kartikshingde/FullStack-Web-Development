import React from "react"
import ReactDOM from "react-dom/client"

const App=()=>{
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-sm mx-auto bg-amber-500 rounded-xl w-auto md:max-w-2xl">
                <div>Image</div>
                <div>Content</div>
            </div>

        </div>
    )
}

const root =ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)