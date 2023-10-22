import React from 'react'
import LoginAnimation from '../../Components/LoginAnimation/LoginAnimation'
import LoginForm from '../../Components/LoginForm/LoginForm'

const Login = () => {
    return (
        <div className='grid grid-cols-2 h-screen dark:bg-gray-900'>
            <div className='layout_animation flex justify-center items-center'>
                <LoginAnimation />
            </div>
            <div className='layout_loginForm'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login