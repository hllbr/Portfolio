import { Experience } from "./Routes";
import { AboutMe } from "./Routes";
import SocialMedia from "./components/SocialMedia";

/**
 * Main landing page composed of personal sections.
 */
const Home = () => {
  return (
    <div className="flex flex-col">
      <AboutMe />
      <Experience />
      <SocialMedia />
    </div>
  );
};

export default Home; 