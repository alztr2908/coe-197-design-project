import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Display from "./pages/display";
import "./App.css";
import { SlotContextProvider } from "./SlotContext";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <SlotContextProvider>
          <Display />
        </SlotContextProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
