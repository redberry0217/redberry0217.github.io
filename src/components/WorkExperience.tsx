import Spacer from "./ui/Spacer";

const WorkExperience = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary">Work Experience</h2>
      <Spacer height={30} />
      <div className="flex gap-[40px]">
        {/* 왼쪽 영역 */}
        <div className="w-[30%] flex flex-col gap-[10px]">
          <span className="text-2xl font-bold">(주)윤회</span>
          <div className="flex flex-col">
            <span className="text-sm text-secondary">
              프론트엔드 개발 인턴
              <br />
              2025. 03 - 2025. 03
            </span>
          </div>
        </div>
        {/* 오른쪽 영역 */}
        <div className="w-[70%]">ddddddddddddd</div>
      </div>
    </section>
  );
};

export default WorkExperience;
