import React from 'react'

const Card = (props) => {
    const src = `https://robohash.org/${props.username}?size=200x200`
    const alt = `${props.name}'s photo`
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc ">
            <img src= {src} alt={alt}/>
            <div>
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.email}
                </p>
            </div>
        </div>
    )
}

export default Card