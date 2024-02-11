const Tour = require('../controllers/tour');
const models = require('../models/tour');

describe('getAllTours', () => {
    it('should return all tours', async () => {

        models.getAllTours = jest.fn().mockResolvedValue([
            { id: 1, name: 'Tour 1', sportId: 1, status: true, startTime: '2024-02-10T00:00:00.000Z', endTime: '2024-02-10T01:00:00.000Z' },
            { id: 2, name: 'Tour 2', sportId: 2, status: true, startTime: '2024-02-11T00:00:00.000Z', endTime: '2024-02-11T01:00:00.000Z' }
        ]);

        const result = await Tour.getAllTours();
        expect(result).toHaveLength(2);
        expect(result[0]).toHaveProperty('id', 1);
        expect(result[1]).toHaveProperty('id', 2);
    });
});

describe('getMatchesByTourName', () => {
    it('should return matches for a given tour name', async () => {

        models.getTourByName = jest.fn().mockResolvedValue({ id: 1 });
        models.getMatchesByTourId = jest.fn().mockResolvedValue([
            { id: 1, name: 'Match 1', tourId: 1, status: true, format: 'Format 1', startTime: '2024-02-10T00:00:00.000Z', endTime: '2024-02-10T01:00:00.000Z' },
            { id: 2, name: 'Match 2', tourId: 1, status: true, format: 'Format 2', startTime: '2024-02-11T00:00:00.000Z', endTime: '2024-02-11T01:00:00.000Z' }
        ]);

        const result = await Tour.getMatchesByTourName({ name: 'Tour 1' });
        expect(result).toHaveLength(2);
        expect(result[0]).toHaveProperty('id', 1);
        expect(result[1]).toHaveProperty('id', 2);
    });

    it('should throw an error for missing tour name parameter', async () => {
        await expect(Tour.getMatchesByTourName({})).rejects.toThrow('Missing required parameter: name');
    });
});
