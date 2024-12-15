// "use client"

// import { cn } from "@/lib/utils";
// import { useMotionValue, animate, motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import useMeasure from "react-use-measure";

// type InfiniteSliderProps = {
//   children: React.ReactNode;
//   gap?: number;
//   duration?: number;
//   durationOnHover?: number;
//   direction?: "horizontal" | "vertical";
//   reverse?: boolean;
//   className?: string;
// };



// import React from 'react'

// function Slider({children, gap = 3, duration = 70, durationOnHover, direction="horizontal", reverse = false, className}:InfiniteSliderProps) {
//   const [currentDuration, setCurrentDuration] = useState (duration);
//   const [ref, {width, height}] = useMeasure();
//   const translation = useMotionValue(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [key, setKey] = useState(0);
  
//   useEffect(()=>{
//     let controls;
//     const size = direction === "horizontal" ? width : height;
//     const contentSize = size + gap
//     const from = reverse ? -contentSize / 2 : 0;
//     const to = reverse ? 0 / 2 : -contentSize;

//     if(isTransitioning){
//       controls = animate(translation, [translation.get(), to], {
//         ease: "linear",
//         duration:
//           currentDuration * Math.abs((translation.get() - to) / contentSize),
//           onComplete:()=>{
//             setIsTransitioning(false);
//             setKey((prevKey) => prevKey + 1);
//           },
//       });
//     } else{
//       controls = animate(translation, [from, to], {
//         ease: "linear",
//         duration: currentDuration,
//         repeat: Infinity,
//         repeatType: "loop",
//         repeatDelay: 0,
//         onRepeat: ()=> translation.set(from),
//       })
//     }

//     return controls?.stop;
//   }, [
//     key,
//     translation,
//     currentDuration,
//     width,
//     height,
//     gap,
//     isTransitioning,
//     direction,
//     reverse,
//   ]);

//   const hoverProps = durationOnHover? {onHoverStart:()=>{
//     setIsTransitioning(true)
//     setCurrentDuration(durationOnHover)
//   }, 
// onHoverEnd:()=>{
//   setIsTransitioning(true)
//   setCurrentDuration(duration)
// }}:{}
//   return (
//     <div className={cn("overflow-hidden", className)}>
//       <div className="flex items-center w-max" style={{...(direction==="horizontal" ? {x:translation}:{y:translation}), gap : `${gap}px`}} ref={ref} {...hoverProps}>
//         {children}
//         {children}
//       </div>
//     </div>
//   )
// }

// export default Slider











"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

function Slider({
  children,
  gap = 3,
  duration = 70,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 / 2 : -contentSize;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex items-center w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default Slider;
















// "use client";

// import { cn } from "@/lib/utils";
// import { useMotionValue, animate } from "framer-motion";
// import { useState, useEffect } from "react";
// import useMeasure from "react-use-measure";

// // TypeScript type for props
// type InfiniteSliderProps = {
//   children: React.ReactNode;
//   gap?: number;
//   duration?: number;
//   durationOnHover?: number;
//   direction?: "horizontal" | "vertical";
//   reverse?: boolean;
//   className?: string;
// };

// function Slider({
//   children,
//   gap = 3,
//   duration = 70,
//   durationOnHover,
//   direction = "horizontal",
//   reverse = false,
//   className,
// }: InfiniteSliderProps) {
//   const [currentDuration, setCurrentDuration] = useState(duration);
//   const [ref, bounds] = useMeasure();
//   const translation = useMotionValue(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [key, setKey] = useState(0);

//   const { width, height } = bounds;

//   useEffect(() => {
//     let controls;
//     const size = direction === "horizontal" ? width : height;
//     const contentSize = size + gap;
//     const from = reverse ? -contentSize / 2 : 0;
//     const to = reverse ? 0 : -contentSize;

//     if (isTransitioning) {
//       controls = animate(translation, [translation.get(), to], {
//         ease: "linear",
//         duration:
//           currentDuration * Math.abs((translation.get() - to) / contentSize),
//         onComplete: () => {
//           setIsTransitioning(false);
//           setKey((prevKey) => prevKey + 1);
//         },
//       });
//     } else {
//       controls = animate(translation, [from, to], {
//         ease: "linear",
//         duration: currentDuration,
//         repeat: Infinity,
//         repeatType: "loop",
//         repeatDelay: 0,
//         onRepeat: () => translation.set(from),
//       });
//     }

//     return controls?.stop;
//   }, [
//     key,
//     translation,
//     currentDuration,
//     width,
//     height,
//     gap,
//     isTransitioning,
//     direction,
//     reverse,
//   ]);

//   const hoverProps = durationOnHover
//     ? {
//         onMouseEnter: () => {
//           setIsTransitioning(true);
//           setCurrentDuration(durationOnHover);
//         },
//         onMouseLeave: () => {
//           setIsTransitioning(true);
//           setCurrentDuration(duration);
//         },
//       }
//     : {};

//   return (
//     <div className={cn("overflow-hidden", className)}>
//       <div
//         className="flex items-center w-max"
//         style={{
//           ...(direction === "horizontal"
//             ? { transform: `translateX(${translation.get()}px)` }
//             : { transform: `translateY(${translation.get()}px)` }),
//           gap: `${gap}px`,
//         }}
//         ref={ref}
//         {...hoverProps}
//       >
//         {children}
//         {children}
//       </div>
//     </div>
//   );
// }

// export default Slider;
