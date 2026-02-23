import { useState } from "react";
import { portfolioData } from "./data/portfolioData";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Terminal from "./components/Terminal/Terminal";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        data={portfolioData}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onTerminalOpen={() => setTerminalOpen(true)}
      />
      <main className="main-content">
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Experience data={portfolioData} />
        <Projects data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
