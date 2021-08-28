import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';


console.clear();
const stan = nats.connect('user', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
});

stan.on('connect', () => {
    console.log("Publisher connected to NATS");

    const user = JSON.stringify({
        id: "123",
        firstName: "Itay",
        lastName: "Schmidt"
    })

    stan.publish('user:created', user, () => {
        console.log("Event published!")
    });
})
