import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  /** Style props */
  divColor?: CSSProperties["color"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ divColor }) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <section className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full">
      <div className="self-stretch bg-flowkit-white flex flex-row items-start justify-start max-w-full">
        <header className="flex-1 overflow-hidden flex flex-row items-end justify-between pt-3 pb-[11px] pr-[14.6px] pl-[21px] box-border max-w-full gap-[20px]">
          <img
            className="h-[21px] w-[54px] relative"
            loading="lazy"
            alt=""
            src="/left-side.svg"
          />
          <div className="w-[66.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[4.4px] box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
              <img
                className="h-[10.7px] w-[17px] relative"
                loading="lazy"
                alt=""
                src="/mobile-signal.svg"
              />
              <img
                className="h-[11px] w-[15.3px] relative"
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
              <img
                className="self-stretch w-[24.3px] relative max-h-full min-h-[11px]"
                loading="lazy"
                alt=""
                src="/battery.svg"
              />
              <img
                className="h-1.5 w-1.5 relative hidden"
                alt=""
                src="/recording-indicator.svg"
              />
            </div>
          </div>
        </header>
      </div>
      <button className="cursor-pointer [border:none] py-[15px] px-4 bg-flowkit-white self-stretch overflow-hidden flex flex-row items-start justify-between gap-[20px]">
        <input className="m-0 h-6 w-6 relative min-h-[24px]" type="checkbox" />
        <div className="w-[79px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <div
            className="self-stretch relative text-base leading-[22px] font-medium font-medium text-text-5 text-center inline-block min-w-[79px] whitespace-nowrap"
            style={divStyle}
          >
            새로운 채팅
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon-1.svg"
        />
      </button>
    </section>
  );
};

export default FrameComponent1;
