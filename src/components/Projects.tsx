import ColoredText from "./ui/ColoredText";
import Divider from "./ui/Divider";
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
            className="underline text-2xl font-bold hover:text-secondary transition-colors duration-300"
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
              빠른 시작 기능인만큼{" "}
              <ColoredText text="간결하고 직관적인 액션 플로우" />를 구현하는 데
              초점을 맞춰{" "}
              <ColoredText
                text="채팅형 인터페이스를 통해 사용자에게 개인화된 경험을
              제공"
              />
              하면서 신청 프로세스를 쉽게 따라갈 수 있도록 설계했습니다.
            </span>
            <span className="text-lg leading-[1.5]">
              개발 과정에서 고민한 주요 지점은,{" "}
              <ColoredText
                text="사용자의 입력값과 인터페이스
              상태를 효율적으로 관리"
              />
              하며, 앞뒤로 페이지를 이동하거나 로그인 후 리디렉션 될 때도{" "}
              <ColoredText text="데이터가 유실되지 않도록 보장" />
              하는 방법이었습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[상세 내용]</span>
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
                  ①채팅 로그 UI 렌더링에 필요한 상태와 ②서버에 전달될 실제
                  사용자 입력값 관리에 필요한 상태를 각각 zustand 전역 상태로
                  관리하여 페이지 이동 시에도 기존 입력값과 채팅 로그가 유지되고
                  사용자가 흐름을 이어갈 수 있도록 구현
                </li>
              </span>
            </div>
          </div>
          <Divider gap={10} />
          <span className="text-2xl font-bold">
            멘토의 면접 리포트 작성 기능, 멘티의 리포트 조회 기능 개발
          </span>
          <span className="text-xl font-bold">2024.09 - 2024.10</span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5]">
              리포트 작성은 과정이 길고 응답 항목이 많아 작성 도중 데이터가
              유실되거나 사용자가 현재 진행 상황을 직관적으로 파악하기 어려울 수
              있습니다. 이에{" "}
              <ColoredText
                text="임시저장, 불러오기, 진행상황 표시, 문항 비활성화
              토글 기능"
              />
              을 구현하여 작성 흐름을 최적화했습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[상세 내용]</span>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">리포트 작성 구현</span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  isFinal값 활용하여 작성 내용을 서버에 임시저장, 최초 렌더링시
                  useEffect로 저장 데이터 불러오거나 저장 내용이 없는 경우
                  초기화, 입력값 제한과 유효성 검증으로 데이터 안정성 강화
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">리포트 조회 구현</span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  로딩, 캐싱 및 에러 상태를 직관적으로 처리할 수 있는 Tanstack
                  Query를 사용해 서버에서 리포트 데이터 조회, 사용자가 쉽게
                  이해할 수 있도록 구조화된 리포트 UI 구현
                </li>
              </span>
            </div>
          </div>
          <Divider gap={10} />
          <span className="text-2xl font-bold">
            사용자 맞춤형 기능 설계 밎 구현
          </span>
          <span className="text-xl font-bold">2024.09 - 2025.10</span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5]">
              사용자 경험을 최우선으로 고려해 주요 기능을 구현했습니다. 멘토
              필터링에서는 사용자가{" "}
              <ColoredText
                text="어떤 조건으로 검색해야 자신의 니즈에
              부합하는 결과를 얻을 수 있을지"
              />
              를 중점적으로 고민했습니다. 또한, 멘토 리스트와 상세 페이지에서
              관심 있는 멘토를 북마크하고,{" "}
              <ColoredText
                text="북마크
              페이지에서 이를 한눈에 모아서 볼 수 있도록 구현"
              />
              해 사용자 편의성을 높였습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[상세 내용]</span>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                멘토 검색 필터링, 멘토 북마크 기능
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  실시간 검색 입력 시 성능 저하 및 사용자 경험 저하 가능성이
                  있으므로, 디바운싱 적용해 불필요한 API 호출을 줄이고 검색
                  성능을 개선
                </li>
                <li>
                  북마크 추가/삭제 시 인터페이스에 지연이 발생하거나 데이터
                  불일치 문제를 방지하여 안정적인 경험을 제공하기 위해 낙관적
                  업데이트 적용
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                마이페이지 : (멘티)리뷰 작성하기, (멘토)정산 리스트
              </span>
            </div>
          </div>
          <Divider gap={10} />
          <span className="text-2xl font-bold">
            운영 및 관리 기능 설계 및 구현
          </span>
          <span className="text-xl font-bold">2024.11 - 진행중</span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5]">
              관리자와 사용자 간의 원활한 소통과 서비스 운영의 효율성을
              증진시키는 고객센터 페이지와 관리자 페이지를 개발했습니다.
              고객센터 페이지에 있는 공지사항이나 자주묻는질문(FAQ)는 관리자
              페이지에서 작성, 등록, 삭제, 공개 설정이 가능합니다. 특히 관리자
              페이지는{" "}
              <ColoredText
                text="권한이 있는 사용자만 접근할 수 있도록 제어하고, 세션을
              안정적으로 유지"
              />
              하는 것이 중요했습니다. 관리자 페이지 기능 기획과 구현을 현재까지
              진행 중에 있습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[상세 내용]</span>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">고객센터 페이지</span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  공지사항 항목이 많아질 수 있으므로 페이지네이션 적용하여
                  데이터를 단계적으로 불러오도록 적용, 공지 상세내용에서 뒤로
                  가기 시 보고 있던 페이지를 유지하기 위해 쿼리 파라미터에
                  페이지 표시
                </li>
                <li>
                  문의하기 페이지에서 첨부파일 업로드 시 보안과 서버 부하 문제를
                  해결하기 위해 서버가 발급한 presignedUrl을 활용하여
                  클라이언트가 S3에 파일을 업로드하도록 구현
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">관리자 페이지</span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  최상위 layout에 로그인 상태와 사용자 역할을 확인 후 리디렉션
                  처리하는 커스텀 훅 적용
                </li>
                <li>
                  API 호출 응답으로 accessToken을 받고, refreshToken은 쿠키에
                  저장하여 로그인 유지
                </li>
                <li>
                  별도 디자인 없이 Headless UI 활용하여 통일성 있는 UI를
                  효율적으로 구현
                </li>
              </span>
            </div>
            <Divider gap={10} />
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[성과 및 배운점]</span>
            <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
              <li>
                Next.js 환경의 비즈니스 로직 개발 경험, REST API를 통해 백엔드와
                효과적인 상호작용
              </li>
              <li>
                다양한 문제를 정의하고, 이를 해결하기 위한 최적의 기술 스택과
                로직 설계 경험
              </li>
              <li>
                로컬/전역 state 관리와 Tanstack Query를 활용한 데이터 캐싱,
                에러처리, 쿼리 키에 대한 이해도 향상
              </li>
              <li>
                Desktop, Tablet, Mobile 환경에서 일관된 사용자 경험 제공을 위한
                반응형 디자인 적용
              </li>
              <li>
                백엔드, 디자이너와 협업하며 커뮤니케이션 역량 향상, 비정기적
                코드 리뷰를 통해 코드 품질 향상 경험
              </li>
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

      <Divider gap={30} />
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
        </div>
        {/* 오른쪽 영역 */}
        <div className="w-[80%] flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5]">
              React 트랙 최종프로젝트로, 외국인 학습자들을 위한 한국어 학습
              서비스입니다. 퀴즈 만들기 에디터를 통해 직접 퀴즈를 만들어
              공유하고 산성비 타자연습 게임에 도전하며 재미있게 공부할 수
              있습니다. 팀장으로서 기능 구현 외 일정 관리, 회의 주도, 디자이너
              협업, 업무 분담, 문서화,{" "}
              <a
                href="https://drive.google.com/file/d/16hzDt-Ets0zEcPZNXJb4SEU3URnYKHI5/view?usp=sharing"
                target="_blank"
                className="underline hover:text-secondary transition-colors duration-300 font-bold"
              >
                유저테스트 보고서
              </a>{" "}
              작성, 발표 진행 등을 맡았습니다.
            </span>
            <span className="text-lg leading-[1.5]">
              퀴즈 만들기 에디터를 MVP로 잡고 기획했으며, 사용자 경험과 안정적인
              사용성을 최우선으로 고려했습니다. 타겟 유저층이 외국인이기 때문에
              다국어 지원 또한 필수 요구사항이었습니다. 또한 게임 콘텐츠가 있기
              때문에 적절한 오디오 컨트롤 기능도 필요했습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[상세 내용]</span>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                퀴즈 만들기 에디터 기능 개발
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  <ColoredText text="정규화 원칙을 지켜 효율적이고 직관적인 데이터 관리" />
                  가 가능하도록 퀴즈집(quizzes), 문제(questions),
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
              <span className="text-lg font-bold">다국어 설정 토글 구현</span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  <ColoredText text="단순 영어/한국어 전환만 필요" />
                  하고, 라우팅이나 고급 국제화 기능이 필요하지 않은 간단한
                  요구사항에 따라 외부 라이브러리 사용하지 않고{" "}
                  <ColoredText text="키-값 언어쌍 상수를 활용해 커스텀 훅" />
                  으로 구현
                </li>
                <li>
                  전역으로 관리하는 상태가 언어 설정과 로그인 상태 두 가지만
                  있어서{" "}
                  <ColoredText text="Zustand보다 가볍고 보일러플레이트가 더 적은 Jotai" />
                  를 채용, Atom으로 설정 관리
                </li>
                <li>
                  <ColoredText text="새로고침 시 언어 설정 유지" />를 위해
                  클라이언트와 서버 모두에서 접근 가능한 쿠키에 설정을 저장
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">퀴즈 리스트 페이지</span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  리액트 훅으로 직접 구현하는 것보다 캐싱 및 에러 처리, 로딩
                  상태 관리 등을 용이하게 해주는{" "}
                  <ColoredText
                    text="useInfiniteQuery로 무한스크롤
                  적용"
                  />
                  하여 데이터 로딩 시간 분산
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                한글 자모 학습 페이지 & 산성비 게임 오디오 처리
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
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold">
                유저 테스트 피드백 반영 및 성능 개선
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
                <li>
                  유저테스트 피드백 현황판 만들어 관리,{" "}
                  <ColoredText text="약 100개 피드백 중 37개" />
                  반영하여 사용자 경험 향상
                </li>
                <li>
                  레이아웃 쉬프트 개선, 접근성 개선, gif 로딩 이미지 크기 축소
                </li>
                <li>
                  프로젝트 중반 Lighthouse 기준 퍼포먼스 41, 접근성 87 → 최종{" "}
                  <ColoredText text="퍼포먼스 93, 접근성 94" />로 개선
                </li>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[성과 및 배운점]</span>
            <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
              <li>React 4기 트랙 최우수 프로젝트 선정</li>
              <li>
                기획 후 개발 과정을 거쳐 유저테스트 피드백 반영, 성능 개선까지
                경험
              </li>
              <li>
                개발자 외 디자이너와 협업하며 효율적인 프로젝트 관리와
                커뮤니케이션 방법 훈련
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

export default Projects;
