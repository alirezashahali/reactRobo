import React from 'react'
import CounterButton from './CounterButton'

class Header extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        return false
    }

    render(){
        console.log('header')
        return (
            <div>
                <h1 className='f2'>ROBOFRIENDS</h1>
                <CounterButton />
            </div>
        )
    }
}


export default Header