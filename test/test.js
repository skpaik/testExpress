var chai = require('chai')
    , chaiHttp = require('chai-http');

chai.use(chaiHttp);

chai.request('http://localhost:3000')
    .get('/')


chai.request('http://localhost:3000')
  .get('/user/1')
  .query({name: 'foo', limit: 10}) // /search?name=foo&limit=10
