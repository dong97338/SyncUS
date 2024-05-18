import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full">
      <div className="self-stretch bg-flowkit-white overflow-hidden flex flex-row items-start justify-start py-1.5 px-4 box-border max-w-full">
        <div className="flex-1 rounded bg-flowkit-white box-border flex flex-row items-start justify-end py-1.5 px-3 max-w-full border-[1px] border-solid border-fill-1">
          <div className="h-12 w-[343px] relative rounded bg-flowkit-white box-border hidden max-w-full border-[1px] border-solid border-fill-1" />
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 object-contain z-[1]"
            alt=""
            src="/icon-2@2x.png"
          />
        </div>
      </div>
      <footer className="self-stretch bg-flowkit-white flex flex-row items-start justify-center pt-[21px] pb-2 pr-5 pl-[21px]">
        <div className="h-[5px] w-[134px] relative rounded-81xl bg-label-color-light-primary" />
      </footer>
    </section>
  );
};

export default FrameComponent;
