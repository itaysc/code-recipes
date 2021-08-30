import { Subjects } from './subjects';

export interface UserCreatedEvent {
    subject: Subjects.UserCreated,
    data: {
        firstName: string;
        lastName: string;
        email: string;
    }
}