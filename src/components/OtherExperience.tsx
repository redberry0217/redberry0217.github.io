import Divider from "./ui/Divider";
import Spacer from "./ui/Spacer";
import TextChip from "./ui/TextChip";

const OtherExperience = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary">Other Experiences</h2>
      <Spacer height={30} />
      <div className="flex flex-col gap-[25px]">
        <span className="text-2xl font-bold">
          (주)윤회 - 프론트엔드 개발 인턴
        </span>
        <span className="text-xl font-bold">2025.03 - 2025.03</span>
        <div className="flex flex-col gap-[10px]">
          <span className="text-lg leading-[1.5]">
            의류 제품의 라벨에 있는 DPP QR 코드 스캔 시 연결되는 랜딩 페이지를
            개발하며 사용자 경험과 효율적인 페이지 확장성을 중점적으로
            고려했습니다. 여러 브랜드의 특성을 반영한 유연하고 일관된 랜딩
            페이지 시스템을 구축했습니다.
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-xl font-bold">[담당 역할]</span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
            <li>협업 브랜드별 톤앤매너에 맞는 랜딩 페이지 디자인 및 개발</li>
            <li>
              여러 페이지를 효율적으로 생성할 수 있는 동적 렌더링 시스템 설계
            </li>
            <li>반복적인 코드 작성 최소화 및 확장 가능한 공통 컴포넌트 개발</li>
            <li>예외 처리와 스타일링 문제를 개선하여 코드의 유지보수성 강화</li>
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-xl font-bold">[성과 및 배운점]</span>
          <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
            <li>
              업무 몰입도, 원활한 커뮤니케이션 능력, 문제 발견 및 개선 역량 우수
              평가
            </li>
            <li>
              유연하고 확장 가능하며 협업과 사용성을 고려한 공통 컴포넌트 개발
              경험
            </li>
            <li>요구사항 분석 및 협업 능력 강화</li>
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-xl font-bold">[기술 스택]</span>
          <span className="flex gap-[7px]">
            <TextChip text="React" />
            <TextChip text="TypeScript" />
            <TextChip text="Zustand" />
            <TextChip text="Styled-Components" />
            <TextChip text="Git" />
            <TextChip text="Figma" />
          </span>
        </div>
        <Divider gap={10} />
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
    </section>
  );
};

export default OtherExperience;
