import { useState } from "react";

export const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  function newChatMessage() {
    const newMessage = {
      message,
      id: crypto.randomUUID(),
    };
    setChatMessages([...chatMessages, newMessage]);
  }
  function useEnter(e) {
    if (e.key === "Enter") {
      newChatMessage();
      setMessage("");
    }
  }
  return (
    <div className="bg-[#36383f] w-full relative">
      <p className="text-white text-lg font-semibold p-3"># general</p>
      {/* chat messages */}
      {chatMessages.map((chatMessage) => {
        return (
          <div key={chatMessage.id} className="flex gap-x-2 mt-5 pl-4">
            <img
              src="https://cat-api-phi.vercel.app/assets/2020-12-17%2021.25.49-DjoIdg0D.jpeg"
              className="h-[50px] w-[50px] rounded-full object-cover object-center"
            />
            <div className="flex flex-col">
              <div className="flex gap-x-2 items-baseline">
                <div className="text-white font-semibold">Goat</div>
                <div className="text-gray-500 text-[14px]">
                  Today at 10:30pm
                </div>
              </div>
              <p className="text-gray-300">{chatMessage.message}</p>
            </div>
          </div>
        );
      })}

      <input
        type="text"
        value={message}
        className=" text-gray-300 absolute  bottom-2 left-4 right-4 border border-white rounded-lg p-3 outline-0"
        placeholder="Enter Message"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={useEnter}
      />
    </div>
  );
};
