import { useThemeContext } from "./provider/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import ReactSwitch from "react-switch";
import { FaLightbulb } from "react-icons/fa";
import NavBar from "./components/nav/Navbar";

export default function AppRoutes() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <>
      <nav>
        <NavBar />
      </nav>
    </>
  );
}
