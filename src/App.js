import "./App.css";
import Contact from "./componets/Contact";
import Services from "./componets/Services";
import Header from "./componets/Header";
import Home from "./componets/Home";
import BookForm from "./componets/BookForm";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <BookForm />
      <Contact />
    </div>
  );
}

export default App;
