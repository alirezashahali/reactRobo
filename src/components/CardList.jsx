import React from 'react'
import Card from './Card'
// import { robots } from './robots'

const CardList = ({robots}) => {

    return (
        <div>
            {
                robots.map(el => (
                    <Card key={el.id} name={el.name} email={el.email} username = {el.username} ></Card>
                    ))
            }
        </div>
    )
}

export default CardList