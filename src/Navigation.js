import React from 'react';

const Navigation = ({onRouteChange, route}) => {
    if(route === 'team') {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end', height: '50px'}}>
                <p
                    onClick={() => onRouteChange('games')}
                    className='f3 link dim black underline pa3 pointer'>Back to all games
                </p>
            </nav>
        );
    }
    else {
        return (
            <div>
            </div>
        )
    }
}

export default Navigation;