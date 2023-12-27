// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const update = (userData) => {
    // update user data
    setUser(userData);
  };

  const logout = () => {
    // logout 
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, update, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
