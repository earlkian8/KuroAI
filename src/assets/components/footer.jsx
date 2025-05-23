import {useRef} from 'react';
import { Send } from 'lucide-react';

const Footer = ({chatHistory, setChatHistory, generateBotResponse}) => {
  
    const inputRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;

        inputRef.current.value = "";
        console.log(userMessage);

        setChatHistory((history) => [...history, {role: "user", text: userMessage}]);

        setTimeout(() => {
            setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]);
            generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);
        }, 600);

        
    }

    return (
        <form action="#" onSubmit={handleFormSubmit} className="border-t border-[#383838] p-6 bg-[#1e1e1e]">
            <div className="flex gap-4">
                <div className="flex-1 relative">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type your message here..."
                    className="w-full bg-[#383838] text-[#ffffff] placeholder-[#ffffff]/60 px-5 py-4 rounded-xl border border-[#383838] focus:outline-none focus:border-[#C95A5A] focus:ring-2 focus:ring-[#C95A5A]/20 transition-all duration-200 text-base"
                />
                </div>
                <button
                type="submit"
                className="bg-[#C95A5A] text-[#ffffff] px-6 py-4 rounded-xl hover:bg-[#C95A5A]/80 active:scale-95 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 group"
                >
                <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
                Send
                </button>
            </div>
        </form>
    );
};

export default Footer;