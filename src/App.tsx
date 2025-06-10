import Links from "./components/Links";
import WorkExperience from "./components/WorkExperience";
import Title from "./components/Title";
import Spacer from "./components/ui/Spacer";
import MainLayout from "./layout/MainLayout";
import Projects from "./components/Projects";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <Spacer height={100} />
      <Title />
      <Links />
      <Spacer height={50} />
      <WorkExperience />
      <Spacer height={100} />
      <Projects />
    </MainLayout>
  );
}

export default App;
