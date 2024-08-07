import React, { useState, useEffect } from "react";
import { useWebSocket } from "../context/websocketContext";
import { Message } from "./Message";

export const Chat = ({ nickname, photo, type }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const { messages, sendMessage } = useWebSocket();

  const toggleChat = () => setIsChatVisible(!isChatVisible);

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage({
      message: inputMessage,
      sender: nickname || "Anonymous",
    });
    setInputMessage("");
  };

  return (
    <div className="fixed z-50 right-0 bottom-0 mr-4 mb-4">
      <img
        className="w-16 h-16 rounded-full"
        src={photo}
        onClick={toggleChat}
        alt="Toggle chat"
      />
      {isChatVisible && (
        <div className="flex flex-col h-[500px] w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 fixed right-0 bottom-0 mr-16 mb-20">
          <div className="flex flex-col flex-grow overflow-y-auto">
            <h5 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white text-center">
              {type}
            </h5>
            <br />
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              ¡Hi!
            </p>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              How can we help you {nickname}, talk to our support technicians?
            </p>
            <ul>
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  message={msg.message}
                  nickname={msg.sender}
                  photo={photo}
                />
              ))}
            </ul>
          </div>
          <form className="flex items-center p-4 w-full" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write a message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" className="ml-2 bg-blue-700 font-medium rounded-lg text-white py-2 px-4 dark:hover:bg-gray-50 dark:focus:ring-blue-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
              </svg>
            </button>
          </form>
        </div>
      )}
      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  );
};
