import React from 'react';

const IndianPlayers = () => {
const allPlayers = ['Virat', 'Rohit', 'Gill', 'Rahul', 'Hardik', 'Pant'];

const oddPlayers = allPlayers.filter((_, i) => i % 2 !== 0);
const evenPlayers = allPlayers.filter((_, i) => i % 2 === 0);

const T20players = ['Surya', 'Arshdeep', 'Tilak'];
const RanjiTrophy = ['Jaiswal', 'Sarfaraz', 'Abhimanyu'];

const mergedPlayers = [...T20players, ...RanjiTrophy];

return (
    <div>
        <h2>Odd Team Players</h2>
        {oddPlayers.map((p, i) => <p key={i}>{p}</p>)}

        <h2>Even Team Players</h2>
        {evenPlayers.map((p, i) => <p key={i}>{p}</p>)}

        <h2>Merged Players (T20 + Ranji)</h2>
        {mergedPlayers.map((p, i) => <p key={i}>{p}</p>)}
    </div>
);
};

export default IndianPlayers;
