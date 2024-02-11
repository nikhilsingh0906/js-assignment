const mysql = require('../lib/mysql');

const createNews = async (title, description, matchId, tourId, sportId) => {
    const statement = 'insert into news (title, description, matchId, tourId, sportId) values (?, ?, ?, ?, ?)';
    const parameters = [title, description, matchId, tourId, sportId];
    const [result] = await mysql.query(statement, parameters);
    return { id: result.insertId, title, description, matchId, tourId, sportId };
};

const getNewsByMatchId = async matchId => {
    const statement = 'select * from news where matchId = ?';
    const parameters = [matchId];
    return await mysql.query(statement, parameters);
};

const getNewsByTourId = async tourId => {
    const statement = 'select * from news where tourId = ?';
    const parameters = [tourId];
    return await mysql.query(statement, parameters);
};

const getNewsBySportId = async sportId => {
    const statement = 'select * from news where sportId = ?';
    const parameters = [sportId];
    return await mysql.query(statement, parameters);
};

module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
};
