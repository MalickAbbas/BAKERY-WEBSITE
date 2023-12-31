import OfferingsContainer from "../components/offerings-container";
import BakerySection from "../components/bakery-section";
import ContactContainer from "../components/contact-container";
import Header from "../components/header";

const BakerysStore = () => {
  return (
    <div className="relative bg-darkslategray w-full h-[3291px] overflow-hidden text-left text-xl text-gray font-inter">
      <div className="absolute top-[196px] left-[18px] w-[936px] h-[350px] text-white">
        <div className="absolute top-[21px] left-[0px] inline-block w-[537px]">
          <p className="m-0">{`Indulge in a symphony of flavors at our artisanal bakery. `}</p>
          <p className="m-0">{`Welcome to a world where the aroma of freshly baked `}</p>
          <p className="m-0">{`wonders captivates your senses. Our master bakers `}</p>
          <p className="m-0">{`craft each creation with passion, using only the finest `}</p>
          <p className="m-0">{`ingredients to ensure every bite is pure delight. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`From flaky croissants to decadent cakes, experience `}</p>
          <p className="m-0">{`the epitome of taste and craftsmanship. Whether it's `}</p>
          <p className="m-0">{`a special occasion or a craving for the extraordinary, `}</p>
          <p className="m-0">{`our bakery offers a haven for your palate. Elevate `}</p>
          <p className="m-0">{`your moments with the magic of our oven-fresh delights. `}</p>
          <p className="m-0">Your journey to exceptional taste begins here.</p>
        </div>
        <img
          className="absolute top-[0px] left-[586px] w-[350px] h-[350px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <OfferingsContainer />
      <div className="absolute top-[1585px] left-[0px] w-[1028px] h-[935px]">
        <BakerySection />
      </div>
      <div className="absolute top-[2520px] left-[0px] bg-white w-[1028px] h-[651px]" />
      <div className="absolute top-[3095px] left-[696px] rounded-3xs bg-green w-[203px] h-14" />
      <b className="absolute top-[2677px] left-[96px]">Full Name</b>
      <div className="absolute top-[2778px] left-[57px] rounded-3xs bg-white box-border w-[324px] h-[65px] border-[1px] border-solid border-black" />
      <b className="absolute top-[2799px] left-[96px]">Address</b>
      <b className="absolute top-[2913px] left-[100px] inline-block w-[257px]">
        Description
      </b>
      <b className="absolute top-[2799px] left-[600px]">Email</b>
      <ContactContainer />
      <div className="absolute top-[3171px] left-[0px] w-[1028px] h-[120px] text-white">
        <div className="absolute top-[0px] left-[0px] bg-black w-[1028px] h-[120px]" />
        <b className="absolute top-[48px] left-[346px]">
          All rights are reserved by @BakeryStore
        </b>
      </div>
      <Header />
    </div>
  );
};

export default BakerysStore;
