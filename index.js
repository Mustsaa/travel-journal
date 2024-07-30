import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import App from "./App"

function Page() {
    return (
        <div>
        <Navbar />
        <App />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))