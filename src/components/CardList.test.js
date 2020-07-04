import React from 'react'
import { render } from 'enzyme'
import CardList from './CardList.jsx'

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            username: 'john snow',
            name: 'john',
            email: 'john@john.com'
        }
    ]
    expect(render(<CardList robots= {mockRobots}/>)).toMatchSnapshot()
})

// console.log(shallow(<Card />))