import "./App.css";
import StepList from "./Components/StepList";

function App() {
  return (
    <div className="App w-full h-screen flex justify-center">
      <div className="h-[300px] p-5 w-[500px] rounded border border-gray-500">
        <StepList />
      </div>
    </div>
  );
}

export default App;
