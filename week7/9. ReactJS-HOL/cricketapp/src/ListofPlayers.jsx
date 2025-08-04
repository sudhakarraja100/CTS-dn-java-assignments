import React from 'react';

const ListofPlayers = () => {
const players = [
    { name: 'Virat Kohli', score: 100 },
    { name: 'Rohit Sharma', score: 95 },
    { name: 'Shubman Gill', score: 68 },
    { name: 'KL Rahul', score: 75 },
    { name: 'Hardik Pandya', score: 60 },
    { name: 'Ravindra Jadeja', score: 88 },
    { name: 'Rishabh Pant', score: 50 },
    { name: 'Jasprit Bumrah', score: 72 },
    { name: 'Mohammed Siraj', score: 65 },
    { name: 'Yuzvendra Chahal', score: 77 },
    { name: 'Shreyas Iyer', score: 55 }
];

const lowScorers = players.filter(player => player.score < 70);

return (
    <div>
        <h2>All Players</h2>
        {players.map((player, index) => (
            <p key={index}>{player.name} - {player.score}</p>
    ))}

    <h3>Players with Score Below 70</h3>
        {lowScorers.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
    ))}
    </div>
);
};

export default ListofPlayers;
