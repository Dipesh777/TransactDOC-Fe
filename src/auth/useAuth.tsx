import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
console.log('authContext', AuthContext);

export const useAuth = () => useContext(AuthContext);