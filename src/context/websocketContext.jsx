// src/context/websocketContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:3000');
        setSocket(newSocket);

        newSocket.addEventListener('open', () => {
            console.log('WebSocket connection established');
        });

        newSocket.addEventListener('message', (event) => {
            const incomingMessage = JSON.parse(event.data);
            setMessages(prevMessages => [...prevMessages, incomingMessage]);
        });

        return () => {
            newSocket.close();
        };
    }, []);

    const sendMessage = (message) => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(message));
        }
    };

    return (
        <WebSocketContext.Provider value={{ messages, sendMessage }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext);
