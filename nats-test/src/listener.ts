import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { UserCreatedListener } from './events/user-created-listener';

console.clear();
const stan =  nats.connect('user', randomBytes(4).toString('hex'), { // use random userId, in prod give real userId
    url: "http://localhost:4222"
})

stan.on('connect', () => {
    console.log("Listener connected to NATS");
    stan.on('close', () => {
        console.log('NATS connection closed!');
        process.exit();
    })

    new UserCreatedListener(stan).listen();
})

// Graceful client shutdown
process.on('SIGINT', () => stan.close()); 
process.on('SIGTERM', () => stan.close());

