import Divider from "./ui/Divider";
import Spacer from "./ui/Spacer";

const Education = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary">Education</h2>
      <Spacer height={30} />
      <div className="flex flex-col gap-[25px]">
        <span className="text-2xl font-bold">내일배움캠프 React 4기 수료</span>
        <span className="text-xl font-bold">2023.12 - 2024.05</span>
        <div className="flex flex-col gap-[10px]">
          <span className="text-lg leading-[1.5]">
            어려움도 많았지만 많은 것을 배우고 귀한 인연을 만나게 된 경험입니다.{" "}
            <a
              href="https://velog.io/@redberry0217/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-secondary transition-colors duration-300 font-bold"
            >
              70개 이상의 학습 블로그
            </a>
            를 작성했고, 모든 개인과제를 성실히 수행했으며, 5회 이상의
            팀프로젝트와 6주간의 최종프로젝트를 수행했습니다. 웹서비스 기획,
            개발, 배포, 유저테스트, 성능개선까지 프론트엔드 개발 필수 역량을
            훈련했습니다. 팀 리더로 기여한{" "}
            <a
              href="https://mmeasy.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-secondary transition-colors duration-300 font-bold"
            >
              최종프로젝트
            </a>
            는 참가팀 10개 중 최우수상을 수상했으며, 팀워크 기여상, 성실상과
            같은 개인상도 받았습니다.
          </span>
        </div>
      </div>
      <Divider gap={20} />
      <div className="flex flex-col gap-[25px]">
        <span className="text-2xl font-bold">
          London School of Business and Finance - Postgraduate Course 수료
        </span>
        <span className="text-xl font-bold">2019.09 - 2019.12</span>
        <div className="flex flex-col gap-[10px]">
          <span className="text-lg leading-[1.5]">
            영국 런던 Holborn 소재 비즈니스 스쿨(LSBF)에서 Marketing, Management
            과정을 수료했습니다. Digital Marketing, Content Marketing SEO,
            International Business, Business Technique Development 등 4개 과목을
            수강했으며 다양한 국적의 학생들과 팀프로젝트와 발표를 진행하고
            에세이 작성 과제를 수행했습니다.
          </span>
        </div>
      </div>
      <Divider gap={20} />
      <div className="flex flex-col gap-[25px]">
        <span className="text-2xl font-bold">
          안동대학교 사범대학 영어교육과 졸업
        </span>
        <span className="text-xl font-bold">2008.03 - 2013.08</span>
      </div>
    </section>
  );
};

export default Education;
