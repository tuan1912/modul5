import React, { useState } from "react"
import "./SearchBarWithEffect.css";


const SearchBarWithEffect = (props) => {
    const [searchValue, setSearchValue] = useState("search")
    const handleInput = (event) => {
        setSearchValue(event.target.value)
    }
    // useEffect(() => {
    //     const sayHello = searchValue === "hi"
    //     sayHello && alert("hello")
    // }, [searchValue])
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

export default SearchBarWithEffect