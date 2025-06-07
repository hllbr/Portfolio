import { Experience } from "@/features/Home/Routes";
import { AboutMe } from "@/features/Home/Routes";
import SocialMedia from "@/features/Home/components/SocialMedia";

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