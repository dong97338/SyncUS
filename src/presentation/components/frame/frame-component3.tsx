import type { NextPage } from "next";

const FrameComponent3: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
      <button className="cursor-pointer [border:none] py-[15px] px-4 bg-text-1 flex-1 overflow-hidden flex flex-row items-start justify-between box-border max-w-full gap-[20px]">
        <input className="m-0 h-6 w-6 relative min-h-[24px]" type="checkbox" />
        <div className="w-[213px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <div className="self-stretch relative text-base leading-[22px] font-medium font-medium text-e42 text-center">
            적절한 조언과 잘 요청하는 방법
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon-1.svg"
        />
      </button>
    </div>
  );
};

export default FrameComponent3;
