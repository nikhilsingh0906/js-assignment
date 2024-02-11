const request = require('supertest');
const app = require('../app');
const Tour = require('../controllers/tour');

describe('GET /tour/matches', () => {
    it('should return matches for a given tour name', async () => {

        Tour.getMatchesByTourName = jest.fn().mockResolvedValue([
            { id: 1, name: 'Match 1', tourId: 1, status: true, format: 'Format 1', startTime: '2024-02-10T00:00:00.000Z', endTime: '2024-02-10T01:00:00.000Z' },
            { id: 2, name: 'Match 2', tourId: 1, status: true, format: 'Format 2', startTime: '2024-02-11T00:00:00.000Z', endTime: '2024-02-11T01:00:00.000Z' }
        ]);

        const response = await request(app)
            .get('/tour/matches')
            .query({ name: 'Tour 1' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(2);
        expect(response.body[0]).toHaveProperty('id', 1);
        expect(response.body[1]).toHaveProperty('id', 2);
    });

    it('should handle missing tour name parameter', async () => {
        const response = await request(app).get('/tour/matches');
        expect(response.statusCode).toBe(500); 
    });
});
