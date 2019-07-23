import React from 'react';

const Game = ({date, homeTeamId, homeTeamName, homeTeamScore, visitorTeamId, visitorTeamName, visitorTeamScore, loadPlayers}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <div>{date}</div>
                <img alt='robots' src={`https://robohash.org/${homeTeamId}?25x25'`}/>
                <img alt='robots' src={`https://robohash.org/${visitorTeamId}?25x25'`}/>
                <br></br>
                <nav style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <p
                        onClick={() => loadPlayers(homeTeamId, homeTeamName)}
                        className='f3 link dim black underline pa3 pointer'> {homeTeamName}
                    </p>
                    <p>VS</p>
                    <p
                        onClick={() => loadPlayers(visitorTeamId, visitorTeamName)}
                        className='f3 link dim black underline pa3 pointer'>{visitorTeamName}
                    </p>
                </nav>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <p>{homeTeamScore}</p>
                    <p>:</p>
                    <p>{visitorTeamScore}</p>
                </div>
            </div>
        </div>

    )
}

export default Game