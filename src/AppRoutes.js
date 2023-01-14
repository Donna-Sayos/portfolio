import { Routes, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import MajorProjects from "./components/projects/MajorProjects";
import MinorProjects from "./components/projects/MinorProjects";
import Mentors from "./components/testimonials/Mentors";
import Peers from "./components/testimonials/Peers";
import Socials from "./components/socials/Socials";

export default function AppRoutes() {
  return (
    <>
      <nav id="nav">
        <NavBar />
      </nav>
      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects/major" element={<MajorProjects />} />
        <Route path="/projects/minor" element={<MinorProjects />} />
        <Route path="/testimonials/mentors" element={<Mentors />} />
        <Route path="/testimonials/peers" element={<Peers />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </>
  );
}
