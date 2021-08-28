import nats, { Message, Stan } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

console.clear();
const stan =  nats.connect('user', randomBytes(4).toString('hex'), {
    url: "http://localhost:4222"
})

stan.on('connect', () => {
     console.log("Listener connected to NATS");
    stan.on('close', () => {
        console.log('NATS connection closed!');
        process.exit();
    })
    const options = stan.subscriptionOptions()
    .setManualAckMode(true); // set that the listener will have to acknowledge the event

     //the second arg. is a queue group, only one listener inside the group will get a published event
     // so if, for example, we have 2 replicas of the same service (listener) and we want only one of them to handle the
     // event, we will use same queue group name in both of them
     const subscription = stan.subscribe(
         'user:created', 
         'user-queue-group', 
         options
    );

     subscription.on('message', (msg: Message) => {
         const data = msg.getData();
         if(typeof data === 'string'){
             console.log(`Received event #${msg.getSequence()}, with data: ${(data)}`)
         }

         msg.ack(); // acknowledge the event
     })
})

// Graceful client shutdown
process.on('SIGINT', () => stan.close()); 
process.on('SIGTERM', () => stan.close());