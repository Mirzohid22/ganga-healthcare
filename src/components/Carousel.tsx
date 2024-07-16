import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Member from "./common/Member";
import { type Member as MemberType } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const Carousel: React.FC<{ members: MemberType[] }> = ({
  members,
}: {
  members: MemberType[];
}) => {
  const scroller = useRef(null);
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
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={scroller}
          className={`flex overflow-x-hidden w-[${
            (members.length + 1) * 550
          }px] m-0 relative h-[550px] bg-white`}
        >
          {members.map(({ id, ...rest }) => {
            return (
              <section
                key={id}
                ref={section}
                className="skill-set px-7 w-[500px] h-[550px] bg-transparent ns-horizontal-section__item flex items-center justify-center z-50"
              >
                <Member id={id} {...rest} key={id} />
              </section>
            );
          })}
          <section
            ref={section}
            className="skill-set px-7 w-[500px] h-[550px] bg-transparent ns-horizontal-section__item flex items-center justify-center z-50"
          ></section>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
