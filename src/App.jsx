import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, HMenu, Projects, OtherInvolvements } from './components';

const App = () => {

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-bg-image bg-cover bg-no-repeat bg-center" id="outer-container">
          <Navbar />
          <HMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <div id="page-wrap">
            <Hero />
            <About />
            <Experience />
            <OtherInvolvements />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
