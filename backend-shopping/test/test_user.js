const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');


chai.use(chaiHttp)
chai.should()

let token = '1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiX2lkIjoiNjBkMTkyNmVkNWI4OGQ2MmViZThiMDVhIiwiaWF0IjoxNjI0NTA1MDEwfQ.29lHdr0P_Wl6DERW4wO36AT9XyLe7c-3uThGmnetc0A'
let uri = 'http://localhost:4001/api/v1'
describe('User Test', () => {
    describe("GET /", () => {
        it("should get all user", (done) => {
            chai.request(uri)
                .get('/user/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    const body = res.body
                    // console.log(body)
                    if (err) return done(err);
                    done();
                })
        })
    })

    describe('GET BY ID', (done) => {
        it("should get by id", (done) => {
            chai.request(uri)
            .get(`/user`)
            .set({'Authorization' : `SHOPPINGCART ${token}`})
            .then(( res) => {
                res.should.have.status(200);
                done();
            }).catch((err) => {
                if (err) return done(err);
            })
            done();
        })
    })
})