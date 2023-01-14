import { useThemeContext } from "./provider/ThemeProvider";
import AppRoutes from "./AppRoutes";

export default function App() {
  const { theme } = useThemeContext();
  return (
    <div id={theme}>
      <AppRoutes />
    </div>
  );
}
