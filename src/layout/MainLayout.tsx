import ProgressBar from "../components/ProgressBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-[1000px]">{children}</div>
      </div>
      <ProgressBar />
    </>
  );
};

export default MainLayout;
