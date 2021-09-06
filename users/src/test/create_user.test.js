const mongoose = require('mongoose');
const assert = require('assert');
const { User } = require('../mongoose/models');



describe('User model tests', ()=>{ 
    beforeEach((done)=>{
        User.deleteOne({email: 'itayschmidt@gmail.com'})
        .then(()=>done())
    })

    it('saves a user', (done)=>{
        const user = new User({
            userName: "Itay_sc", 
            firstName: "Itay",
            lastName: "Schmidt",
            email: "itayschmidt@gmail.com",
            phone: "972506310538",
            password: "12345678",
            gender: "Male"
        });

        user.save().then(()=>{
            assert(!user.isNew);
            done();
        });
    })

    it('fullName virtual property works', (done)=>{
        const user = new User({
            userName: "Itay_sc", 
            firstName: "Itay",
            lastName: "Schmidt",
            email: "itayschmidt@gmail.com",
            phone: "972506310538",
            password: "12345678",
            gender: "Male"
        });

        user.save().then(()=>{
            assert(user.fullName === user.firstName + ' ' + user.lastName);
            done();
        });
    })
    it('deletes a user', (done)=>{
        User.deleteOne({email: 'itayschmidt@gmail.com'}).then(()=>{
            User.findOne({email: 'itayschmidt@gmail.com'})
            .then(found=>{
                assert(found === null);
                done()
            })
        })
    })

})