import { FaGithub } from "react-icons/fa";
import ColoredText from "./ui/ColoredText";
import Divider from "./ui/Divider";
import Spacer from "./ui/Spacer";
import TextChip from "./ui/TextChip";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

const Mmeasy = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary">Project</h2>
      <Spacer height={30} />
      <div className="flex gap-[40px]">
        {/* 왼쪽 영역 */}
        <div className="w-[20%] flex flex-col gap-[25px] select-none">
          <a
            href="https://mmeasy.kr"
            target="_blank"
            className="underline text-2xl font-bold hover:text-secondary transition-colors duration-300"
            rel="noopener noreferrer"
          >
            뭔말easy?
          </a>
          <div className="flex flex-col">
            <span className="text-md leading-[1.2]">
              팀장
              <br />
              프론트엔드 개발
              <br />
              2024. 04 - 2024. 05
            </span>
          </div>
          <div className="flex gap-[10px] items-center h-[30px]">
            <a
              href="https://github.com/mm-easy/mm-easy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[25px] h-[25px]"
            >
              <FaGithub className="w-full h-full" />
            </a>
            <a
              href="https://ballistic-backpack-266.notion.site/easy-21141f26d76380f183fcfaa3ffc1c442"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px]"
            >
              <MdPlaylistAddCheckCircle className="w-full h-full" />
            </a>
          </div>
        </div>
        {/* 오른쪽 영역 */}
        <div className="w-[80%] flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5]">
              React 트랙 최종프로젝트로, 퀴즈 만들기 에디터를 통해 직접 퀴즈를
              만들어 공유하고 산성비 타자연습 게임에 도전하며 한국어를 공부하는
              서비스입니다. 팀장으로서 기능 구현 외 일정 관리, 회의 주도,
              디자이너 협업, 업무 분담,{" "}
              <a
                href="https://ballistic-backpack-266.notion.site/easy-21141f26d76380f183fcfaa3ffc1c442"
                target="_blank"
                className="underline hover:text-secondary transition-colors duration-300 font-bold"
              >
                문서화
              </a>
              ,{" "}
              <a
                href="https://drive.google.com/file/d/16hzDt-Ets0zEcPZNXJb4SEU3URnYKHI5/view?usp=sharing"
                target="_blank"
                className="underline hover:text-secondary transition-colors duration-300 font-bold"
              >
                유저테스트 보고서
              </a>{" "}
              작성,{" "}
              <a
                href="https://www.youtube.com/watch?v=6QMFAOoennE"
                target="_blank"
                className="underline hover:text-secondary transition-colors duration-300 font-bold"
                rel="noopener noreferrer"
              >
                발표
              </a>{" "}
              진행 등을 맡았습니다.
            </span>
            <span className="text-lg leading-[1.5]">
              퀴즈 만들기 에디터를 MVP로 잡고 기획했으며, 사용자 경험과 안정적인
              사용성을 최우선으로 고려했습니다. 타겟 유저층이 외국인이기 때문에
              다국어 지원 또한 필수 요구사항이었습니다. 또한 게임 콘텐츠가 있기
              때문에 적절한 오디오 컨트롤 기능도 필요했습니다.
            </span>
          </div>
          <Divider gap={0} />
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[담당 역할]</span>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                <ColoredText
                  text="퀴즈 만들기 에디터 기능 개발"
                  color="purple"
                />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  <ColoredText text="정규화 원칙" />을 지켜 효율적이고 직관적인
                  데이터 관리가 가능하도록 퀴즈집(quizzes), 문제(questions),
                  선택지(options)를 각각의 테이블로 관리하고, 외래키로 연결
                </li>
                <li>
                  <ColoredText text="안정적인 퀴즈 생성을 보장" />
                  하기 위해 문제와 선택지의 최대/최소 개수를 제한, 꼼꼼한 유효성
                  검증을 통해 안정성 확보, 사용자의 부담을 줄이고 레이아웃
                  일관성을 유지하기 위해 이미지 미첨부 시 기본 이미지 적용
                </li>
                <li>
                  퀴즈 작성 입력 데이터는 단일 페이지 내에서만 사용된 후
                  Supabase에 저장되므로 로컬 state로 관리
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                <ColoredText text="다국어 설정 토글 구현" color="purple" />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  단순 영어/한국어 전환만 필요하고, 라우팅이나 고급 국제화
                  기능이 필요하지 않은 간단한 요구사항에 따라 외부 라이브러리
                  사용하지 않고{" "}
                  <ColoredText text="키-값 언어쌍 상수를 활용해 커스텀 훅" />
                  으로 구현
                </li>
                <li>
                  전역으로 관리하는 상태가 언어 설정과 로그인 상태 두 가지만
                  있어서 Zustand보다 가볍고 보일러플레이트가 더 적은{" "}
                  <ColoredText text="Jotai" />를 채용, Atom으로 설정 관리
                </li>
                <li>
                  <ColoredText text="새로고침 시 언어 설정 유지" />를 위해
                  클라이언트와 서버 모두에서 접근 가능한 쿠키에 설정을 저장
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                <ColoredText text="퀴즈 리스트 페이지" color="purple" />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  리액트 훅으로 직접 구현하는 것보다 캐싱 및 에러 처리, 로딩
                  상태 관리 등을 용이하게 해주는{" "}
                  <ColoredText text="useInfiniteQuery로 무한스크롤 적용" />
                  하여 데이터 로딩 시간 분산
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                <ColoredText
                  text="한글 자모 학습 페이지 & 산성비 게임 오디오 처리"
                  color="purple"
                />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  오디오는 브라우저 환경에서 사용자의 상호작용으로 처리되어
                  Next.js의 서버사이드 렌더링 환경에서 다루기 어려운 문제 →{" "}
                  <ColoredText text="클라이언트 컴포넌트" />
                  에서 클릭하여 오디오 객체를 생성하거나,{" "}
                  <ColoredText text="브라우저 환경" />
                  임을 확인 한 후 오디오 객체를 생성 하도록 구현
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-lg font-bold">
                <ColoredText
                  text="유저 테스트 피드백 반영 및 성능 개선"
                  color="purple"
                />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  유저테스트 피드백 현황판 만들어 관리,{" "}
                  <ColoredText text="약 100개 피드백 중 37개" /> 반영하여 사용자
                  경험 향상
                </li>
                <li>
                  레이아웃 쉬프트 개선, 접근성 개선, gif 이미지 크기 축소하여
                  프로젝트 중반 Lighthouse 기준 퍼포먼스 41, 접근성 87 → 최종{" "}
                  <ColoredText text="퍼포먼스 93, 접근성 94" />로 개선
                </li>
              </span>
            </div>
          </div>
          <Divider gap={0} />
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[성과 및 배운점]</span>
            <span className="flex flex-col gap-[5px] text-lg leading-[1.5] pb-[15px]">
              <li>React 4기 트랙 최우수 프로젝트 선정</li>
              <li>
                Next.js SSR 환경에서 브라우저 API 사용 방법 고민, SSR과 CSR,
                ISR, SSG의 역할과 한계점 이해
              </li>
              <li>
                유저 테스트 후 피드백 반영, 성능 개선하며 사용자 중심 설계 경험
              </li>
              <li>
                정규화된 DB 설계, 외래키 관리, 입력값 유효성 체크 등을 직접
                구현하며 안정적인 서비스 설계 역량 키움
              </li>
              <li>
                개발 뿐 아니라 디자이너와 협업 및 팀장 역할을 수행하며 소통과
                조율 역량 향상
              </li>
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[기술 스택]</span>
            <span className="flex gap-[7px]">
              <TextChip text="Next.js" />
              <TextChip text="TypeScript" />
              <TextChip text="Jotai" />
              <TextChip text="Tailwind CSS" />
              <TextChip text="Tanstack Query" />
              <TextChip text="Figma" />
              <TextChip text="Jira" />
              <TextChip text="Supabase" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mmeasy;
