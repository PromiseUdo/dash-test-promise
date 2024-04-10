import React, { useEffect, useState } from "react";
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
import { useReviewsContext } from "@/context/ReviewsListContext";
import { Rating } from "@mui/material";
import Typography from "@/common/Typograhpy";
import toast from "react-hot-toast";
import moment from "moment";
type IRequestTour = {
  open: boolean;
  onClose: () => void;
};

const amenities = [
  "Parking Lot",
  "Free Wi-Fi",
  "Nightlife",
  "Hospitals",
  "Adult Home",
  "Schools",
  "Pet Store",
  "Childcare",
  "Gym",
  "Security",
  "Adult Home",
  "Schools",
];

const AddReview = (props: IRequestTour) => {
  const { open, onClose } = props;
  const { handleCloseReviewClick } = useReviewContext();
  const { addReview } = useReviewsContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      comment: "",
      rating: "",
      amenities: [],
      anonymous: true,
      timeAgo: "",
    },
  });
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    setIsLoading(true);
    addReview({
      author: "anonymous",
      image: null,
      timeAgo: moment(Date.now()).fromNow(),
      upVotes: "123",
      downVotes: "2",
      rating: data.rating,
      comment: data.comment,
      commentCount: "4",
      admin: false,
    });

    console.log(data);
    setIsReviewAdded(true);
    handleCloseReviewClick();
    setIsLoading(false);
  };

  useEffect(() => {
    if (isReviewAdded) {
      reset();
      setIsReviewAdded(false);
    }
  }, [isReviewAdded]);

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
          amenities={amenities}
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

        <div className="flex flex-col gap-[14px]">
          <Typography
            as="p"
            className="font-[400] text-[14px] text-dash-shades-black-2 leading-[16.94px]"
          >
            Rate location
          </Typography>
          <div>
            <Rating
              name="simple-controlled"
              onChange={(event, newValue) => {
                setCustomValue("rating", newValue);
              }}
            />
          </div>
        </div>

        <TextArea
          label="Write Review"
          id="comment"
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
            onClick={handleSubmit(onSubmit)}
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
