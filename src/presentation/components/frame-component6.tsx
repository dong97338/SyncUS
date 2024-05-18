import type { NextPage } from "next";

const FrameComponent6: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start relative text-center text-xl text-flowkit-white font-body-1">
      <div className="h-1 w-[42px] absolute !m-[0] bottom-[6px] left-[39.5px] bg-c9aff" />
      <div className="h-1 w-[42px] absolute !m-[0] bottom-[6px] left-[83.5px] bg-c9aff" />
      <div className="h-1 w-[42px] absolute !m-[0] bottom-[6px] left-[127.5px] bg-sub" />
      <div className="flex-1 flex flex-col items-end justify-start gap-[51px]">
        <div className="self-stretch relative font-medium">
          <p className="m-0">{`“피드백을 주고받을 때 어떤 방식이 가장 `}</p>
          <p className="m-0">효과적이라고 생각하나요?”</p>
        </div>
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
  );
};

export default FrameComponent6;
