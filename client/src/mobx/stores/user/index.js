import { computed, observable, runInAction, action } from 'mobx';
import UserService from './service';
class UserStore{
    constructor(){
        this.service = new UserService();
    }
    @observable users = [];
    @observable filter ="";
    @computed get filteredUsers(){
        return this.users.filter(u=>!this.filter || u.indexOf(this.filter) > -1);
    }

    test(){
        this.users=["aaa", "bbb"]
    }
    async getAllUsers(){
        const users = await this.service.getAllUsers();
        runInAction(()=>{
           return this.users = users;
        })
    }
}


const store = new UserStore;

export default store;

