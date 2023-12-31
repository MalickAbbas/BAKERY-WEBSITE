import { memo, useMemo } from "react";

const Container = memo(({ propTop, propLeft }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[320px] left-[91px] w-[174px] h-[126px] text-left text-9xl text-white font-inter"
      style={groupDivStyle}
    >
      <b className="absolute top-[0px] left-[0px] inline-block w-[164px]">
        <p className="m-0">Barfi</p>
        <p className="m-0">Rs. 900/=</p>
      </b>
      <div className="absolute top-[79px] left-[0px] w-[174px] h-[47px] text-xl text-black">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[174px] h-[47px]" />
        <b className="absolute top-[12px] left-[35px]">Order Now</b>
      </div>
    </div>
  );
});

export default Container;
