import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div className="flex flex-col h-screen text-white bg-gray-800">
      <Header />
      <Main />
    </div>
  );
}

export default App;
