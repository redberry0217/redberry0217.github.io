import { Toaster } from "react-hot-toast";
import Links from "./components/Links";
import Title from "./components/Title";
import Spacer from "./components/ui/Spacer";
import MainLayout from "./layout/MainLayout";
import OtherExperience from "./components/OtherExperience";
import LastEdited from "./components/LastEdited";
import Winterview from "./components/Winterview";
import Mmeasy from "./components/Mmeasy";
import Education from "./components/Education";

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
      <Winterview />
      <Spacer height={80} />
      <Mmeasy />
      <Spacer height={80} />
      <OtherExperience />
      <Spacer height={80} />
      <Education />
      <Spacer height={80} />
      <LastEdited />
      <Spacer height={80} />
    </MainLayout>
  );
}

export default App;
