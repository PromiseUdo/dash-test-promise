import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import React from "react";

function Backdrop({
  onClose,
  children,
  blur = true,
  open,
}: {
  onClose: () => void;
  children: React.ReactNode;
  blur?: boolean;
  open?: boolean;
}) {
  useLockBodyScroll(open);
  return (
    <div
      onClick={onClose}
      className={`z-[999] w-screen h-screen transition-all duration-400  fixed top-0 left-0 right-0 bottom-0 ${
        blur ? "overlay bg-[#1D3045]" : ""
      } ${open ? "opacity-100 z-40 " : "opacity-0 -z-50"}`}
    >
      {children}
    </div>
  );
}

export default Backdrop;
