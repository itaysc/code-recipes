import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';
import { UserCreatedEvent } from './user-created-event';
import { Subjects } from './subjects';
export class UserCreatedListener extends Listener<UserCreatedEvent> {
    readonly subject: Subjects.UserCreated = Subjects.UserCreated;
    queueGroupName = "user-service";

    onMessage(data: UserCreatedEvent['data'], msg: Message) {
        console.log('Received data: ', data);
        msg.ack();
    }
}