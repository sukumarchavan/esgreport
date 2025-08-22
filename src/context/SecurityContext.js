import React, { createContext, useContext, useState, useEffect } from 'react';

const SecurityContext = createContext();

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

export const SecurityProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [sessionTimeout, setSessionTimeout] = useState(null);

  // Check authentication status on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const userInfo = localStorage.getItem('userData');
    
    if (authStatus === 'true' && userInfo) {
      setIsAuthenticated(true);
      setUserData(JSON.parse(userInfo));
      
      // Set session timeout (30 minutes)
      const timeout = setTimeout(() => {
        logout();
      }, 30 * 60 * 1000);
      
      setSessionTimeout(timeout);
    }
  }, []);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (sessionTimeout) {
        clearTimeout(sessionTimeout);
      }
    };
  }, [sessionTimeout]);

  // Login function
  const login = (userInfo) => {
    setIsAuthenticated(true);
    setUserData(userInfo);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userData', JSON.stringify(userInfo));
    
    // Reset session timeout
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
    }
    
    const timeout = setTimeout(() => {
      logout();
    }, 30 * 60 * 1000);
    
    setSessionTimeout(timeout);
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userData');
    
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
      setSessionTimeout(null);
    }
  };

  // Extend session
  const extendSession = () => {
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
    }
    
    const timeout = setTimeout(() => {
      logout();
    }, 30 * 60 * 1000);
    
    setSessionTimeout(timeout);
  };

  // Security check function
  const securityCheck = () => {
    // Additional security checks can be added here
    return isAuthenticated;
  };

  const value = {
    isAuthenticated,
    userData,
    login,
    logout,
    extendSession,
    securityCheck
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};
