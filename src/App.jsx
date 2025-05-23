import Header from './assets/components/header.jsx';
import Footer from './assets/components/footer.jsx';
import Message from './assets/components/message.jsx';
import {useState} from 'react';
const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model", text}]);
    }
    history = history.map(({role, text}) => ({role, parts: [{text}]}));
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({contents: history})

    }

    try{
      const response = await fetch(import.meta.env.VITE_GEMINI_API_KEY, requestOptions);
      const data = await response.json();

      if(!response.ok) throw new Error(data.error.message || "Something went wrong!");
      
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

      updateHistory(apiResponseText);
    }catch (e){
      console.log(e);
    }
  }
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] bg-[#1e1e1e] rounded-2xl border border-[#383838] shadow-2xl flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 space-y-6 chat-scroll">
            <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-[#ffffff] mb-2">Start a conversation</h3>
                <p className="text-[#ffffff]/60">Type a message below to begin chatting!</p>
            </div>

            
            
            {chatHistory.map((chat, index) => (
              <Message key={index} chat={chat}/>
            ))}
            {/* <div className="flex justify-end">
                <div className="flex items-start space-x-3 max-w-2xl flex-row-reverse space-x-reverse">
                <div className="w-10 h-10 bg-[#C95A5A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#ffffff] text-sm font-bold">U</span>
                </div>
                <div className="bg-[#C95A5A] text-[#ffffff] px-4 py-3 rounded-2xl rounded-tr-md shadow-lg">
                    <p className="leading-relaxed">Hi there! I'd like to know more about your features.</p>
                </div>
                </div>
            </div> */}

            {/* <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-2xl">
                <div className="w-10 h-10 bg-[#C95A5A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#ffffff] text-sm font-bold">AI</span>
                </div>
                <div className="bg-[#383838] text-[#ffffff] px-4 py-3 rounded-2xl rounded-tl-md border border-[#383838] shadow-lg">
                    <p className="leading-relaxed">I'm an AI assistant designed to help you with various tasks and answer your questions. I can assist with writing, analysis, problem-solving, and much more. Feel free to ask me anything!</p>
                </div>
                </div>
            </div> */}
        </div>
        <Footer chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
      </div>
    </div>
  );
};

export default App;