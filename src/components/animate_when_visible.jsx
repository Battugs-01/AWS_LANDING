import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

const SlideUpWhenVisible = ({
  children,
  className,
  threshold,
  from,
  delay,
}) => {
  const { ref, inView } = useInView({
    threshold: threshold || 0.6,
    triggerOnce: true,
    delay: delay || 0,
  });

  const getTransform = () => {
    switch (from) {
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      case "top":
        return "translate-y-10";
      case "bottom":
        return "-translate-y-10";
      default:
        return "translate-y-10";
    }
  };

  const getInitialTransform = () => {
    switch (from) {
      case "left":
        return "translate-x-0";
      case "right":
        return "translate-x-0";
      case "top":
        return "translate-y-0";
      case "bottom":
        return "translate-y-0";
      default:
        return "translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        className,
        "transform transition-opacity delay-200 duration-300 ease-in-out",
        !inView ? "opacity-0" : "opacity-100  "
      )}
    >
      <div
        className={cn(
          "transform transition-transform delay-200 duration-300",
          !inView ? " opacity-0" : " opacity-100 ",
          inView ? getInitialTransform() : getTransform()
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUpWhenVisible;

export const ControlledSlideUpWhenVisible = ({ children, className, show }) => {
  return (
    <div
      className={cn(
        className,
        "transform transition-opacity delay-300 duration-500 ease-in-out",
        !show ? "opacity-0" : "opacity-100  "
      )}
    >
      <div
        className={cn(
          "transform transition-transform delay-300 duration-500",
          !show ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100 "
        )}
      >
        {children}
      </div>
    </div>
  );
};
