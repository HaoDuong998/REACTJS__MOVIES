import React from 'react';
import Lottie from 'react-lottie';
import * as loginAnimation from './../../assets/animation/loginAnimation.json'
const LoginAnimation = () => {
    const defaultOptions = {
        //animation lặp lại vô tận
        loop: true,
        //animation tự động chạy
        autoplay: true,
        //animation muốn chạy
        animationData: loginAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Lottie options={defaultOptions}
            height={400}
            width={400}
        // isStopped={this.state.isStopped}
        // isPaused={this.state.isPaused} 
        />
    )
}

export default LoginAnimation