import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  useMotionValue,
  useReducedMotion,
  useSpring,
  motion,
} from "framer-motion";

const InnerMouse = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.top = `${e.clientY}px`;
        ref.current.style.left = `${e.clientX}px`;
      }
    };

    const onPointerDown = () => {
      if (ref.current) {
        ref.current.style.scale = "0.75";
      }
    };

    const onPointerUp = () => {
      if (ref.current) {
        ref.current.style.scale = "1";
      }
    };

    document.addEventListener("pointermove", onMouseMove);

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);

    return () => {
      document.removeEventListener("pointermove", onMouseMove);

      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return <div className="inner-mouse" ref={ref} />;
};

const OuterMouse = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const shouldReduceMotion = useReducedMotion();
  const xTranslation = shouldReduceMotion ? x : xSpring;
  const yTranslation = shouldReduceMotion ? y : ySpring;

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    document.addEventListener("pointermove", onMouseMove);

    return () => {
      document.removeEventListener("pointermove", onMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      className="outer-mouse"
      style={{
        translateX: xTranslation,
        translateY: yTranslation,
      }}
    />
  );
};

const Mouse = () => {
  const [mounted, setMounted] = useState(false);
  const [shouldShowMouse, setShowMouse] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onPointerMove = () => {
      if (
        !shouldShowMouse ||
        window.matchMedia("only screen and (max-width: 760px)").matches
      ) {
        setShowMouse(true);
      }
    };

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, [shouldShowMouse]);

  return mounted
    ? createPortal(
        <div
          style={{ opacity: shouldShowMouse ? 1 : 0 }}
          className={
            shouldReduceMotion
              ? ""
              : "transition-opacity duration-500 ease-linear"
          }
        >
          <OuterMouse />
          <InnerMouse />
        </div>,
        document.getElementById("mouseContainer") as HTMLDivElement
      )
    : null;
};

export default Mouse;
