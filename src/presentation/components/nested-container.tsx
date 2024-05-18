import type { NextPage } from "next";

const NestedContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-sm text-type-white-background font-body-1">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-8@2x.png"
          />
          <div className="relative inline-block min-w-[25px]">첫째</div>
        </div>
        <div className="self-stretch h-[37px] relative text-base leading-[140%] text-type-base2 inline-block shrink-0">
          서로에게 무관심하나 마음만은 서로를 향해있는 가족
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[9px]">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-end py-0 pr-0 pl-[186px] box-border min-w-[48px]">
            <img
              className="h-6 w-6 relative rounded-[50%] object-cover min-h-[24px]"
              alt=""
              src="/ellipse-8@2x.png"
            />
            <img
              className="h-6 w-6 relative rounded-[50%] object-cover min-h-[24px] z-[1] ml-[-6px]"
              loading="lazy"
              alt=""
              src="/ellipse-8@2x.png"
            />
          </div>
          <div className="h-[38px] w-[38px] rounded-lgi bg-flowkit-white box-border flex flex-col items-center justify-start pt-[11.4px] pb-[10.8px] pr-2 pl-[10.4px] border-[1.3px] border-solid border-c9aff">
            <img
              className="w-[17.3px] h-[15.8px] relative"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[4px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-8@2x.png"
          />
          <div className="relative inline-block min-w-[25px]">엄마</div>
        </div>
        <div className="w-[241px] relative text-base leading-[140%] text-type-base2 inline-block">
          서로를 사랑하는 가족 ~~~ *^^*
        </div>
      </div>
    </div>
  );
};

export default NestedContainer;
