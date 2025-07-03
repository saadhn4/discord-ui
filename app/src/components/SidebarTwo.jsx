export const SidebarTwo = () => {
  return (
    <div className="h-screen bg-[#2f3135] w-[300px]">
      {/* Server Name */}
      <div className="flex justify-between items-center p-5">
        <p className="font-bold text-lg text-white">Developer's Hub</p>
        <i class="bi bi-chevron-expand text-white cursor-pointer"></i>
      </div>
      <div className="pl-3 mt-2">
        <p className="text-[#8e9297] font-bold mb-2">TEXT CHANNELS</p>
        <p className="mb-2 text-[#b9bbbe] cursor-pointer"># general</p>
        <p className="text-[#b9bbbe] cursor-pointer"># announcements</p>
      </div>
      <div className="mt-3 pl-3">
        <p className="text-[#8e9297] font-bold mt-4 mb-2">VOICE CHANNELS</p>
        <div classname="cursor-pointer">
          <i class="bi bi-mic-fill text-[#b9bbbe] "></i>
          <span className="text-[#b9bbbe] ml-2">General Voice</span>
        </div>
      </div>
    </div>
  );
};
