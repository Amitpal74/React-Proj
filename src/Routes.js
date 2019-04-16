import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Containers/Login'

const RoutingComponent = () =>{
    return(
        <switch>
            <Route path="/" component={ Login }></Route>
        </switch>
    )
}

export default RoutingComponent;



