import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {LOGIN_ROUTE, TRELLO_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({path,Component})=>
                <Route key={path} path={path} Component={Component}/>
            )}
            {publicRoutes.map(({path,Component})=>
                <Route key={path} path={path} Component={Component}/>
            )}
            <Route path='*' element={<Navigate to={TRELLO_ROUTE} replace={true}/>}/>
        </Routes>
    );
};

export default AppRouter;