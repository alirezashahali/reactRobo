import React from 'react'
import CardList from './../components/CardList'
import SearchBox from './../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from './../components/ErrorBoundry'
// import { searchRobots } from './../reducers'
// import {robots} from './robots'
import './App.css'
import { connect } from 'react-redux'
import { setSearchField, requestRobots } from './../actions'

class App extends React.Component{

    componentDidMount(){
        this.props.onRequestRobots()
    }

    // onSearchChange = (e) => {
    //     this.setState({ searchField: e.target.value })
        
    // }

    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props
        // const {robots} = this.state
        const filteredRobots = robots.filter(el => {
            return el.name.toLowerCase().includes(`${searchField.toLocaleLowerCase()}`)
        })
        if(isPending){
            return <div>Loading</div>
        }else{
            return (
                <div>
                    <div className='tc'>
                        <h1 className='f1'>ROBOFRIENDS</h1>
                        <SearchBox onSearchChange= {onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots} />
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
})

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)