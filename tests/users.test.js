const mongoose = require('mongoose');
const User = require('../src/models/user');

describe('/users', () => {
  beforeEach((done) => {
    mongoose.connection.dropDatabase(() => {
      done();
    });
  });

  describe('POST /users', () => {
    it('creates a new user to the database', (done) => {
      chai.request(server)
        .post('/users')
        .send({
          firstName: 'Jack',
          lastName: 'Pearsall',
          email: 'jack@jack.com',
          password: '1234',
        })
        .end((error, res) => {
          expect(error).to.equal(null);
          expect(res.status).to.equal(201);

          User.findById(res.body._id, (err, user) => {
            expect(err).to.equal(null);
            expect(user.firstName).to.equal('Jack');
            expect(user.lastName).to.equal('Pearsall');
            expect(user.email).to.equal('jack@jack.com');
            expect(user.password).to.equal('1234');
            // expect(res.body).to.not.have.property('password');
          });

          done();
        });
    });
  });
});
