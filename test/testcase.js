const chai = require('chai');
const mocha = require('mocha');
const { describe, it } = mocha;
const server = require('../server.js');
const UserManagement =
    require('../routes/userManagement');
const { testdata } = require('./testdata.json');//Here need to provide json file  to test
// Assertion style
chai.should();
chai.use(chaiHttp);
describe(' SERVICE API', () => {
    it(' service CASE 1 - Controller success case',
        (done) => {
            sinon.stub(UserManagement,
                'user').resolves({ status: 200, error: 'SUCCESS', utmResponse: 'SUCCESS' });
            chai
                .request(server)
                .post('/user')
                .send(testdata.UserValidData)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it(' service CASE 1 - Controller failure case',
        (done) => {
            sinon.stub(UserManagement,
                'user').resolves({ status: 400, error: 'failure', utmResponse: 'Failure' });
            chai
                .request(server)
                .post('/user')
                .send(testdata.UserValidData)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

       
   
});