import React from "react";
import Slider from "react-slick";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "@/common/modal/Modal";
import ModalHeader from "@/common/modal/ModalHeader";
import InputWithAdornment from "@/common/inputs/InputWithAdornment";
import TextArea from "@/common/inputs/TextArea";
import AmenitiesSelect from "@/common/inputs/AmenitiesSelect";
import iconComponents from "@/assets/icons/iconComponents";
import RateLocation from "@/common/inputs/RateLocation";
import Button from "@/common/button";
import { useReviewContext } from "@/context/ReviewContext";
type IRequestTour = {
  open: boolean;
  onClose: () => void;
};
const AddReview = (props: IRequestTour) => {
  const { open, onClose } = props;
  const { handleCloseReviewClick } = useReviewContext();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      time: "",
      date: "",
      phone: "",
      email: "",
      name: "",
    },
  });

  // Function to get an array of 7 days starting from tomorrow

  return (
    <Modal variant="md" onClose={onClose} open={open}>
      <div className="w-full flex flex-col gap-3 p-8">
        <ModalHeader
          title="Review Location"
          onClose={onClose}
          subText="Bonny and Clyde Street, Ajao Estate, Lagos"
        />
        {/* Render the days in your component */}
        <AmenitiesSelect
          id="amenitiesSelect"
          style={{
            background: "#F3F7FE",
            paddingRight: "8px",
            paddingLeft: "8px",
            fontSize: "14px",
            fontWeight: "400",
            color: "#1e1e1e",
            height: "50px",
            borderRadius: "6px",
          }}
          right={<iconComponents.util.ArrowDownIcon />}
        />
        <RateLocation />

        <TextArea
          label="Write Review"
          id="reviewText"
          placeholder="Add review"
          register={register}
          errors={errors}
        />

        <div className="flex items-center gap-[8px]">
          <input type="checkbox" id="identity" />
          <label
            htmlFor="identity"
            className="text-[#484851] text-[14px] font-[400] leading-[16.94px
            ]"
          >
            Post as anonymous
          </label>
        </div>

        <div className="flex items-center gap-[24px] justify-center">
          <Button
            label="Submit"
            variant="primary"
            className="capitalize w-full"
          />
          <Button
            onClick={() => {
              onClose();
              handleCloseReviewClick();
            }}
            label="Cancel"
            variant="outlined"
            className="capitalize w-full text-[#3366FF]"
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddReview;
