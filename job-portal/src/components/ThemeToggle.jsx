import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardCtx } from "../context/DashboradCtx";
import Wrapper from "../assets/wrappers/ThemeToggles";

const ThemeToggle = () => {
  const {
    isDarkTheme,

    toggleIsDarkTheme,
  } = useDashboardCtx();
  return (
    <Wrapper onClick={toggleIsDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
