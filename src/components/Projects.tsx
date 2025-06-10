import Spacer from "./ui/Spacer";
import TextChip from "./ui/TextChip";

const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary">Projects</h2>
      <Spacer height={30} />
      <div className="flex gap-[40px]">
        {/* 왼쪽 영역 */}
        <div className="w-[20%] flex flex-col gap-[25px] select-none">
          <a
            href="https://winterview.io"
            target="_blank"
            className="text-2xl font-bold hover:text-secondary transition-colors duration-300"
            rel="noopener noreferrer"
          >
            이기는 인터뷰
          </a>
          <div className="flex flex-col">
            <span className="text-md leading-[1.2]">
              프론트엔드 개발
              <br />
              2024. 08 - 진행중
            </span>
          </div>
        </div>
        {/* 오른쪽 영역 */}
        <div className="w-[80%] flex flex-col gap-[25px]">
          <span className="text-2xl font-bold">
            '지금 바로 이용하기(빠른 시작)' 기능 개발
          </span>
          <span className="text-xl font-bold">2025.04 - 2025.05</span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5]">
              기존 유저 액션 플로우도 안정적으로 작동하고 있지만, 서비스 이용
              진입장벽을 낮추고 이탈률을 줄이기 위해 메인 페이지에서 바로 접근
              가능한 '지금 바로 시작하기' 기능을 새롭게 개발했습니다.
            </span>
            <span className="text-lg leading-[1.5]">
              빠른 시작 기능인만큼 간결하고 직관적인 액션 플로우를 구현하는 데
              초점을 맞춰 채팅형 인터페이스를 통해 사용자에게 개인화된 경험을
              제공하면서 신청 프로세스를 쉽게 따라갈 수 있도록 설계했습니다.
            </span>
            <span className="text-lg leading-[1.5]">
              개발 과정에서 고민한 주요 지점은, 사용자의 입력값과 인터페이스
              상태를 효율적으로 관리하며, 앞뒤로 페이지를 이동하거나 로그인 후
              리디렉션 될 때도 데이터가 유실되지 않도록 보장하는 방법이었습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[담당 역할]</span>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                사용자 경험 개선을 위한 단계별 페이지 라우팅
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  원하는 조건 선택 → 조건에 맞는 멘토 검색 결과 확인 → 선택한
                  멘토와 스케줄 조율 및 최종 결제
                </li>
                <li>
                  한 페이지에서 처리하지 않고 3개의 단계별 페이지로 라우팅하고,
                  모달 병행해 구현
                </li>
                <li>
                  멘토 결과 페이지에서 멘토별 상세 정보는 모달 활용하여 화면
                  전환 없이 빠르게 확인 가능하도록 구현
                </li>
                <li>
                  사용자가 비로그인 상태인 경우 로그인페이지로 이동, 로그인 완료
                  후 로직상 메인 페이지로 리디렉션 되는 문제 : pathname을
                  localStorage에 저장하여 로그인 후 최종 단계 페이지로 리디렉션
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                인터랙티브한 채팅 인터페이스 설계
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  (1)채팅 로그 UI 렌더링에 필요한 상태와 (2)서버에 전달될 실제
                  사용자 입력값 관리에 필요한 상태를 각각 zustand 전역 상태로
                  관리하여 페이지 이동 시에도 기존 입력값과 채팅 로그가 유지되어
                  사용자가 흐름을 이어갈 수 있도록 구현
                </li>
                <li>type</li>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[성과 및 배운점]</span>
            <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
              <li>
                업무 몰입도, 원활한 커뮤니케이션 능력, 문제 발견 및 개선 역량
                우수 평가
              </li>
              <li>
                유연하고 확장 가능하며 협업과 사용성을 고려한 공통 컴포넌트 개발
                경험
              </li>
              <li>프로젝트 기획 및 아이데이션 역량 강화</li>
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[기술 스택]</span>
            <span className="flex gap-[7px]">
              <TextChip text="Next.js" />
              <TextChip text="TypeScript" />
              <TextChip text="Zustand" />
              <TextChip text="Tailwind CSS" />
              <TextChip text="Tanstack Query" />
              <TextChip text="Figma" />
              <TextChip text="Postman" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
