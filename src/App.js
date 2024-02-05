import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import * as data from "./data/data";
import { useState } from "react";
import Popup from "./components/Common/Popup";
import "./App.css";

function App() {
  const [popup, setPopup] = useState(false);
  const [popItems, setPopItems] = useState(data.popData);

  const processPopup = (items) => {
    setPopup(true);
    setPopItems(items);
  };
  return (
    <main>
      <Popup popup={popup} setPopup={setPopup} popItems={popItems} />

      {/* Header component */}
      <Header companyName={data.companyName} navItems={data.navItems} />

      {/* Home Page component */}
      <HomePage
        id={data.navItems.home.label}
        name={data.name}
        profession={data.profession}
        aboutMe={data.aboutMe}
        followLinks={data.followLinks}
      />

      {/* About Page component */}
      <AboutPage
        id={data.navItems.about.label}
        aboutDetails={data.aboutDetails}
        mySkills={data.mySkills}
      />

      {/* Experience Page component */}
      <ExperiencePage
        id={data.navItems.experience.label}
        experiences={data.experiences}
        processPopup={processPopup}
      />

      {/* Project Page component */}
      <ProjectPage
        id={data.navItems.projects.label}
        projects={data.projects}
        processPopup={processPopup}
      />

      {/* Contact Page component */}
      <ContactPage
        id={data.navItems.contact.label}
        contactDetails={data.contactDetails}
      />

      {/* Footer component */}
      <Footer companyName={data.companyName} />
    </main>
  );
}

export default App;
