import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Member from "./common/Member";
import { type Member as MemberType } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const Carousel: React.FC<{
  members: MemberType[];
  scroller: React.MutableRefObject<HTMLElement | null>;
}> = ({
  members,
  scroller,
}: {
  members: MemberType[];
  scroller: React.MutableRefObject<HTMLElement | null>;
}) => {
  const section = useRef(null);

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: -100 * (skillSet.length - 3),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        start: "center center",
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),
        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, [scroller]);

  return (
    <div className="hidden md:flex overflow-hidden">
      <div className="overflow-hidden">
        <div
          id="skills"
          className={`flex overflow-x-hidden w-[${
            (members.length + 1) * 550
          }px] m-0 relative h-[550px] bg-white`}
        >
          {members.map(({ _id, ...rest }) => (
            <section
              key={_id}
              ref={section}
              className="skill-set px-7 w-[408px] h-[550px] bg-transparent ns-horizontal-section__item flex items-center justify-center z-50"
            >
              <Member size="default" _id={_id} {...rest} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
