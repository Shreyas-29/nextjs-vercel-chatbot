import React from 'react'
import Chatbot from "@/components/chat-box"

const HomePage = () => {
  return (
    <main className="w-full h-dvh bg-background">
      <div className="max-w-4xl mx-auto h-full">
        <Chatbot />
      </div>
    </main>
  )
};

export default HomePage
