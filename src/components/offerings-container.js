import { memo } from "react";
import Container from "./container";

const OfferingsContainer = memo(() => {
  return (
    <div className="absolute top-[644px] left-[38px] w-[883px] h-[872px] text-left text-9xl text-white font-inter">
      <img
        className="absolute top-[104px] left-[344px] w-[230px] h-[234px] object-cover"
        alt=""
        src="/rectangle-3@2x.png"
      />
      <img
        className="absolute top-[104px] left-[632px] w-[230px] h-[234px] object-cover"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <img
        className="absolute top-[104px] left-[56px] w-[230px] h-[234px] object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <img
        className="absolute top-[496px] left-[56px] w-[230px] h-[234px] object-cover"
        alt=""
        src="/rectangle-5@2x.png"
      />
      <img
        className="absolute top-[496px] left-[344px] w-[230px] h-[234px] object-cover"
        alt=""
        src="/rectangle-6@2x.png"
      />
      <img
        className="absolute top-[496px] left-[632px] w-[230px] h-[234px] object-cover"
        alt=""
        src="/rectangle-7@2x.png"
      />
      <b className="absolute top-[0px] left-[0px]">Our offerings</b>
      <Container propTop="964px" propLeft="129px" />
      <Container propTop="330px" propLeft="400px" />
      <Container propTop="340px" propLeft="709px" />
      <Container propTop="730px" propLeft="96px" />
      <Container propTop="746px" propLeft="395px" />
      <Container propTop="746px" propLeft="683px" />
    </div>
  );
});

export default OfferingsContainer;
