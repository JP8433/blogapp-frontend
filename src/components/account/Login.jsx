import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    border-radius:8px
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    height:80%;
    border-radius: 20px;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: black;
    color: #fff;
    height: 48px;
    border-radius: 20px;
    &:hover {
        background-color: #a9a9a9;
      }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background:blue;
    color: #fff;
    height: 48px;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    &:hover {
        background-color: #a9a9a9;
      }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

   const imageURL = 'data:image/png;base64,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';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' type="password"  />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password'  type='password' />

                            <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;