import React from 'react'
import classes from './SearchBox.module.css'

const SearchBox = ({placeholder, handleChange})=> {
    return(
        <input 
            onChange={handleChange}
            type="search" 
            placeholder={placeholder}
            className={classes.SearchBox} 
        />

    )
}

export default SearchBox