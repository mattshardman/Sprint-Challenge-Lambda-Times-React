import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.7);
`

const LoginBox = styled.div`
    height: 400px;
    width: 400px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    box-shadow: 0 3px 35px rgba(0,0,0,0.5);
`;

const Header = styled.h1`
    font-size: 30px;
    margin: 0;
`;

const Form = styled.form`
    margin-top: 40px;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Input = styled.input`
    width: 80%;
    height: 40px;
    background: #fafafa;
    border: 1px solid #ddd;
    outline: none;
    padding: 0 10px;
    :focus {
        border: 1px solid #000;
    }
`;

const Button = styled.button`
    width: 80%;
    height: 40px;
    background: #3897f0;
    color: #fff;
    font-size: 14px;
    border: none;
    cursor: pointer;
`

const LoginModal = ({logIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <LoginWrapper>
            <LoginBox>
                <Header>Lambda Times Login</Header>

                <Form onSubmit={(e) => logIn(e, username, password)}>
                    <Input 
                        type="text" 
                        placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <Button>Log In</Button>
                </Form>
            </LoginBox>
        </LoginWrapper>
    )
}

LoginModal.propTypes = {
    logIn: PropTypes.func.isRequired,
}

export default LoginModal;