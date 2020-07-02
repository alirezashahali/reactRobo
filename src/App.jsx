import React from 'react'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll'
// import {robots} from './robots'
import './App.css'

class App extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            robots:[],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({ robots: users })
            })
            .catch(err => console.log(err))
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
        
    }

    render(){
        // let filteredRobots
        // if(this.state.robots.length){
        //     // console.log(this.state.robots)
        //     filteredRobots = this.state.robots.filter(el => {
        //         return el.name.toLowerCase().includes(`${this.state.searchField.toLowerCase()}`)
        //     })
        // }else{
        //     filteredRobots = []
        // }
        const filteredRobots = this.state.robots.filter(el => {
            return el.name.toLowerCase().includes(`${this.state.searchField.toLocaleLowerCase()}`)
        })

        return (
            <div>
                <div className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox onSearchChange= {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            </div>
        )
    }
}

export default App