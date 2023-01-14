import { useThemeContext } from "./provider/ThemeProvider";
import NavBar from "./components/nav/NavBar";

export default function App() {
  const { theme } = useThemeContext();
  return (
    <div id={theme}>
      <NavBar />
    </div>
  );
}
