import type { NextPage } from "next";
import FrameComponent6 from "./frame-component6";

const FrameComponent5: NextPage = () => {
  return (
    <section className="self-stretch shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] bg-cornflowerblue-100 flex flex-col items-start justify-start py-5 px-[30px] gap-[34px] z-[1] text-left text-xs text-flowkit-white font-body-1">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px">
        <div className="relative inline-block min-w-[56px]">오늘의 질문</div>
      </div>
      <FrameComponent6 />
    </section>
  );
};

export default FrameComponent5;
