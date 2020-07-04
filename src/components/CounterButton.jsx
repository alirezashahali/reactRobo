import React from 'react'

class CounterButton extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.count !== nextState.count){
            return true
        }else{
            return false
        }
    }

    render(){
        return(
            <div>
                {/* <h1>Hello</h1> */}
                <button id="counter" onClick={
                    () => {
                        this.setState(state => ({ count: state.count + 1 })
                        )
                    }
                }>
                    Count: {this.state.count}
                </button>
            </div>
        )
    }
}

export default CounterButton