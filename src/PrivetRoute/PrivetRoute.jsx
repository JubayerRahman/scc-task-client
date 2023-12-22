import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContent } from '../Authprovider/AuthProvider'

const PrivateRoute = ({children}) => {
    const pathname= useLocation()
    const {user,loading} = useContext(AuthContent)

    if (loading) {
        return <h1>Wait!!</h1>
    }
    if (user==null){
        return <Navigate state={pathname} to="/login"/>
    }
    return children
}

export default PrivateRoute