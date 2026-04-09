import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;
