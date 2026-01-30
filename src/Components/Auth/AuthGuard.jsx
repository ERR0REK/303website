/* src/Components/Auth/AuthGuard.jsx */

import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';

import LoadingScreen from '../LoadingScreen/LoadingScreen';

const AuthGuard = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isVerifying, setIsVerifying] = useState(true);

    // Guild ID that the user must be a member of
    // const REQUIRED_GUILD_ID = "1463132353814593752";

    useEffect(() => {
        const session = JSON.parse(localStorage.getItem('NFS_auth_session'));

        if (session && session.access_token) {
            if (!session.user_id) {
                // Old session format without ID - force re-login
                localStorage.removeItem('NFS_auth_session');
                setIsVerifying(false);
                return;
            }
            verifyMembership(session.access_token);
        } else {
            setIsVerifying(false);
        }
    }, []);

    const verifyMembership = async (token) => {
        try {
            // In a real scenario, you'd fetch guilds:
            // const response = await fetch('https://discord.com/api/users/@me/guilds', {
            //   headers: { Authorization: `Bearer ${token}` }
            // });
            // const guilds = await response.json();
            // const isInGuild = guilds.some(g => g.id === "1463132353814593752");

            // Placeholder: Assume they are in guild if we have a token
            // We will implement the real check in DiscordCallback.jsx after login
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Auth verification failed:", error);
            setIsAuthenticated(false);
        } finally {
            setIsVerifying(false);
        }
    };

    if (isVerifying) {
        return <LoadingScreen />;
    }

    if (!isAuthenticated) {
        return <LoginPage />;
    }

    return <>{children}</>;
};

export default AuthGuard;
