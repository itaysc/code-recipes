"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
class Listener {
    constructor(client) {
        this.ackWait = 5 * 1000;
        this.client = client;
    }
    // setting setDeliverAllAvailable + setDurableName + adding a queue group name will make the listener receive all
    // past subscriptions that were not yet acknowledged. this way we will make sure that if we have unhandled event due to 
    // the listener was down, once the listener comes back up the event will be processed.
    subscriptionOptions() {
        return this.client.subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait) // set that the listener will have to acknowledge the event
            .setDurableName(this.queueGroupName);
    }
    listen() {
        /** the second arg. is a queue group, only one listener inside the group will get a published event
            so if, for example, we have 2 replicas of the same service (listener) and we want only one of them to handle the
            event, we will use same queue group name in both of them */
        const subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        subscription.on('message', (msg) => {
            console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);
            const parsedData = this.parseMessage(msg);
            this.onMessage(parsedData, msg);
        });
    }
    parseMessage(msg) {
        const data = msg.getData();
        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8'));
    }
}
exports.Listener = Listener;
