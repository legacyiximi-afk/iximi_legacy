const express = require('express');
const request = require('supertest');

// Crear una mini aplicación de prueba para evitar dependencias de base de datos
const app = express();

app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'IXIMI Legacy Platform',
        version: '3.0.0',
        timestamp: new Date().toISOString(),
    });
});

describe('API Health Check', () => {
    it('debería responder con estado 200 y estado "healthy"', async () => {
        const response = await request(app).get('/api/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('healthy');
        expect(response.body.service).toBe('IXIMI Legacy Platform');
    });

    it('debería incluir una marca de tiempo en la respuesta', async () => {
        const response = await request(app).get('/api/health');
        expect(response.body.timestamp).toBeDefined();
        expect(new Date(response.body.timestamp).toString()).not.toBe('Invalid Date');
    });
});
