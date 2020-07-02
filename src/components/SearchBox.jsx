import React from 'react'

const SearchBox = ({onSearchChange}) => {
    // function onChange(e){
    //     return onSearchChange(e.target.value)
    // }
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
            type='search' placeholder="search robots" onChange={onSearchChange}></input>
        </div>
        )
}

export default SearchBox