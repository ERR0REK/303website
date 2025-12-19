// src/Components/LoadingScreen/LoadingScreen.jsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const { t } = useTranslation();
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingText, setLoadingText] = useState(t('loadingScreen.status1'));
    const [systemInfo, setSystemInfo] = useState({
        ip: "192.168.1.1",
        status: "ONLINE",
        user: "ADMIN",
        ram: 32,
        cpu: 45,
        ramText: "8GB",
        cpuText: "45%"
    });
  
    useEffect(() => {
        const loadingMessages = [
            t('loadingScreen.status1'),
            t('loadingScreen.status2'),
            t('loadingScreen.status3'),
            t('loadingScreen.status4'),
            t('loadingScreen.status5'),
            t('loadingScreen.statusReady')
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
        
                messageIndex = Math.floor(newProgress / 20);
                if (messageIndex < loadingMessages.length) {
                    setLoadingText(loadingMessages[messageIndex]);
                }
        
                // Aktualizuj system info dynamicznie
                setSystemInfo(prev => {
                    const newRam = Math.max(20, Math.min(100, prev.ram + (Math.random() - 0.5) * 15));
                    const newCpu = Math.max(10, Math.min(100, prev.cpu + (Math.random() - 0.5) * 20));
                    const newStatus = Math.random() > 0.85 ? (prev.status === "ONLINE" ? "SCANNING" : "ONLINE") : prev.status;
                    
                    return {
                        ...prev,
                        status: newStatus,
                        ram: Math.round(newRam),
                        cpu: Math.round(newCpu),
                        ramText: `${Math.round((newRam / 100) * 16)}GB`,
                        cpuText: `${Math.round(newCpu)}%`
                    };
                });
        
                return newProgress;
            });
        }, 50);
    
        return () => clearInterval(interval);
    }, [t]);

    return (
        <div className="loading-screen">
            {/* Background with animated grid pattern */}
            <div className="loading-bg"></div>
            
            {/* Main content container */}
            <div className="loading-container">
                {/* Logo with glitch effect */}
                <div className="logo-container">
                    <div className="division-logo glitch">SLX</div>
                    <div className="division-text glitch">Shadow Abyssal X</div>
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
                        <span className={`info-value ${systemInfo.status.toLowerCase()}`}>{systemInfo.status}</span>
                    </div>
                    <div className="info-line">
                        <span className="info-label">IP:</span>
                        <span className="info-value">{systemInfo.ip}</span>
                    </div>
                    
                    {/* RAM with animated bar */}
                    <div className="info-line-bar">
                        <div className="info-line-header">
                            <span className="info-label">RAM:</span>
                            <span className="info-value">{systemInfo.ramText}</span>
                        </div>
                        <div className="system-bar">
                            <div 
                                className="system-bar-fill ram-bar" 
                                style={{ width: `${systemInfo.ram}%` }}
                            ></div>
                        </div>
                    </div>
                    
                    {/* CPU with animated bar */}
                    <div className="info-line-bar">
                        <div className="info-line-header">
                            <span className="info-label">CPU:</span>
                            <span className="info-value">{systemInfo.cpuText}</span>
                        </div>
                        <div className="system-bar">
                            <div 
                                className="system-bar-fill cpu-bar" 
                                style={{ width: `${systemInfo.cpu}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;