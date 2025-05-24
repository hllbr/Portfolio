import { Experience } from "./Routes";
import { AboutMe } from "./Routes";


const Home = () => {
  return (
    <div className="flex flex-col">
      <AboutMe />
      <Experience />
    </div>
  );
};

export default Home; 