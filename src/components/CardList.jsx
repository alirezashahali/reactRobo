import React from 'react'
import Card from './Card'
// import { robots } from './robots'

const CardList = ({robots}) => {

    if(robots.length){

        return (
            <div>
                {
                    robots.map(el => (
                        <Card key={el.id} name={el.name} email={el.email} username = {el.username} ></Card>
                        ))
                }
            </div>
        )

    }else{
        return <h1>Loading</h1>
    }
}

export default CardList