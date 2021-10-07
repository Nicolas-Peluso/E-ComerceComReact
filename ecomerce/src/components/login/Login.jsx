import React from 'react'
import { Routes, Route } from "react-router-dom"
import LoginCreate from './LoginCreate'
import Head from '../head/head'

function Login() {
    return (
        <div>
            <Head head="Login" />
            <Routes>
                <Route path="/" element={<LoginCreate />} />
            </Routes>
        </div>
    )
}

export default Login
