import React from "react";
// import Typography from "../Typography";
// import { MdCancel } from "react-icons/md";
import iconComponents from "@/assets/icons/iconComponents";
import { useReviewContext } from "@/context/ReviewContext";
type IModalHeader = {
  onClose?: () => void;
  title?: React.ReactNode;
  subText?: React.ReactNode;
};
const ModalHeader = (props: IModalHeader) => {
  const { onClose, title, subText } = props;
  const { handleCloseReviewClick } = useReviewContext();

  return (
    <header className="flex flex-col justify-start items-start w-full pb-6">
      <div className="w-full flex justify-between items-center">
        <p className="w-full text-[#1d1c1c] text-[18px] leading-[24px] font-medium text-center ">
          {title}
        </p>
        {onClose && (
          <button
            onClick={() => {
              onClose();
              handleCloseReviewClick();
            }}
            className="p-2  hover:bg-[#f7f7f7] active:bg-[#f7f7f7] rounded-full"
          >
            <iconComponents.util.CancelIcon />
            {/* <iconComponents.util.CancelIcon
              width={24}
              height={24}
              stroke="var(--shades-black)"
            /> */}
          </button>
        )}
      </div>
      {subText && (
        <p className="w-full text-[#1E1E1E] font-[500] text-[20px] text-sm leading-[24px] pr-8 text-center">
          {subText}
        </p>
      )}
    </header>
  );
};

export default ModalHeader;
