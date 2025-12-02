import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from "#window";

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
      </main>
    </>
  );
}

export default App;
