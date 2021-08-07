import userService from '../../services/user';
const service = userService();
console.log("*****   ", typeof service)
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
            return res.payload;
        }
    }
}