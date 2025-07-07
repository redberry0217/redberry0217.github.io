import { IoArrowRedoCircleSharp } from "react-icons/io5";
import ColoredText from "./ui/ColoredText";
import Divider from "./ui/Divider";
import Spacer from "./ui/Spacer";
import TextChip from "./ui/TextChip";

const Winterview = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary mb:text-xl mb:bg-gradient-to-r mb:from-light mb:to-light2 mb:rounded-[5px] mb:px-2 mb:mt-5">
        Work Experience
      </h2>
      <Spacer height={30} className="mb:hidden" />
      <div className="flex gap-[40px] mb:flex-col mb:gap-[20px]">
        {/* 왼쪽 영역 */}
        <div className="w-[20%] flex flex-col gap-[25px] select-none mb:w-full mb:gap-[15px] mb:border mb:border-gray-200 mb:rounded-[5px] mb:p-3 mb:mt-5">
          <a
            href="https://winterview.io"
            target="_blank"
            className="underline text-2xl font-bold hover:text-secondary transition-colors duration-300 mb:text-lg"
            rel="noopener noreferrer"
          >
            이기는 인터뷰, <br className="mb:hidden" />
            Winterview
          </a>
          <div className="flex flex-col">
            <span className="text-md leading-[1.2] mb:text-sm">
              프론트엔드 개발
              <br />
              2024. 08 - 진행중
            </span>
          </div>
          <div className="flex gap-[10px] items-center h-[30px]">
            <a
              href="https://winterview.io"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px]"
            >
              <IoArrowRedoCircleSharp className="w-full h-full" />
            </a>
          </div>
        </div>
        {/* 오른쪽 영역 */}
        <div className="w-[80%] flex flex-col gap-[20px] mb:w-full">
          <span className="text-lg leading-[1.5] mb:text-sm">
            취업준비생이 경력 인증된 현직자와 실시간 모의면접, 이력서/포트폴리오
            리뷰, 커피챗을 통해 최종 합격을 준비할 수 있도록 돕고, 현직자에게는
            자신의 경험과 역량을 활용하여 부수입을 얻을 기회를 제공하는
            서비스입니다. 오픈된 서비스로 현재 포털에서도 검색 가능하며, 온라인
            마케팅 진행 중입니다.
          </span>
          <Divider gap={0} />
          <span className="text-2xl font-bold mb:text-lg">
            <ColoredText text="'지금 바로 이용하기' 개발" color="purple" />
          </span>
          <span className="text-xl font-bold mb:text-sm">
            2025.04 - 2025.05
          </span>
          <div className="flex flex-col gap-[10px]">
            {/* <span className="text-lg leading-[1.5]">
              기존 유저 액션 플로우도 안정적으로 작동하고 있지만, 서비스 이용
              진입장벽을 낮추고 이탈률을 줄이기 위해 메인 페이지에서 바로 접근
              가능한 '지금 바로 시작하기' 기능을 새롭게 개발했습니다.
            </span>
            <span className="text-lg leading-[1.5]">
              빠른 시작 기능인만큼 간결하고 직관적인 액션 플로우를 구현하는 데
              초점을 맞춰 채팅형 인터페이스를 통해 사용자에게 개인화된 경험을
              제공하면서 신청 프로세스를 쉽게 따라갈 수 있도록 설계했습니다.
            </span> */}
            <span className="text-lg leading-[1.5] mb:text-sm">
              간결하고 직관적인 사용자 경험을 위해 채팅형 인터페이스를 설계 및
              구현했습니다. 주요 고민 지점은{" "}
              <ColoredText text="사용자 입력값과 UI 상태를 효율적으로 관리" />
              하고, 페이지 이동이나 로그인 후에도{" "}
              <ColoredText text="데이터가 유실되지 않도록 보장" />
              하는 것이었습니다. 이를 위해 다음과 같은 접근을 시도했습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold bg-light w-fit mb:text-sm">
                채팅 로그 상태 관리 및 동적 UI 렌더링
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
                <li>
                  Zustand 전역 state로 사용자 입력값과 채팅 로그를 관리, 페이지
                  이동 후 데이터 유실 없이 흐름 유지
                </li>
                <li>
                  사용자 응답에 따라 로그 state에 항목을 추가하며 채팅 로그가
                  쌓이는 형태를 구현
                </li>
                <li>
                  항목의 타입(Question, Answer)에 따라 동적으로 말풍선 스타일
                  적용
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold bg-light w-fit mb:text-sm">
                사용자의 응답 선택 및 입력 처리
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
                <li>
                  미응답 시 다음 단계로 넘어가지 못하도록 제한, 선택사항은
                  건너뛸 수 있도록 구현해 사용성 향상
                </li>
                <li>
                  사용자가 응답을 수정하는 경우 해당 질문 이후의 로그 state를
                  초기화하여 응답이 중복되지 않도록 구현
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-lg font-bold bg-light w-fit mb:text-sm">
                인증 및 결제 프로세스
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
                <li>
                  비로그인 시 pathname을 localStorage에 저장, 로그인 후 진행
                  중이던 페이지로 리디렉션 되도록 처리
                </li>
              </span>
            </div>
          </div>
          <Divider gap={0} />
          <span className="text-2xl font-bold mb:text-lg">
            <ColoredText text="면접 리포트 작성/조회 개발" color="purple" />
          </span>
          <span className="text-xl font-bold mb:text-sm">
            2024.09 - 2024.10
          </span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5] mb:text-sm">
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
            <div className="flex flex-col gap-[10px]">
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
                <li>
                  최초 렌더링시 useEffect로 임시저장 데이터 불러오거나 저장
                  내용이 없는 경우 초기화
                </li>
                <li>
                  미응답 항목, 단답형 최소 답변 개수, 필수 선택값 검증 후 최종
                  제출
                </li>
                <li>
                  제출 후 router.replace() 통해 라우팅, 작성페이지로 재접근 제한
                </li>
              </span>
            </div>
          </div>
          <Divider gap={0} />
          <span className="text-2xl font-bold mb:text-lg">
            <ColoredText text="사용자 편의성 개선 기능 개발" color="purple" />
          </span>
          <span className="text-xl font-bold mb:text-sm">
            2024.09 - 2025.10
          </span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5] mb:text-sm">
              멘토 필터링, 북마크, 멘토 등록 알림받기, 리뷰 작성 등을 구현하며
              사용자 편의성을 향상시켰습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[10px]">
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
                <li>필터 조건 추가/변경/삭제가 유연한 필터링 동작 구현</li>
                <li>
                  회사명 실시간 검색 시 debounce 적용해 불필요한 API 호출 방지
                </li>
                <li>단순 북마크 개발 후 낙관적 업데이트 적용하여 기능 개선</li>
              </span>
            </div>
          </div>
          <Divider gap={0} />
          <span className="text-2xl font-bold mb:text-lg">
            <ColoredText text="운영/관리 기능 설계 및 구현" color="purple" />
          </span>
          <span className="text-xl font-bold mb:text-sm">2024.11 - 진행중</span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-lg leading-[1.5] mb:text-sm">
              관리자 페이지는{" "}
              <ColoredText
                text="권한이 있는 사용자만 접근할 수 있도록 제어하고, 세션을
              안정적으로 유지"
              />
              하는 데에 중점을 두었습니다. 현재 관리자 페이지 기능 기획과 구현
              작업을 지속적으로 진행하고 있습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold bg-light w-fit mb:text-sm">
                고객센터 페이지
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
                <li>
                  공지사항 <ColoredText text="Pagination" /> 적용 시 쿼리
                  파라미터 활용, 상세페이지에서 돌아와도 보고 있던 페이지 유지
                </li>
                <li>
                  문의하기 파일 첨부 시 보안 문제와 서버 부하를 방지하기 위해
                  서버가 발급한 <ColoredText text="presignedUrl" />을 활용하여
                  클라이언트가 S3에 파일을 업로드하도록 구현
                </li>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] pb-[15px]">
              <span className="text-lg font-bold bg-light w-fit mb:text-sm">
                관리자 페이지
              </span>
              <span className="flex flex-col gap-[5px] text-lg leading-[1.5] mb:text-sm">
                <li>
                  <ColoredText text="최상위 layout" />에 로그인 상태와 사용자
                  역할을 확인 후 권한이 없는 경우 리디렉션 처리하는 커스텀 훅
                </li>
                <li>
                  API 호출 응답에서 받은 <ColoredText text="accessToken" />
                  으로 인증을 수행, <ColoredText text="refreshToken" />은 쿠키에
                  저장해 세션 유효 기간 동안 자동으로 갱신하도록 구현
                </li>
                <li>
                  별도 디자인 없이 <ColoredText text="Headless UI" /> 활용하여
                  통일성 있는 UI를 효율적으로 구현
                </li>
              </span>
            </div>
            <Divider gap={0} />
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold mb:text-sm">
              [성과 및 배운점]
            </span>
            <span className="flex flex-col gap-[5px] text-lg leading-[1.5] pb-[15px] mb:text-sm">
              <li>
                다양한 문제를 정의하고, 이를 해결하기 위한 최적의 기술 스택과
                로직 설계 경험
              </li>
              <li>
                Next.js 환경에서 비즈니스 로직을 설계, REST API를 통해 백엔드와
                상호작용하며 데이터 흐름 관리
              </li>
              <li>
                로컬/전역 state 관리와 Tanstack Query를 활용한 데이터 캐싱, 에러
                처리, Query Key 설계에 대한 이해도 향상, 데이터의 최신성을
                보장하면서 반복적인 API 호출을 줄여 성능 최적화
              </li>
              <li>
                Desktop, Tablet, Mobile 환경에서 일관된 사용자 경험 제공을 위한
                반응형 디자인 성공적으로 구현
              </li>
              <li>
                백엔드, 디자이너와 협업하며 명확한 요구 사항 정의와 문제 해결,
                코드 리뷰를 통해 코드 품질 향상 경험
              </li>
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold mb:text-sm">[기술 스택]</span>
            <span className="flex gap-[7px] mb:flex-wrap">
              <TextChip text="Next.js" type="mb" />
              <TextChip text="TypeScript" type="mb" />
              <TextChip text="Zustand" type="mb" />
              <TextChip text="Tailwind CSS" type="mb" />
              <TextChip text="Tanstack Query" type="mb" />
              <TextChip text="Figma" type="mb" />
              <TextChip text="Postman" type="mb" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winterview;
