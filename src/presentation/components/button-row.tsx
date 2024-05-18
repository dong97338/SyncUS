import type { NextPage } from "next";

const ButtonRow: NextPage = () => {
  return (
    <section className="self-stretch shadow-[0px_-4px_10px_rgba(0,_0,_0,_0.1)] bg-flowkit-white flex flex-row items-start justify-between pt-2 px-[83.5px] pb-8 gap-[20px] text-left text-xs text-type-base font-body-1">
      <div className="flex flex-col items-start justify-start text-c9aff">
        <div className="w-8 h-8 flex flex-col items-center justify-center py-2.5 px-[5px] box-border">
          <img
            className="w-[21.3px] h-6 relative"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-[10.5px]">
          <div className="relative inline-block min-w-[11px]">홈</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="h-8 flex flex-col items-center justify-center py-2.5 px-1 box-border w-8">
          <img
            className="w-6 h-6 relative"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="relative inline-block min-w-[32px]">리스트</div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="h-8 flex flex-col items-center justify-center py-2.5 px-[3px] box-border w-8">
          <img
            className="w-[26.7px] h-[23px] relative"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-[5.5px]">
          <div className="relative inline-block min-w-[21px]">설정</div>
        </div>
      </div>
    </section>
  );
};

export default ButtonRow;
