import { useTheme } from "../../context/ThemeContext";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <IoSunny className="w-5 h-5 text-yellow-400" />
      ) : (
        <IoMoon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
