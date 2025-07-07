import Divider from "./ui/Divider";
import Spacer from "./ui/Spacer";
import TextChip from "./ui/TextChip";

const OtherExperience = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary mb:text-xl mb:bg-gradient-to-r mb:from-light mb:to-light2 mb:rounded-[5px] mb:px-2 mb:mt-10">
        Other Experiences
      </h2>
      <Spacer height={30} className="mb:hidden" />
      <div className="flex flex-col gap-[25px]">
        <span className="text-2xl font-bold mb:text-lg mb:mt-5">
          (주)윤회 - 프론트엔드 개발 인턴
        </span>
        <span className="text-xl font-bold mb:text-sm">2025.03 - 2025.03</span>
        <div className="flex flex-col gap-[10px]">
          <span className="text-lg leading-[1.5] mb:text-sm">
            의류 제품의 라벨에 있는 디지털제품여권(DPP) QR 코드 스캔 시 연결되는
            랜딩 페이지를 개발했습니다. 각각 다른 요구사항을 가진 수많은 브랜드
            페이지를 일관적, 효율적으로 개발할 수 있는 시스템을 설계 및
            개발했습니다.
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-xl font-bold mb:text-sm">[담당 역할]</span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
            <li>
              협업 브랜드별 톤앤매너에 맞는 랜딩 페이지 Figma 디자인 및 React
              개발
            </li>
            <li>
              여러 페이지를 쉽게 생성할 수 있는 JSON 구조 기반 렌더링 시스템
              설계
            </li>
            <li>
              반복적인 코드 작성 최소화, 확장/재사용 가능한 공통 컴포넌트 개발,
              기존 컴포넌트 개선
            </li>
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-xl font-bold mb:text-sm">[성과 및 배운점]</span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
            <li>
              업무 몰입도, 원활한 커뮤니케이션 능력, 문제 발견 및 개선 역량에서
              좋은 평가를 받음
            </li>
            <li>
              유연하고 확장 가능하며 협업과 사용성을 고려한 공통 컴포넌트 개발
              경험
            </li>
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-xl font-bold mb:text-sm">[기술 스택]</span>
          <span className="flex gap-[7px] mb:flex-wrap">
            <TextChip text="React" type="mb" />
            <TextChip text="TypeScript" type="mb" />
            <TextChip text="Zustand" type="mb" />
            <TextChip text="Styled-Components" type="mb" />
            <TextChip text="Git" type="mb" />
            <TextChip text="Figma" type="mb" />
          </span>
        </div>
        <Divider gap={0} />
        <span className="text-2xl font-bold mb:text-lg">
          내일배움캠프 React 6기 - 담임매니저 (Assistant PM)
        </span>
        <span className="text-xl font-bold mb:text-sm">2024.06 - 2024.11</span>
        <div className="flex flex-col gap-[10px]">
          <span className="text-lg leading-[1.5] mb:text-sm">
            React 6기에서 담당 PM님을 서포트하고 튜터진과 긴밀히 협업하며
            사전캠프와 본캠프의 운영을 도왔습니다. 트랙 전체를 미리 경험해 본
            선배로서 수강생이 겪는 기술적 어려움과 직무 관련 고민에 대한 조언과
            지원을 제공했습니다. 수강생 이벤트를 기획 및 진행했고, 최종프로젝트
            주간에는 성공적인 팀 협업을 위한 세션도 진행했습니다.
          </span>
        </div>
      </div>
      <Divider gap={20} />
      <div className="flex flex-col gap-[25px]">
        <span className="text-2xl font-bold mb:text-lg">
          (주)디브컴퍼니 - 기획팀 책임
        </span>
        <span className="text-xl font-bold mb:text-sm">2021.09 - 2023.06</span>
        <div className="flex flex-col gap-[5px]">
          <span className="text-lg font-bold mb:text-sm">
            랜딩페이지 개발 기획, 프로모션 캠페인 기획, 집행, 보고
          </span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
            <li>
              금융, 제약, 가전 계열 고객사, 디자인팀, 개발팀과 긴밀히 소통 및
              협업
            </li>
            <li>
              스토리보드 작성, 프로젝트 전체 일정 관리, 요구사항 정리, 오픈 전
              테스트 수행, 오픈 후 구글애널리틱스 유저 행동 데이터 분석
            </li>
          </span>
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="text-lg font-bold mb:text-sm">
            온라인(PC/MO), 오프라인 광고 집행
          </span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
            <li>
              렙사와 협업하여 네이버, 카카오, 메타, 네트워크 매체, 지하철광고 등
              다양한 매체 집행
            </li>
            <li>
              광고 기획, 예산 관리, 광고물 심의 진행, 인플루언서 협업, 브랜드
              소셜미디어 콘텐츠 운영
            </li>
          </span>
        </div>
      </div>
    </section>
  );
};

export default OtherExperience;
