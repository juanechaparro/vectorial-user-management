import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'


export const PrivateRoute = ({children}) => {
    const {admin} = useContext(AuthContext);
    return admin.uid ? children : <Navigate to = "/login"/>
}
