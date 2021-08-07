import { User } from '../../mongoose/models';

export default () => {
    return {
        getAllUsers : ()=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    console.log("inside getAllUsers")
                    const users = await User.find({});
                    return resolve({status: 200, payload: users});
                }catch(err){
                    reject({status: 500, payload: err});
                }
            })
        },
        getUserByUserName: (userName)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const user = await User.findOne({userName});
                    return resolve({status: 200, payload: user});
                }catch(err){
                    reject({status: 500, payload: err});
                }
            })
        },
        getUserByEmail: (email)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const user = await User.findOne({email});
                    return resolve({status: 200, payload: user});
                }catch(err){
                    reject({status: 500, payload: err});
                }
            })
        },
        createUser: (user)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    console.log("inside createUser")
                    const dbuser = new User({...user});
                    await dbuser.save();
                    return resolve({status: 200, payload: dbuser});
                }catch(err){
                    console.log(err)
                    reject({status: 500, payload: err});
                }
            })
        }

    };
};
