import { Toaster } from "react-hot-toast";
import Links from "./components/Links";
import WorkExperience from "./components/WorkExperience";
import Title from "./components/Title";
import Spacer from "./components/ui/Spacer";
import MainLayout from "./layout/MainLayout";
import Projects from "./components/Projects";
import OtherExperience from "./components/OtherExperience";
import LastEdited from "./components/LastEdited";

function App() {
  return (
    <MainLayout>
      <Toaster position="top-center" />
      <Spacer height={80} />
      <div className="bg-gray-100 p-4 rounded-lg">
        <Title />
        <Links />
      </div>
      <Spacer height={80} />
      <WorkExperience />
      <Spacer height={80} />
      <Projects />
      <Spacer height={80} />
      <OtherExperience />
      <Spacer height={80} />
      <LastEdited />
      <Spacer height={80} />
    </MainLayout>
  );
}

export default App;
