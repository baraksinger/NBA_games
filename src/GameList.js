import React from 'react';
import Game from "./Game";

const GameList = ({games, loadPlayers}) => {
    return (
        <div>
            <div>{'here is the list of all NBA games:'}</div><br></br>
            {
                games.map((game) => {
                    return (<Game
                        key={game.id}
                        date={game.date}
                        homeTeamId={game.home_team.id}
                        homeTeamName={game.home_team.name}
                        homeTeamScore={game.home_team_score}
                        visitorTeamId={game.visitor_team.id}
                        visitorTeamName={game.visitor_team.name}
                        visitorTeamScore={game.visitor_team_score}
                        loadPlayers={loadPlayers}
                    />)
                })
            }
        </div>

    )
}

export default GameList