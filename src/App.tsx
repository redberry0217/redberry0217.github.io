import Links from "./components/Links";
import WorkExperience from "./components/WorkExperience";
import Title from "./components/Title";
import Spacer from "./components/ui/Spacer";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Spacer height={100} />
      <Title />
      <Links />
      <WorkExperience />
    </MainLayout>
  );
}

export default App;
