import React from 'react'
import CardList from './../components/CardList'
import SearchBox from './../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from './../components/ErrorBoundry'
import './App.css'
import { connect } from 'react-redux'
import { setSearchField, requestRobots } from './../actions'
import Header from '../components/Header'

class App extends React.Component{

    componentDidMount(){
        this.props.onRequestRobots()
    }

    render(){
        const { searchField, onSearchChange, robots } = this.props
        // const {robots} = this.state
        const filteredRobots = robots.filter(el => {
            return el.name.toLowerCase().includes(`${searchField.toLocaleLowerCase()}`)
        })

        return (
            <div>
                <div className='tc'>
                    <Header />
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