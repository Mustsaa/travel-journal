import React from "react"
import Main from "./components/Main"
import data from "./data"

export default function App() {
 
  const dataEl = data.map(x => {
    return <Main
                img={x.imageUrl}
                location={x.location}
                title={x.title}
                date={x.date}
                description={x.description}
                
    
     />
  })
    return (
        <div>
           {dataEl}
        
        </div>
    )
}