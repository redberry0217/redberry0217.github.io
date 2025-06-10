import Divider from "./ui/Divider";
import Spacer from "./ui/Spacer";

const OtherExperience = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary">Other Experiences</h2>
      <Spacer height={30} />
      <div className="flex flex-col gap-[25px]">
        <span className="text-2xl font-bold">
          내일배움캠프 React 6기 - 담임매니저 (Assistant PM)
        </span>
        <span className="text-xl font-bold">2024.06 - 2024.11</span>
        <div className="flex flex-col gap-[10px]">
          <span className="text-lg leading-[1.5]">
            React 6기에서 담당 PM님을 서포트하고 튜터진과 긴밀히 협업하며
            사전캠프와 본캠프의 운영을 도왔습니다. 트랙 전체를 미리 경험해 본
            선배로서 수강생이 겪는 기술적 어려움과 직무 관련 고민에 대한 조언과
            지원을 제공했습니다. 수강생 이벤트를 기획 및 진행했고, 최종프로젝트
            주간에는 성공적인 팀 협업을 위한 세션도 진행했습니다.
          </span>
        </div>
      </div>
      <Divider gap={30} />
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
              className="underline hover:text-secondary transition-colors duration-300"
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
              className="underline hover:text-secondary transition-colors duration-300"
            >
              최종프로젝트
            </a>
            는 참가팀 10개 중 최우수상을 수상했으며, 팀워크 기여상, 성실상과
            같은 개인상도 받았습니다.
          </span>
        </div>
      </div>
      <Divider gap={30} />
      <div className="flex flex-col gap-[25px]">
        <span className="text-2xl font-bold">(주)디브컴퍼니 - 기획팀 책임</span>
        <span className="text-xl font-bold">2021.09 - 2023.06</span>
        <div className="flex flex-col gap-[5px]">
          <span className="text-lg font-bold">프로모션 랜딩페이지 기획</span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
            <li>고객사, 디자인팀, 개발팀과 소통 및 협업</li>
            <li>
              기획 스토리보드 작성, 프로젝트 전체 일정 관리, 요구사항 정리, 오픈
              전 테스트 수행, 오픈 후 구글애널리틱스 유저 행동 데이터 분석
            </li>
            <li>
              방문자수, 이벤트별 클릭수, 클릭률 등 데이터 기반 보고서 작성
            </li>
          </span>
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="text-lg font-bold">
            온라인(PC/MO), 오프라인 광고 집행
          </span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
            <li>
              네이버, 카카오, 메타, 네트워크 매체, 지하철광고 등 다양한 매체
              집행
            </li>
            <li>렙사와 협업하여 효율적인 광고 캠페인 운영</li>
          </span>
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="text-lg font-bold">
            연간 프로모션 캠페인 기획 및 브랜드 소셜 미디어 운영
          </span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
            <li>분기별 프로모션 기획, 예산 관리, 광고물 심의 진행</li>
            <li>
              인플루언서 협업 및 바이럴 광고 집행, 월간 소셜 미디어 콘텐츠
              캘린더 운영
            </li>
          </span>
        </div>
      </div>
      <Divider gap={30} />
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
    </section>
  );
};

export default OtherExperience;
