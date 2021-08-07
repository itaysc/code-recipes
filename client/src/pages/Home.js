import React from 'react';
import { Home } from '../containers';
import store from '../mobx/stores/user';

const HomePage = (props)=>{
    return (
        <Home store={store} {...props}/>
    )
}

export default HomePage;