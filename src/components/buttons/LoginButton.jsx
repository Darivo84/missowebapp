import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios';

const LoginBtn = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
`;


const LoginButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const history = useHistory();

  // Fetch
  const fetchAuthUser = async () => {
    const response = await Axios.get('http://localhost:5000/api/v1/auth/user', { withCredentials: true }).catch((err) => {
      console.log('Not properly authenticated');
      setIsAuthenticated(false);
      setAuthUser(null);
      // history.push('/login/error');
    });

    if (response && response.data) {
      console.log('User: ', response.data);
      setIsAuthenticated(true);
      setAuthUser(response.data);
      history.push('/welcome');
    }
  }

  // Login/Register with Google
  const redirectToGoogleSSO = async () => {
    let Timeout = null;
    const googleLoginUrl = 'http://localhost:5000/api/v1/login/google';
    const newWindow = window.open(googleLoginUrl, '_blank', "width=500,height=600")

    if (newWindow) {
      Timeout = setInterval(() => {
        if (newWindow.closed) {
          console.log('Yay!!! We are authenticated!');
          fetchAuthUser();
          if (Timeout) clearInterval(Timeout);
        }
      }, 500);
    }
  }
  

  return (
    <Link onClick={redirectToGoogleSSO} style={{ color: 'white', fontSize: '18px', fontFamily: 'Nunito', fontWeight: 'bold',textDecoration: 'none', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
      <LoginBtn>
        Login
      </LoginBtn>
    </Link>
  )
}

export default LoginButton
