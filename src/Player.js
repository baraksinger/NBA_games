import React from 'react';

const Player = ({id, firstName, lastName, heightFeet, heightInches, weightPounds, position}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <img alt='robots' src={`https://robohash.org/${id}?25x25'`}/>
                <div>{heightFeet} Feet</div>
                <div>{heightInches} Inches</div>
                <div>{weightPounds} Pounds</div>
                <div>position: {position}</div>
            </div>
        </div>

    )
}

export default Player