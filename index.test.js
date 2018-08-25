const app = require('./index').app;
const request = require('supertest');
const expect = require('expect');
it('should return hello express', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect(res => {
      expect(res.body.error).toBe('Page not found')
    })
    .end(done);
});

it('should get family', (done) => {
  request(app)
    .get('/family')
    .expect(200)
    .expect(res=>{
      expect(res.body).toInclude({
        name: 'Malkeet',
        address: 'Australia'
      });
      expect(res.body.length).toBe(2);
    })
    .end(done);
});
