const Title = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <div className="flex gap-[10px] items-baseline">
        <span className="text-5xl font-bold text-primary">박지영</span>
        <span className="text-2xl font-bold">프론트엔드 개발자</span>
      </div>
      <div className="flex flex-col gap-[10px]">
        <span className="text-lg">
          안녕하세요! 협업 잘하는 신입 개발자입니다. “이 정도면 됐다”에 안주하지
          않고, “조금만 더 해 보면 어떨까” 하는 마음가짐으로 개발합니다. 저는
          완성이란 과정의 또 다른 이름이라고 믿습니다. 예술가들이 작품을
          계속해서 다듬어 나가듯, 더 나은 결과물에 다가가기 위해 꾸준히 개선하고
          성장하는 개발자가 되고자 합니다.
        </span>
        <span className="text-lg">
          저는 주도적으로 문제를 정의하고 개선하는 리더이자 협업하기 편안한
          팀원입니다. 선후배 동료 모두에게서 배울 점을 찾고, 열린 마음으로
          다양한 의견을 존중합니다. 영어 강의와 기획팀 근무 경험을 통해 얻은
          커뮤니케이션 능력을 개발 역량과 결합해, 팀 전체가 함께 성장할 수 있는
          환경을 만드는 데 기여하겠습니다.
        </span>
      </div>
    </section>
  );
};

export default Title;
