import type { NextPage } from "next";

const FrameComponent3: NextPage = () => {
  return (
    <section className="self-stretch shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] bg-cornflowerblue-100 flex flex-col items-start justify-start py-5 px-[30px] gap-[34px] shrink-0 [debug_commit:1de1738] z-[1] text-left text-xs text-flowkit-white font-body-1">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px">
        <div className="relative inline-block min-w-[56px]">오늘의 질문</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative text-center text-xl">
        <div className="h-1 w-[42px] absolute !m-[0] bottom-[6px] left-[39.5px] bg-c9aff" />
        <div className="h-1 w-[42px] absolute !m-[0] bottom-[6px] left-[83.5px] bg-c9aff" />
        <div className="h-1 w-[42px] absolute !m-[0] bottom-[6px] left-[127.5px] bg-sub" />
        <div className="flex-1 flex flex-col items-end justify-start gap-[51px]">
          <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit">
            <p className="m-0">{`“피드백을 주고받을 때 어떤 방식이 가장 `}</p>
            <p className="m-0">효과적이라고 생각하나요?”</p>
          </h3>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-xs">
            <div className="w-[87px] flex flex-col items-start justify-start gap-[5px]">
              <div className="relative inline-block min-w-[87px]">
                2명이 답변했어요.
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-3.5">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/lock-open.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-[42px] absolute !m-[0] right-[83.5px] bottom-[6px] bg-sub" />
        <div className="h-1 w-[42px] absolute !m-[0] right-[39.5px] bottom-[6px] bg-sub" />
      </div>
    </section>
  );
};

export default FrameComponent3;
