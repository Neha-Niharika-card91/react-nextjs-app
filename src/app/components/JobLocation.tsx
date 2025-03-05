"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../redux/locationSlice";
import { RootState } from "../redux/store";

type FormValues = { location: string; radioValue: string };
type JobLocationProps = {
  onChangeLocation: (value: string) => void;
};

export default function JobLocation({ onChangeLocation }: JobLocationProps) {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location.location);
  const radioValue = useSelector(
    (state: RootState) => state.location.radioValue
  );
  const form = useForm<FormValues>();
  const { handleSubmit, setValue, register } = form;

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputVal = e.target.value;
    setValue("location", inputVal);
    setValue("radioValue", "");
    dispatch(setLocation({ location: inputVal, radioValue: "" }));
  }

  function onRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
    const radioVal = e.target.value;
    setValue("location", radioVal);
    setValue("radioValue", radioVal);
    dispatch(setLocation({ location: radioVal, radioValue: radioVal }));
  }

  return (
    <div className="text-dark">
      <div className="container mt-5">
        <div className="d-flex align-items-center border p-3">
          <form
            onSubmit={handleSubmit(() => console.log("Form submitted"))}
            noValidate
          >
            <label id="location" className="me-2 fw-bold">
              Location
              <input
                type="text"
                placeholder="city, area..."
                onChange={onInputChange}
                className="form-control border-0"
                value={location}
              />
            </label>
            <h3>Suggestions</h3>
            <label>
              <input
                type="radio"
                value="HSR"
                onChange={onRadioChange}
                checked={radioValue === "HSR"}
              />
              HSR
            </label>
            <label>
              <input
                type="radio"
                value="JP Nagar"
                onChange={onRadioChange}
                checked={radioValue === "JP Nagar"}
              />
              JP Nagar
            </label>
            <label>
              <input
                type="radio"
                value="BTM"
                onChange={onRadioChange}
                checked={radioValue === "BTM"}
              />
              BTM
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
