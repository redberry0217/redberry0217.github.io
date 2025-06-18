import { FaGithub } from "react-icons/fa";
import ColoredText from "./ui/ColoredText";
import Divider from "./ui/Divider";
import Spacer from "./ui/Spacer";
import TextChip from "./ui/TextChip";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { IoArrowRedoCircleSharp } from "react-icons/io5";

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
              href="https://mmeasy.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px]"
            >
              <IoArrowRedoCircleSharp className="w-full h-full" />
            </a>
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
              만들어 공유하고 산성비 타자연습 게임으로 한국어를 공부하는
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
              를 담당했습니다.
            </span>
          </div>
          <Divider gap={0} />
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[담당 역할]</span>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold bg-light w-fit">
                <ColoredText text="퀴즈 만들기 에디터 기능 개발" />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  <ColoredText text="정규화 원칙" />에 맞게 퀴즈집, 문제, 객관식
                  선택지를 각각의 테이블로 분리하여 데이터 관리 최적화
                </li>
                <li>
                  문제/선택지 개수 제한과 입력 유효성 검증, 이미지 미첨부 시
                  기본이미지 사용,{" "}
                  <ColoredText text="안정적인 퀴즈 생성 보장" />
                </li>
                <li>
                  '등록하기' 버튼 연속 클릭으로 인한 중복 요청 차단, 페이지 이탈
                  시 경고하여 작업 데이터 보호
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold bg-light w-fit">
                <ColoredText text="다국어 설정 토글 구현" />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  간단한 한국어/영어 전환 요구사항에 맞춰 라이브러리 없이{" "}
                  <ColoredText text="커스텀 훅" />
                  으로 경량화 구현
                </li>
                <li>
                  다른 상태관리 라이브러리보다 가볍고 보일러플레이트가 적은{" "}
                  <ColoredText text="Jotai" /> Atom으로 언어 설정 관리
                </li>
                <li>
                  <ColoredText text="새로고침 시 언어 설정 유지" />를 위해
                  클라이언트와 서버 모두에서 접근 가능한 쿠키에 설정을 저장
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold bg-light w-fit">
                <ColoredText text="한글 자모 학습 페이지 & 산성비 게임 오디오 처리" />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  Next.js SSR 환경에서 오디오 처리 문제 →{" "}
                  <ColoredText text="클라이언트 컴포넌트" />,{" "}
                  <ColoredText text="브라우저 환경 확인 조건문" /> 활용
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-lg font-bold bg-light w-fit">
                <ColoredText text="유저 테스트 피드백 반영 및 성능 개선" />
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  유저테스트 피드백 현황판 운영,{" "}
                  <ColoredText text="약 100개 피드백 중 37개" /> 반영
                </li>
                <li>
                  이미지가 포함된 퀴즈 리스트에{" "}
                  <ColoredText text="무한스크롤" /> 적용하여 매끄러운 사용자
                  경험과 성능 개선
                </li>
                <li>
                  Layout Shift/접근성 개선, 이미지 최적화 후 Lighthouse 기준
                  퍼포먼스 41 → <ColoredText text="93" />, 접근성 87 →{" "}
                  <ColoredText text="94" />
                </li>
              </span>
            </div>
          </div>
          <Divider gap={0} />
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[성과 및 배운점]</span>
            <span className="flex flex-col gap-[5px] text-lg leading-[1.5] pb-[15px]">
              <li>
                React 4기 트랙 <ColoredText text="최우수 프로젝트" /> 선정
              </li>
              <li>
                Next.js SSR 환경에서 브라우저 API 사용 방법 고민, SSR과 CSR,
                ISR, SSG의 역할과 한계점 이해
              </li>
              <li>
                유저 테스트 후 피드백 반영, 성능 개선하며 사용자 중심 설계 경험
              </li>
              <li>
                정규화된 DB 설계, 외래키 관리, 입력값 유효성 체크 등을 직접
                구현하며 안정적인 서비스 설계 역량 향상
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
