const request = require('supertest')
const app = require('./app')

describe('Get romannmeral', () => {
  test("It should return roman numeral if one is provided in query", done => {
    request(app)
      .get("/romannumeral?query=1")
      .then(response => {
        expect(response.statusCode).toEqual(200)
        expect(response.text).toBe('I');
        done();
      });
  });
  test("It should return bad request if no query param", done => {
    request(app)
      .get("/romannumeral")
      .then(response => {
        expect(response.statusCode).toEqual(400)
        expect(response.text).toBe('query paramater needs to be an integer greater than 0 and less than 2200000000');
        done();
      });
  });
  test("It should return 404 if not hitting romannumeral endpoint", done => {
    request(app)
      .get("/notHere")
      .then(response => {
        expect(response.statusCode).toEqual(404)
        done();
      });
  });
  test("It should return 400 if NaN is Provided", done => {
    request(app)
      .get("/romannumeral?query=\"not a number\"")
      .then(response => {
        expect(response.statusCode).toEqual(400)
        expect(response.text).toBe('query paramater needs to be an integer greater than 0 and less than 2200000000');
        done();
      });
  });
})
