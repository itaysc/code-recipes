import userRoutes from './userRoutes';
import userService from '../../services/user';

export default (app, middlewares)=>{
    try{
        userRoutes(app, userService(), middlewares);
    }catch(err){
        console.log(err)
    }
}