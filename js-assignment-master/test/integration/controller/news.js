const News = require('../controllers/news');

describe('News Controller', () => {
    describe('createNews', () => {
        it('should create news if all required properties are provided', async () => {
            const newsData = {
                title: 'Test News',
                description: 'This is a test news',
                matchId: 123,
                tourId: 456,
                sportId: 789
            };
            const result = await News.createNews(newsData);
            expect(result).toBeDefined();
        });

        it('should throw error if any required property is missing', async () => {
            const newsData = {
                title: 'Test News'
                // Missing description
            };
            await expect(News.createNews(newsData)).rejects.toThrow('Missing required properties in newsData');
        });
    });

    describe('getNewsByMatchId', () => {
        it('should return news by matchId', async () => {
            const matchId = 123;
            const result = await News.getNewsByMatchId(matchId);
            expect(result).toBeDefined();
        });

        it('should throw error if matchId is missing', async () => {
            const matchId = null;
            await expect(News.getNewsByMatchId(matchId)).rejects.toThrow('Missing matchId parameter');
        });
    });

    describe('getNewsByTourId', () => {
        it('should return news by tourId', async () => {
            const tourId = 456;
            const result = await News.getNewsByTourId(tourId);
            expect(result).toBeDefined();
        });
    
        it('should throw error if tourId is missing', async () => {
            const tourId = null;
            await expect(News.getNewsByTourId(tourId)).rejects.toThrow('Missing tourId parameter');
        });
    });
    
    describe('getNewsBySportId', () => {
        it('should return news by sportId', async () => {
            const sportId = 789;
            const result = await News.getNewsBySportId(sportId);
            expect(result).toBeDefined();
        });
    
        it('should throw error if sportId is missing', async () => {
            const sportId = null;
            await expect(News.getNewsBySportId(sportId)).rejects.toThrow('Missing sportId parameter');
        });
    });
});
