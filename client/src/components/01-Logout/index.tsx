import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './logoutt.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      className="logout"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      <img
        className="logout__logout-icon"
        src="https://cdn0.iconfinder.com/data/icons/user-management-1/32/user-icon-03-512.png"
        alt="logout icon"
      />
    </button>
  );
};

export default LogoutButton;
