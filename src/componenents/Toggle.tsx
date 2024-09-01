import { ThemeButton } from "../UI/Button";
import { LuMoon, LuSun } from "react-icons/lu";

interface Props {
  theme: string;
  toggleTheme: (() => void) ;
}
export default function Toggle({ theme, toggleTheme }: Props) {
  return (
    <ThemeButton title="theme toggler" onClick={toggleTheme}>
      <span>
        {theme === "dark" ? (
          <LuSun color="white" />
        ) : (
          <LuMoon color="#151515" />
        )}
      </span>
    </ThemeButton>
  );
}
