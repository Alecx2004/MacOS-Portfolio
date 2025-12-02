import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photo } from "#window";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <Image/>
        <Contact />
        <Home />
        <Photo />
      </main>
    </>
  );
}

export default App;
