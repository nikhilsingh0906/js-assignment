const Tour = require('../controllers/tour');

//problem 2 approach: instead of joining the matches table with the tours table to filter matches by tour name, 
//we can directly query the matches table using the tour ID obtained from the tours table. 
//This avoids the need for a join operation and can significantly reduce the query latency.

//add Indexing that can help speed up the database query by allowing for faster data retrieval.

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await Tour.getMatchesByTourName(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}