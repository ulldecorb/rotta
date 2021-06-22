import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../01-Login';
import LogoutButton from '../01-Logout';
import './login.css';

const Landing = () => {
  const {
    user, isLoading, isAuthenticated
  } = useAuth0();

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading__advise">Loading ...</div>
      </div>
    );
  }

  return (
    <div className="log">
      <h2 className="log__title">Welcome Rotta</h2>
      <LoginButton />
      {isAuthenticated
        && (
        <>
          <div className="log__profile">
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
          <LogoutButton />
        </>
        )}
    </div>
  );
};

export default Landing;
