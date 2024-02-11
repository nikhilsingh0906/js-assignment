const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }

    // Retrieve the tour ID by name
    const tour = await Tour.getTourByName(name);
    if (!tour) {
        return []; // Tour not found, return empty array
    }

    // Query database for matches by tour ID
    return await Tour.getMatchesByTourId(tour.id);

}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}