import type { NextPage } from "next";

const FrameComponent2: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-end justify-start pt-10 px-0 pb-0 box-border relative gap-[27px] max-w-full text-center text-sm text-label-color-light-primary font-medium">
      <div className="w-[30px] h-[30px] absolute !m-[0] top-[0px] left-[calc(50%_-_15px)] shrink-0 flex items-center justify-center z-[0]">
        <img
          className="w-full h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[0px] [transform:scale(1.387)]"
          loading="lazy"
          alt=""
          src="/frame-156751@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-5 pl-[21px]">
        <div className="w-[289px] relative leading-[22px] inline-block">
          <p className="m-0">
            <span className="font-semibold font-medium text-c9aff">
              Sync Chat
            </span>
            <span className="font-medium">
              은 팀에 대해 궁금한 정보를 제공해요.
            </span>
          </p>
          <p className="m-0 font-medium">
            팀원들이 남긴 답변을 바탕으로 답변해요.
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-text-1">
        <div className="self-stretch rounded-xl bg-c9aff flex flex-row items-start justify-start pt-[9px] px-[9px] pb-2 box-border whitespace-nowrap max-w-full">
          <div className="h-[39px] w-[330px] relative rounded-xl bg-c9aff hidden max-w-full" />
          <div className="flex-1 relative leading-[22px] z-[1]">
            협업할 때 선호하는 커뮤니케이션 방식은 무엇인가요?
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-[18px]">
          <div className="flex-1 rounded-xl bg-c9aff flex flex-row items-start justify-start pt-[9px] pb-2 pr-[9px] pl-2.5 whitespace-nowrap">
            <div className="h-[39px] w-[291px] relative rounded-xl bg-c9aff hidden" />
            <div className="flex-1 relative leading-[22px] z-[1]">
              우리 디자이너는 어떤 피드백을 주면 좋아할까?
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px]">
          <div className="flex-1 rounded-xl bg-c9aff flex flex-row items-start justify-start pt-[9px] px-[11px] pb-2 whitespace-nowrap">
            <div className="h-[39px] w-[311px] relative rounded-xl bg-c9aff hidden" />
            <div className="flex-1 relative leading-[22px] z-[1]">
              팀원들과의 의견 충돌이 있을 때 어떻게 해결할까?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
