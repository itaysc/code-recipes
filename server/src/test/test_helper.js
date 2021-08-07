const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { User } = require('../mongoose/models');
// assuming using docker

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true, 
    useUnifiedTopology: true,
  }

before((done)=>{
    mongoose.connect('mongodb://mongo-db:27017/users_test', options);
    mongoose.connection
        .once('open', ()=> done())
        .on('error', (error)=>console.warn('Warning', error));
})

beforeEach((done)=>{
    mongoose.connection.collections.users.drop(()=>{
        done();
    })
})