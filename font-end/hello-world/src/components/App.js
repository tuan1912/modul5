import React,{useEffect, useState} from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import SearchBarWithEffect from "./SearchBarWithEffect/SearchBarWithEffect"


const App = () => {
  const [productState, setProductState] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((productsArray) => {
        const newProductState = productsArray.map((product) => {
          return product.title
        })
        setProductState (newProductState)
    })
    
  },[])
  return (
    <div>
      <CountButton incrementBy={1} buttonColor={"blue"}/>
      <CountButton incrementBy={5} buttonColor={"yellow"}/>
      <SearchBar searchItems = {["products", "drug"]}/>
      <SearchBarWithEffect searchItems = {productState}/>
    </div>
  )
  
  }
export default App  