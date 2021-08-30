import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { UserCreatedPublisher } from './events/user-created-publisher';

console.clear();
const stan = nats.connect('user', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
});

stan.on('connect', async () => {
    console.log("Publisher connected to NATS");
    const publisher = new UserCreatedPublisher(stan);
    try{
        await publisher.publish({
            firstName: "Itay",
            lastName: "Schmidt",
            email: "Itay@gmail.com",
        })
    }catch(err){
        console.log(err);
    }
})
