const mysql = require('../lib/mysql');

//Problem 1: changed query to accept matchId, startTime, tourid

const getAllSportsToursAndMatches = async () => {
    const statement = 'select s.name as sportName, t.name as tourName, m.name as matchName ' +
        'm.id AS matchId, m.startTime, m.format ' +
        'from matches m inner join tours t on m.tourId = t.id ' +
        'inner join sports s on t.sportId = s.id';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches
}