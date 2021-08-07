import types from './types';

export default (state, action)=>{
    switch(actions.type){
        case types.FETCH_USERS: return {...state, users: action.payload};
    }
}