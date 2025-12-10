import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("Initializing systems...");
    const [systemInfo, setSystemInfo] = useState({
        ip: "192.168.1.1",
        status: "ONLINE",
        user: "ADMIN"
    });
  
    useEffect(() => {
        const loadingMessages = [
            "Initializing systems...",
            "Loading assets...",
            "Establishing secure connection...",
            "Preparing interface...",
            "Almost ready...",
            "System ready"
        ];
    
        let messageIndex = 0;
        const interval = setInterval(() => {
            setLoadingProgress(prev => {
                const newProgress = prev + 2;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setLoadingText(loadingMessages[loadingMessages.length - 1]);
                    return 100;
                }
        
                // Change loading text based on progress
                messageIndex = Math.floor(newProgress / 20);
                if (messageIndex < loadingMessages.length) {
                    setLoadingText(loadingMessages[messageIndex]);
                }
        
                // Simulate random system status changes
                if (Math.random() > 0.95) {
                    setSystemInfo(prev => ({
                        ...prev,
                        status: prev.status === "ONLINE" ? "SCANNING" : "ONLINE"
                    }));
                }
        
                return newProgress;
            });
        }, 50); // Slightly faster for a smoother feel
    
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-screen">
            {/* Background with animated grid pattern */}
            <div className="loading-bg"></div>
            
            {/* Main content container */}
            <div className="loading-container">
                {/* Logo with glitch effect */}
                <div className="logo-container">
                    <div className="division-logo glitch">303</div>
                    <div className="division-text glitch">DYWIZJON</div>
                </div>
                
                {/* Progress bar with scanner */}
                <div className="progress-container">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${loadingProgress}%` }}
                        ></div>
                        <div className="progress-scanner"></div>
                    </div>
                    <div className="progress-percentage">{loadingProgress}%</div>
                </div>
                
                {/* Loading status */}
                <div className="loading-status">{loadingText}</div>
                
                {/* Animated dots */}
                <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                
                {/* System info panel */}
                <div className="system-info">
                    <div className="info-line">
                        <span className="info-label">USER:</span>
                        <span className="info-value">{systemInfo.user}</span>
                    </div>
                    <div className="info-line">
                        <span className="info-label">STATUS:</span>
                        <span className="info-value status-active">{systemInfo.status}</span>
                    </div>
                    <div className="info-line">
                        <span className="info-label">IP:</span>
                        <span className="info-value">{systemInfo.ip}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;