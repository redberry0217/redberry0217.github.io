import { FaArrowUp } from "react-icons/fa";

const PageUpBtn = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleScrollUp}
      className="bg-primary w-[50px] h-[50px] mb:w-[40px] mb:h-[40px] rounded-full fixed bottom-10 right-10 mb:bottom-5 mb:right-5 flex items-center justify-center select-none cursor-pointer"
    >
      <FaArrowUp className="text-white text-2xl" />
    </div>
  );
};

export default PageUpBtn;
