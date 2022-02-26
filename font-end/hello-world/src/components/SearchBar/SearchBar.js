import React, { useState } from "react"
import "./SearchBar.css";


const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("search")
    const handleInput = (event) => {
        setSearchValue(event.target.value)
    }
    const shouldDisplayButton = searchValue.length > 0
    const handleClear = () => {
        setSearchValue("")
    }
    
  
    const filteredProducts = props.searchItems.filter((product) => {
        return product.includes(searchValue)
    })
    
    return <div>
        <input type="text" value={searchValue} onChange={handleInput}></input> <br></br>
        {shouldDisplayButton && <button onClick={handleClear}>Clear</button>}
        <ul>
        {filteredProducts.map((product) => {
            return <li key={product}>{product}</li>
        })}
         </ul>
    </div>
}

export default SearchBar