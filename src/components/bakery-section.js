import { memo } from "react";

const BakerySection = memo(() => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1028px] h-[935px] text-left text-xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-silver w-[1028px] h-[935px]" />
      <img
        className="absolute top-[36.3px] left-[524px] w-[402px] h-[296.2px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[146.8px] left-[57px] w-[934px] h-[639.6px]">
        <div className="absolute top-[211.8px] left-[0px] inline-block w-[934px] h-[427.8px]">
          <p className="m-0">{`At our bakery, baking isn't just a process; it's an art, a passion that's woven into every loaf, pastry, and confection we create. Established with a vision to redefine indulgence, we take pride in crafting experiences that transcend the ordinary. Our story began with a small kitchen and a big dream – to infuse the world with the warmth of freshly baked goods. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            What sets us apart is our unwavering commitment to quality. We
            meticulously source the finest ingredients, from velvety chocolate
            to locally grown fruits, ensuring that every bite tells a tale of
            exceptional flavor. But it's not just about ingredients; it's about
            the hands that shape them. Our dedicated team of master bakers pours
            their heart into each recipe, combining time-honored techniques with
            innovative twists.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            From the moment you step into our bakery, you're enveloped in a
            symphony of scents and sights that awaken your senses. Every
            creation that graces our shelves is a result of countless hours of
            experimentation, dedication, and a genuine love for baking. But
            we're more than just bakers; we're a community brought together by a
            shared love for all things delicious.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            As we knead, roll, and bake, we're not just making pastries – we're
            crafting memories. From birthday celebrations marked by our custom
            cakes to lazy Sunday mornings made better with our artisanal bread,
            we're there for life's sweetest moments. Our journey is one of
            passion, flavor, and the joy that comes from spreading happiness,
            one delectable treat at a time.
          </p>
        </div>
        <b className="absolute top-[0px] left-[44px] text-21xl inline-block w-[251px] h-[43px]">
          About Us
        </b>
      </div>
    </div>
  );
});

export default BakerySection;
