import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./pages/main";
import "./App.css";
import { SlotContextProvider } from "./SlotContext";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <SlotContextProvider>
          <Main />
        </SlotContextProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
