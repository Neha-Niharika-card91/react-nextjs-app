"use client";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setDetails } from "../redux/personalDetailsSlice";

type FormValue = { name: string; phone: string; imageURL: string };
type PersonalDetailsProps = {
  onChangeDetails: (value: {
    name: string;
    phone: string;
    imageURL: string;
  }) => void;
};

function PersonalDetails({ onChangeDetails }: PersonalDetailsProps) {
  const dispatch = useDispatch();
  const personalDetails = useSelector(
    (state: RootState) => state.personalDetails
  );

  const form = useForm<FormValue>({
    defaultValues: {
      name: personalDetails.name,
      phone: personalDetails.phone,
      imageURL: personalDetails.imageURL,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  function onSubmit(data: FormValue) {
    dispatch(setDetails(data));
    console.log("Submitted", data);
  }

  return (
    <div className="text-dark">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="container mt-5">
          <div className="d-flex align-items-center border p-2">
            <label id="name" className="fw-bold fs-3 me-2">
              Name:
            </label>
            <input
              className="form-control border-0"
              placeholder="e.g. John Smith"
              type="text"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name should be text",
                },
              })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="d-flex align-items-center border p-2 mt-5">
            <label id="phone" className="me-2 fs-3 fw-bold">
              Phone:
            </label>
            <input
              type="text"
              placeholder="e.g. 9809878987"
              className="form-control flex-grow-1 border-0"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be exactly 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-danger mt-1">{errors.phone.message}</p>
            )}
          </div>
          <div className="d-flex align-items-center border p-3 mt-5">
            <label className="me-2 ">
              <p className="fs-3 fw-bold">Certification (optional)</p>
              <input type="file" />
            </label>
            {errors.imageURL && (
              <p className="text-danger">{errors.imageURL.message}</p>
            )}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-success btn-lg" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
