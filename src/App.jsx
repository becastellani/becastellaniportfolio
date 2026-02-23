import { useState } from "react";
import usePortfolioTranslation from "./translate/useTranslation";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Terminal from "./components/Terminal/Terminal";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const { data, lang, changeLang, langs } = usePortfolioTranslation();

  return (
    <div className="app-layout">
      <LangSwitcher lang={lang} changeLang={changeLang} langs={langs} />
      <Sidebar
        data={data}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onTerminalOpen={() => setTerminalOpen(true)}
      />
      <main className="main-content">
        <Hero data={data} />
        <About data={data} />
        <Experience data={data} />
        <Projects data={data} />
        <Contact data={data} />
      </main>
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} data={data} />
    </div>
  );
}