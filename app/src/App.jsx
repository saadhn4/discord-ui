import { Chat } from "./components/Chat";
import { SidebarOne } from "./components/SidebarOne";
import { SidebarTwo } from "./components/SidebarTwo";
const App = () => {
  return (
    <div className="flex">
      <SidebarOne />
      <SidebarTwo />
      <Chat />
    </div>
  );
};

export default App;
