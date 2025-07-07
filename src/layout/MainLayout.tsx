import ProgressBar from "../components/ProgressBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="dt:w-[1000px] tb:w-full tb:px-5 mb:w-full mb:px-5">
          {children}
        </div>
      </div>
      <ProgressBar />
    </>
  );
};

export default MainLayout;
