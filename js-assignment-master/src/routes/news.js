const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news/create').post(async (req, res, next) => {
        try {
            return res.json(await News.createNews(req.body));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:matchId').get(async (req, res, next) => {
        try {
            const matchId = req.params.matchId;
            return res.json(await News.getNewsByMatchId(matchId));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/:tourId').get(async (req, res, next) => {
        try {
            const tourId = req.params.tourId;
            return res.json(await News.getNewsByTourId(tourId));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport/:sportId').get(async (req, res, next) => {
        try {
            const sportId = req.params.sportId;
            return res.json(await News.getNewsBySportId(sportId));
        } catch (err) {
            return next(err);
        }
    });
};
