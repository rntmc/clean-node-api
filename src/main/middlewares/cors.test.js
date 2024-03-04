const request = require('supertest')
const app = require('../config/app')

describe('CORS Middlewaree', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send('')
    })

    const res = await request(app).get('/test_cors')
    expect(res.headers['access-control-allow-origin']).toBe('*')
    expect(res.headers['access-control-allow-method']).toBe('*')
    expect(res.headers['access-control-allow-headers']).toBe('*')
  })
})