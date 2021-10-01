import React from 'react'
import Style from "./Login.module.css"
import useForm from "../Hook/useForm"

function Login() {
    const email = useForm('email')
    const password = useForm('password')
    return (
        <div className={Style.LoginContainer}>

        </div>
    )
}

export default Login
