import { memo } from "react";

const Header = memo(() => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1028px] h-[136px] text-left text-xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1028px] h-[136px]" />
      <div className="absolute top-[0px] left-[71px] w-[863px] h-[124px]">
        <div className="absolute top-[56px] left-[484px] w-[379px] h-6">
          <div className="absolute top-[0px] left-[0px]">Home</div>
          <div className="absolute top-[0px] left-[95px]">Menu</div>
          <div className="absolute top-[0px] left-[176px]">About Us</div>
          <div className="absolute top-[0px] left-[303px]">Contact</div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[102px] h-[124px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
    </div>
  );
});

export default Header;
