
const Message = ({chat}) => {
  if(chat.role === "user"){
    return (
      <div className="flex justify-end">
          <div className="flex items-start space-x-3 max-w-2xl flex-row-reverse space-x-reverse">
            <div className="w-10 h-10 bg-[#C95A5A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#ffffff] text-sm font-bold">U</span>
            </div>
            <div className="bg-[#C95A5A] text-[#ffffff] px-4 py-3 rounded-2xl rounded-tr-md shadow-lg">
                <p className="leading-relaxed">{chat.text}</p>
            </div>
          </div>
      </div>
    )
  }else{
    return (
      <div className="flex justify-start">
          <div className="flex items-start space-x-3 max-w-2xl">
          <div className="w-10 h-10 bg-[#C95A5A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-[#ffffff] text-sm font-bold">AI</span>
          </div>
          <div className="bg-[#383838] text-[#ffffff] px-4 py-3 rounded-2xl rounded-tl-md border border-[#383838] shadow-lg">
              <p className="leading-relaxed">{chat.text}</p>
          </div>
          </div>
      </div>
    )
  }
};

export default Message;