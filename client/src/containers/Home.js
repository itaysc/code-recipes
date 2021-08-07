import React, {useEffect} from 'react';
import propTypes from 'prop-types';
import { observer, inject  } from 'mobx-react';
import config from '../config';
const Home = observer((props)=>{
    const {users} = props.store;
    useEffect(()=>{
        props.store.getAllUsers();
    }, [props.store])

    return (
        <div>Hello {users.length} </div>
    )
})

Home.propTypes={
    store: propTypes.any
}

export default (Home);