import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App w-full h-screen flex justify-center">
      <div className="h-[300px] p-5 w-[500px] rounded border border-gray-500">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
