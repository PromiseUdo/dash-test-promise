import composeEventHandlers from "@/helpers/composeEventHandlers";
import { useComposeRefs } from "@/hooks/useComposeRefs";
import useGetCssValue from "@/hooks/useGetCssValue";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, {
  AllHTMLAttributes,
  ForwardedRef,
  forwardRef,
  KeyboardEventHandler,
  MutableRefObject,
  useEffect,
  useState,
} from "react";

import { clamp } from "@/helpers/clamp";

import Backdrop from "./Backdrop";

interface IModal extends AllHTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  className?: string;
  open: boolean;
  variant?: "xl" | "lg" | "sm" | "md";
  children: React.ReactNode;
  disableBackdrop?: boolean;
  blur?: boolean;
  reEvaluate?: boolean;
}
function NewModal(
  {
    onClose,
    open,
    className,
    children,
    variant = "sm",
    disableBackdrop,
    blur = true,
    onKeyDown,
    reEvaluate = false,
    style,
    ...rest
  }: IModal,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  const sizesMap = {
    sm: {
      sm: 343,
      md: 463,
      lg: 463,
    },
    md: {
      sm: 343,
      md: 660,
      lg: 648,
    },
    lg: {
      sm: 443,
      md: 770,
      lg: 824,
    },
    xl: {
      sm: 443,
      md: 824,
      lg: 1184,
    },
  };
  const [rand, setRand] = useState("");
  const [bodyHeight, setBodyHeight] = useState<string>("");
  const [bodyWidth, setBodyWidth] = useState<string>("");
  useEffect(() => {
    if (!reEvaluate) return;
    if (!open) return;
    const timer = setInterval(() => {
      setRand(Math.random().toString(16).substring(3, 14));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [reEvaluate, open]);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 780px)");

  const [dialogRef, dialogHeight] = useGetCssValue(
    "height",
    "535px",
    rand || open
  );
  // const { isLoading, portalId } = useMountPortal('modal-portal ', open)
  //   const bodyHeight = window.innerHeight + "px";
  //   const bodyWidth = window.innerWidth + "px";
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBodyHeight(`${window.innerHeight}px`);
      setBodyWidth(`${window.innerWidth}px`);
    }
  }, []);
  const defaultModalWidth =
    sizesMap[variant][isMobile ? "sm" : isTablet ? "md" : "lg"];
  const defaultModalWidthClass = `${"w-[" + defaultModalWidth + "px]"}`;

  const keydownHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Tab" || e.key === "Shift + Tab") {
      e.stopPropagation();
    }
    if (e.key === "Escape") {
      onClose?.();
    }
  };
  const combinedRef = useComposeRefs(dialogRef, forwardedRef);
  return open ? (
    <Backdrop
      blur={blur}
      open={open}
      onClose={disableBackdrop ? () => {} : onClose}
    >
      <div
        role="dialog"
        onKeyDown={composeEventHandlers(onKeyDown, keydownHandler)}
        ref={combinedRef}
        tabIndex={open ? 0 : -1}
        onClick={(e) => e.stopPropagation()}
        style={{
          transitionTimingFunction: "ease-in-out",
          transform: open ? "scale(1,1) " : "scale(0,0)",
          opacity: open ? "1" : "0",
          transitionProperty: "transform, opacity",
          maxWidth: `calc(100vw - ${
            (isMobile ? 16 : isTablet ? 32 : 100) * 2
          }px)`,
          maxHeight: `calc(100vh - ${(isMobile || isLaptop ? 30 : 36) * 2}px)`,
          left: `${clamp(
            parseInt(bodyWidth) / 2 -
              sizesMap[variant][isMobile ? "sm" : isTablet ? "md" : "lg"] / 2,
            isMobile ? 16 : isTablet ? 32 : 100,
            parseInt(bodyWidth) / 2
          )}px`,
          width: defaultModalWidth,
          top: `${clamp(
            parseInt(bodyHeight) / 2 - parseInt(dialogHeight) / 2,
            isMobile || isLaptop ? 30 : 36,
            parseInt(bodyHeight) / 2 - (isMobile || isLaptop ? 30 : 36)
          )}px`,
          ...(style ? style : {}),
        }}
        {...rest}
        className={`bg-white z-[50] scrollbar scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-slate-400 scrollbar-track-gray-100 ${defaultModalWidthClass} fixed rounded-lg overflow-auto shadow-md duration-300
        flex flex-col gap-6 justify-start items-start 
        ${className ? className : ""} `}
      >
        {children}
      </div>
    </Backdrop>
  ) : (
    <></>
  );
}
const Modal = forwardRef<HTMLDivElement, IModal>((props, ref) =>
  NewModal(props, ref)
);
Modal.displayName = "Modal";
export default Modal;
