import React from 'react'
import { shallow, render } from 'enzyme'
import Card from './Card.jsx'

it('expect to render Card component', () => {
    // console.log(<Card />)
    // expect(shallow(<Card />).length).toEqual(1)
    expect(render(<Card />)).toMatchSnapshot()
})

// console.log(shallow(<Card />))