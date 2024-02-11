const News = require('../models/news');

const createNews = async newsData => {

    if (!newsData || !newsData.title || !newsData.description) {
        throw new Error('Missing required properties in newsData');
    }
    return await News.createNews(newsData);
}

const getNewsByMatchId = async matchId => {
    if (!matchId) {
        throw new Error('Missing matchId parameter');
    }
    return await News.getNewsByMatchId(matchId);
}

const getNewsByTourId = async tourId => {
    if (!tourId) {
        throw new Error('Missing matchId parameter');
    }
    return await News.getNewsByTourId(tourId);
}

const getNewsBySportId = async sportId => {
    if (!sportId) {
        throw new Error('Missing matchId parameter');
    }
    return await News.getNewsByTourId(sportId);
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
};
