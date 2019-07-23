import React from 'react';
import Player from "./Player";

const TeamList = ({team, players}) => {
    return (
        <div>
            <div>{`here is the list of players in ${team}:`}</div><br></br>
            {
                players.map((player) => {
                    return (<Player
                        key={player.id}
                        id={player.id}
                        firstName={player.first_name}
                        lastName={player.last_name}
                        heightFeet={player.height_feet}
                        heightInches={player.height_inches}
                        weightPounds={player.weight_pounds}
                        position={player.position}
                    />)
                })
            }
        </div>

    )
}

export default TeamList