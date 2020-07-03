import React from 'react'

class Header extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        return false
    }

    render(){
        console.log('header')
        return <h1 className='f2'>ROBOFRIENDS</h1>
    }
}


export default Header