import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/components.js";
import {
  About,
  Education,
  Skills,
  Services,
  Projects,
  Contact,
  ProjectDetail,
} from "./pages/pages.js";
import { navElements } from "./assets/assets.js";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  const [activeElem, setActiveElem] = useState(navElements[0]);

  return (
    <ThemeProvider>
      <div className="selection:bg-[var(--accent)] selection:text-white transition-colors duration-300">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar activeElem={activeElem} setActiveElem={setActiveElem} />
                <div className="relative max-w-[1800px] mt-[5rem] bedar-sc2:mt-[6.8rem] w-full m-auto px-5 bedar-sc1:px-20 overflow-auto">
                  <About />
                  <Education />
                  <Skills />
                  <Projects />
                  {/* <Services /> */}
                  <Contact />
                </div>
                <Footer activeElem={activeElem} setActiveElem={setActiveElem} />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
