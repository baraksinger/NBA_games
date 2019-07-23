import React, { Component } from 'react';
import './App.css';
import GameList from "./GameList";
import TeamList from "./TeamList";
import Navigation from "./Navigation";
import 'tachyons'

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'games',
            games: [],
            players: [],
            selectedTeam: '',
            selectedPlayers: []
        }
    }

    componentDidMount() {
        fetch('https://free-nba.p.rapidapi.com/games', {
            headers: {
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
                'X-RapidAPI-Key': 'dda178f833mshf4f9b983babcd01p15a237jsnce1388b626e3',
            }
        })
        .then(response => response.json())
        .then(games => this.setState({games: games.data}))
        fetch('https://free-nba.p.rapidapi.com/players', {
            headers: {
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
                'X-RapidAPI-Key': 'dda178f833mshf4f9b983babcd01p15a237jsnce1388b626e3',
            }
        })
        .then(response => response.json())
        .then(players => {
            this.setState({players: players.data})
        })
    }

    onRouteChange = (route) => {
        this.setState({route})
    }

    loadPlayers = (teamId, teamName) => {
        let selectedPlayers = this.state.players.filter(player => player.team.id === teamId );
        this.setState({
            selectedTeam: teamName,
            selectedPlayers: selectedPlayers,
            route: 'team'
        });
    }

    render() {
        const {games, selectedTeam, selectedPlayers, route} = this.state;
        return (
            <div className="App">
                <Navigation onRouteChange={this.onRouteChange} route={route}/>
                {route === 'games' && (
                    <GameList
                        games={games}
                        loadPlayers={this.loadPlayers}
                    />
                )}
                {route === 'team' && (
                    <TeamList
                        team={selectedTeam}
                        players={selectedPlayers}
                    />
                )}
            </div>
        );
    }
}

export default App;
