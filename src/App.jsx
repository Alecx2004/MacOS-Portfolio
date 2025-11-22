import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components";
import { Terminal } from "#window";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
      </main>
    </>
  );
}

export default App;
