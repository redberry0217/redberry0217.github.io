import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

const Title = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <div className="flex justify-between items-baseline">
        <div className="flex gap-[10px] items-baseline mb:flex-col mb:gap-[5px]">
          <span className="text-5xl font-bold text-primary mb:text-3xl">
            박지영
          </span>
          <span className="text-2xl font-bold mb:text-lg">
            프론트엔드 개발자
          </span>
        </div>
        <div className="flex gap-[10px] items-baseline select-none">
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            <HiChatBubbleOvalLeftEllipsis className="w-full h-full" />
          </div>
          <span className="text-lg font-bold mb:text-base">KR</span>
          <span className="text-lg font-bold mb:text-base">EN</span>
          <span className="text-lg font-bold mb:text-base">JP</span>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <span className="text-lg leading-[1.5] mb:text-sm">
          안녕하세요! 같이 일하고 싶은 신입 개발자 박지영입니다. 저는 주도적으로
          문제를 정의하고 개선하는 것을 좋아하고, 코드의 가독성과 재사용성을
          중요하게 생각합니다. 학생들에게 강의를 하며 키운 리더십과, 기획자로서
          다양한 분들과 협업하며 얻은 커뮤니케이션 능력을 개발 역량과 결합해,
          팀의 성과와 성장에 기여하겠습니다. 저는 완성이란 과정의 또 다른
          이름이라고 믿습니다. '완성'을 쉽게 결론 내리지 않고 지속적으로
          개선점을 탐구하는 '과정'을 즐기는 개발자가 되고자 합니다.
        </span>
      </div>
    </section>
  );
};

export default Title;
