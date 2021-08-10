import { PubSub } from 'graphql-subscriptions';
import userService from '../../services/user';
const service = userService();
const pubSub = new PubSub();
module.exports =  {
    query:{
        getUserByUserName: async(root, {userName})=>{
            const res = await service.getUserByUserName(userName);
            return res.payload;
        },
        getUserByEmail: async(root, {email})=>{
            const res = await service.getUserByEmail(email);
            return res.payload;
        },
        getAllUsers: async(root, {name})=>{
            const res = await service.getAllUsers();
            return res.payload;
        }
    },
    mutation:{
        createUser: async(root, {input})=>{
            console.log("inside mutation")
            const res = await service.createUser(input);
            pubSub.publish('USER_CREATED', {userCreated: "user was created!"});
            return res.payload;
        }
    },
    subscription:{
        userCreated:{
            subscribe: ()=> pubSub.asyncIterator('USER_CREATED')
        } 
    }
}