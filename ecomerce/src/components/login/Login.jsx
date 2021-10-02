import React from 'react'
import { Routes, Route } from "react-router-dom"
import LoginCreate from './LoginCreate'

function Login() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginCreate />} />
            </Routes>
        </div>
    )
}

export default Login
