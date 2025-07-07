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
import PageUpBtn from "./components/ui/PageUpBtn";
import { useEffect, useState } from "react";

function App() {
  const [isPageUpBtnVisible, setIsPageUpBtnVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPageUpBtnVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainLayout>
      <Toaster position="top-center" />
      <Spacer height={60} className="mb:hidden" />
      <div className="bg-gray-100 p-4 rounded-lg mb:mt-5">
        <Title />
        <Links />
      </div>
      <Spacer height={60} className="mb:hidden" />
      <Winterview />
      <Spacer height={60} className="mb:hidden" />
      <Mmeasy />
      <Spacer height={60} className="mb:hidden" />
      <OtherExperience />
      <Spacer height={60} className="mb:hidden" />
      <Education />
      <Spacer height={60} />
      <LastEdited />
      <Spacer height={60} />
      {isPageUpBtnVisible && <PageUpBtn />}
    </MainLayout>
  );
}

export default App;
