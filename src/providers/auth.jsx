import React, { createContext, useContext, useState } from 'react';
import api, {setAuthToken} from "../services/api.js";
const AuthContext = createContext();
const AuthActionsContext = createContext();
export const useJWTAuth = () => useContext(AuthContext);
export const useJWTAuthActions = () => useContext(AuthActionsContext);
const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        user: null,
        isAuthenticated: false
    });
    const signInUser = async ({ mail, password }) => {
        try {
            const { data } = await api.post('auth', { mail, password });
            localStorage.setItem('token', data.accessToken);
            setAuthToken(data.accessToken);
            const res = await api.get('/user/me/info');
            setAuthData({
                user: res.data,
                isAuthenticated: true,
            });
            return {
                error: null
            }
        } catch (error) {
            setAuthData({
                ...authData,
                isAuthenticated: false,
            });

            return {
                error: error.response.data.message ? error.response.data.message : error.message
            }
        }
    };
    const signUpUser = async ({ name, email, password }) => {
        try {
            const { data } = await api.post('users', { name, email, password });
            localStorage.setItem('token', data.token);
            setAuthToken(data.token);
            const res = await api.get('/auth');
            setAuthData({
                user: res.data,
                isAuthenticated: true,
                isLoading: false,
            });
        } catch (error) {
            setAuthData({
                ...authData,
                isAuthenticated: false,
                isLoading: false,
            });

        }
    };
    const logout = async () => {
        localStorage.removeItem('token');
        setAuthToken();
        setAuthData({
            user: null,
            isAuthenticated: false,
        });


    };

    return (
        <AuthContext.Provider
            value={{
                ...authData,
            }}
        >
            <AuthActionsContext.Provider
                value={{
                    signUpUser,
                    signInUser,
                    logout,
                }}
            >
                {children}
            </AuthActionsContext.Provider>
        </AuthContext.Provider>
    );
};
export default AuthProvider;