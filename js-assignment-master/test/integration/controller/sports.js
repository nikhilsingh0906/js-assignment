const Tour = require('../controllers/tour');
const models = require('../models/tour');

describe('getAllSportsToursAndMatches', () => {
    it('should return all sports, tours, and matches', async () => {
        
        models.getAllSportsToursAndMatches = jest.fn().mockResolvedValue([
            { sportName: 'Cricket', tourName: 'Tour 1', matchName: 'Match 1', matchId: 1, startTime: '2024-02-10T00:00:00.000Z', format: 'T20' },
            { sportName: 'Cricket', tourName: 'Tour 1', matchName: 'Match 2', matchId: 2, startTime: '2024-02-11T00:00:00.000Z', format: 'T20' },
            { sportName: 'Football', tourName: 'Tour 2', matchName: 'Match 3', matchId: 3, startTime: '2024-02-12T00:00:00.000Z', format: 'Soccer' }
        ]);

        const result = await Tour.getAllSportsToursAndMatches();
        expect(result).toEqual({
            Cricket: {
                'Tour 1': [
                    { matchName: 'Match 1', matchId: 1, startTime: '2024-02-10T00:00:00.000Z', format: 'T20' },
                    { matchName: 'Match 2', matchId: 2, startTime: '2024-02-11T00:00:00.000Z', format: 'T20' }
                ]
            },
            Football: {
                'Tour 2': [
                    { matchName: 'Match 3', matchId: 3, startTime: '2024-02-12T00:00:00.000Z', format: 'Soccer' }
                ]
            }
        });
    });

    it('should return empty object if no matches found', async () => {
        // Mock the model function to return empty array
        models.getAllSportsToursAndMatches = jest.fn().mockResolvedValue([]);

        const result = await Tour.getAllSportsToursAndMatches();
        expect(result).toEqual({});
    });
});
