const request = require('supertest');
const express = require('express');
const app = express();
const NewsRoutes = require('../routes/news');

app.use(express.json());
NewsRoutes(app);

describe('News Routes', () => {
    it('POST /news/create should create news if all required properties are provided', async () => {
        const newsData = {
            title: 'Test News',
            description: 'This is a test news',
            matchId: 123,
            tourId: 456,
            sportId: 789
        };
        const res = await request(app)
            .post('/news/create')
            .send(newsData);
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    it('POST /news/create should return error if any required property is missing', async () => {
        const newsData = {
            title: 'Test News'
            // Missing description
        };
        const res = await request(app)
            .post('/news/create')
            .send(newsData);
        expect(res.status).toBe(500); // Assuming the server returns 500 status for missing properties
    });

    it('GET /news/match/:matchId should return news by matchId', async () => {
        const matchId = 123;
        const res = await request(app).get(`/news/match/${matchId}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    it('GET /news/match/:matchId should return error if matchId is missing', async () => {
        const matchId = null;
        const res = await request(app).get(`/news/match/${matchId}`);
        expect(res.status).toBe(500); // Assuming the server returns 500 status for missing matchId
    });

    it('GET /news/tour/:tourId should return news by tourId', async () => {
        const tourId = 456;
        const res = await request(app).get(`/news/tour/${tourId}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    it('GET /news/tour/:tourId should return error if tourId is missing', async () => {
        const tourId = null;
        const res = await request(app).get(`/news/tour/${tourId}`);
        expect(res.status).toBe(500); // Assuming the server returns 500 status for missing tourId
    });

    it('GET /news/sport/:sportId should return news by sportId', async () => {
        const sportId = 789;
        const res = await request(app).get(`/news/sport/${sportId}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
       
    });

    it('GET /news/sport/:sportId should return error if sportId is missing', async () => {
        const sportId = null;
        const res = await request(app).get(`/news/sport/${sportId}`);
        expect(res.status).toBe(500); // Assuming the server returns 500 status for missing sportId
    });
});
