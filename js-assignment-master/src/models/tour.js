const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

//removing because we are fetching by id now, not by name

// const getMatchesByTourName = async params => {
//     const statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.name = ?';
//     const parameters = [ params.name ];
//     return await mysql.query(statement, parameters);
// }

const getTourByName = async name => {
    const statement = 'SELECT * FROM tours WHERE name = ? LIMIT 1;';
    const parameters = [name];
    const [tour] = await mysql.query(statement, parameters);
    return tour;
}

const getMatchesByTourId = async tourId => {
    const statement = 'SELECT * FROM matches WHERE tourId = ?;';
    const parameters = [tourId];
    return await mysql.query(statement, parameters);
}


module.exports = {
    getAllTours: getAllTours,
    getTourByName: getTourByName,
    getMatchesByTourId: getMatchesByTourId
}