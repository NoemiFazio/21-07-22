import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <Navbar
        funzione={() => setGalleryVisibility(!isGalleryVisibile)}
        condizione={isGalleryVisibile}
      />
      {/* <div className="Navbar">
        <Button
          btnTextCont="show / hide"
          onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}
        />
      </div> */}

      <Hero />
      <Gallery visibility={isGalleryVisibile} />
      <hr />
    </div>
  );
}

export default App;
