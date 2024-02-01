import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ExperiencePage from "./components/ExperiencePage/ExperiencePage";
import Footer from "./components/Footer/Footer";
import * as data from "./data/data";

function App() {
  return (
    <main>
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
      <ExperiencePage id={data.navItems.experience.label} />

      {/* Footer component */}
      <Footer />
    </main>
  );
}

export default App;
