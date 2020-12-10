import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import EmailBg from '../assets/images/email-8.jpg'

const Email = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>Get Access to Exclusive Offers</h1>
                <p>Sign up for newsletter below to get $100 off your first trip!</p>
                <form action='#'>
                    <FormWrap>
                        <label htmlFor='email'>
                        <input type='email' placeholder='Enter your email' id='email' /> 
                        </label>
                        <Button>Sign Up</Button>
                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
    width: 100%;
    height: 450px;
    background: linear-gradient(
        100deg,
        rgba(0,0,0,0.5) 0%, 
        rgba(0,0,0,0.5) 35%, 
        rgba(0,0,0,0.1) 100%
        ), 
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem calc((100vw - 1300px) /2)
`
const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
        font-size: clamp(1rem, 5vw, 2.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    p{
        font-size: clamp(1rem, 2vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    form{
        z-index: 10;
    }
`
const FormWrap = styled.div`
    input{
        width: 250px;
        height: 40px;
        border-radius: 50px;
        border: none;
        outline: none;
        padding: 0 2rem;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        /* padding: 0 1rem; */
        align-items: center;

        input{
            width: 100%;
            margin-bottom: 1rem;
        }
    }
`
