import React from 'react';

// Simple function to convert markdown-like text to JSX
const formatText = (text) => {
  if (!text) return '';
  
  // Split text into lines
  const lines = text.split('\n');
  const formattedLines = [];
  
  lines.forEach((line, index) => {
    // Handle bullet points (*, -, or •)
    if (line.trim().match(/^[\*\-•]\s+/)) {
      const bulletText = line.replace(/^[\*\-•]\s+/, '');
      formattedLines.push(
        <div key={index} className="flex items-start mb-1">
          <span className="mr-2 mt-1">•</span>
          <span>{bulletText}</span>
        </div>
      );
    }
    // Handle numbered lists
    else if (line.trim().match(/^\d+\.\s+/)) {
      formattedLines.push(
        <div key={index} className="mb-1 ml-4">
          {line.trim()}
        </div>
      );
    }
    // Handle headers (## or ###)
    else if (line.trim().startsWith('##')) {
      const headerText = line.replace(/^#+\s*/, '');
      formattedLines.push(
        <h3 key={index} className="font-bold text-lg mt-3 mb-2">
          {headerText}
        </h3>
      );
    }
    // Handle bold text (**text**)
    else if (line.includes('**')) {
      const parts = line.split(/(\*\*[^*]+\*\*)/);
      const formattedParts = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      formattedLines.push(
        <p key={index} className="mb-2">
          {formattedParts}
        </p>
      );
    }
    // Handle empty lines
    else if (line.trim() === '') {
      formattedLines.push(<div key={index} className="h-2"></div>);
    }
    // Handle regular paragraphs
    else if (line.trim()) {
      formattedLines.push(
        <p key={index} className="mb-2 leading-relaxed">
          {line.trim()}
        </p>
      );
    }
  });
  
  return formattedLines;
};

const Message = ({chat}) => {
  const messageText = chat.text || chat.message || chat.content || '';
  
  if(chat.role === "user"){
    return (
      <div className="flex justify-end mb-4">
          <div className="flex items-start space-x-3 max-w-2xl flex-row-reverse space-x-reverse">
            <div className="w-10 h-10 bg-[#C95A5A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#ffffff] text-sm font-bold">U</span>
            </div>
            <div className="bg-[#C95A5A] text-[#ffffff] px-4 py-3 rounded-2xl rounded-tr-md shadow-lg">
                <p className="leading-relaxed">{messageText}</p>
            </div>
          </div>
      </div>
    )
  } else {
    return (
      <div className="flex justify-start mb-4">
          <div className="flex items-start space-x-3 max-w-2xl">
          <div className="w-10 h-10 bg-[#C95A5A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-[#ffffff] text-sm font-bold">AI</span>
          </div>
          <div className="bg-[#383838] text-[#ffffff] px-4 py-3 rounded-2xl rounded-tl-md border border-[#383838] shadow-lg">
              <div className="leading-relaxed">
                {formatText(messageText)}
              </div>
          </div>
          </div>
      </div>
    )
  }
};

export default Message;