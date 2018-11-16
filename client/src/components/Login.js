import React from 'react'
import {login} from '../fakeAuth'

const Login = ({ history }) => (
    <>
        <h3>Login</h3>
        <button
            onClick={ () => {
                login()
                history.push('/dashboard')
            }}>
            Login
        </button>
    </>
)

export default Login