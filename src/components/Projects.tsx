import Spacer from "./ui/Spacer";
import TextChip from "./ui/TextChip";

const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary">Projects</h2>
      <Spacer height={30} />
      <div className="flex gap-[40px]">
        {/* 왼쪽 영역 */}
        <div className="w-[20%] flex flex-col gap-[25px]">
          <span className="text-2xl font-bold">이기는 인터뷰</span>
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
            패션 브랜드 디지털제품여권(DPP) 랜딩페이지 개발
          </span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[요약]</span>
            <span className="text-lg leading-[1.5]">
              의류 제품의 라벨에 있는 DPP QR 코드 스캔 시 사용자가 접속하는 랜딩
              페이지를 개발했습니다. 다양한 브랜드의 확장을 염두에 두어, 많은
              페이지를 쉽고 일관적으로 개발할 수 있도록 JSON 구조를 설계하고,
              이를 파싱해 컴포넌트 단위로 렌더링하는 시스템을 구현했습니다.
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-xl font-bold">[담당 역할]</span>
            <span className="flex flex-col gap-[5px] text-lg leading-[1.5]">
              <li>협업 브랜드별 톤앤매너에 맞는 랜딩 페이지 디자인</li>
              <li>
                Details 태그, Table 태그, Marquee 텍스트를 구현할 수 있는 JSON
                구조와 렌더러 컴포넌트 개발
              </li>
              <li>
                children이 중첩되는 JSON 구조 특성을 고려하여 반복되는 코드를
                최대한 지양하고, 다른 개발자도 쉽게 활용할 수 있도록 간단한
                작성방식과 스타일 확장성 고려 개발
              </li>
              <li>
                기존 렌더러 컴포넌트의 예외처리, 스타일 설정이 어려웠던 부분을
                개선하여 코드 유연성 강화
              </li>
              <li>
                그 외 DPP SaaS 간소화버전 기획 및 와이어프레임 작성, B2C 홍보안
                아이데이션 적극 참여
              </li>
            </span>
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
              <TextChip text="React" />
              <TextChip text="TypeScript" />
              <TextChip text="Zustand" />
              <TextChip text="Styled-Components" />
              <TextChip text="Git" />
              <TextChip text="Figma" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
