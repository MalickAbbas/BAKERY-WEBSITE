import { memo } from "react";

const ContactContainer = memo(() => {
  return (
    <div className="absolute top-[2551px] left-[44px] w-[855px] h-[584px] text-left text-xl text-black font-inter">
      <b className="absolute top-[0px] left-[0px] text-21xl">Contact Us</b>
      <div className="absolute top-[105px] left-[13px] rounded-3xs bg-white box-border w-[324px] h-[65px] border-[1px] border-solid border-black" />
      <div className="absolute top-[105px] left-[531px] rounded-3xs bg-white box-border w-[324px] h-[65px] border-[1px] border-solid border-black" />
      <b className="absolute top-[126px] left-[556px] text-gray">Phone</b>
      <div className="absolute top-[340px] left-[13px] rounded-3xs bg-white box-border w-[842px] h-[168px] border-[1px] border-solid border-black" />
      <div className="absolute top-[227px] left-[531px] rounded-3xs bg-white box-border w-[324px] h-[65px] border-[1px] border-solid border-black" />
      <b className="absolute top-[560px] left-[719px] text-white">Submit</b>
    </div>
  );
});

export default ContactContainer;
