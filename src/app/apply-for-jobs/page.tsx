"use client";

import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp, CheckCircle2 } from "lucide-react";
import PersonalDetails from "../components/PersonalDetails";
import { RootState } from "../redux/store";
import { setLocation } from "../redux/locationSlice";
import { setPosition } from "../redux/positionSlice";
import { setDetails } from "../redux/personalDetailsSlice";
import JobLocation from "../components/JobLocation";
import JobPosition from "../components/JobPositions";

type FormValue = {
  name: string;
  phone: string;
  imageURL: string;
};

function ApplyForJob() {
  const dispatch = useDispatch();

  const location = useSelector((state: RootState) => state.location.location);
  const position = useSelector((state: RootState) => state.position.role);
  const details = useSelector((state: RootState) => state.personalDetails);

  const onChangeLocation = (value: string) => {
    dispatch(setLocation({ location: value, radioValue: "" }));
  };

  const onChangePosition = (value: string) => {
    dispatch(setPosition({ role: value, radioValue: {} }));
  };

  const onChangeDetails = (value: FormValue) => {
    dispatch(setDetails(value));
  };

  return (
    <div className="justify-content-center vh-90 wh-90  align-items-center ">
      <div className="container-fluid d-flex flex-row justify-content-evenly ">
        <div className="d-flex text-center align-items-center">
          {location.length === 0 && (
            <button className="btn btn-primary rounded-circle mx-3 mb-3">
              1
            </button>
          )}
          {location.length > 0 && <CheckCircle2 className="mx-3 mb-3" />}
          <p className="mx-3 ">Job Location</p>
        </div>
        <hr style={{ width: "20%" }} />

        <div className="d-flex flex-row text-center mx-3">
          {(location.length === 0 || position.length === 0) && (
            <button className="btn btn-primary rounded-circle mx-3 mb-3">
              2
            </button>
          )}
          {location.length > 0 && position.length > 0 && (
            <CheckCircle2 className="mx-3 mb-3" />
          )}
          <p className="mx-3">Job Position</p>
        </div>
        <hr style={{ width: "20%" }} />

        <div className="text-center d-flex flex-row">
          {Object.values(details).every((value) => value === "") && (
            <button className="btn btn-primary rounded-circle mx-3 mb-3">
              3
            </button>
          )}
          {details.name != "" && <CheckCircle2 className="mx-3 mb-3" />}
          <p className="mx-3">Personal Details</p>
        </div>
      </div>
      {details.name != "" && (
        <div className="container d-flex flex-column justify-content-center align-items-center border p-3 mx-5 bg-dark text-light">
          <ThumbsUp size={50} />
          <h3>We have received your application!</h3>
          <p>We will process it and reach out to you in a few days</p>
        </div>
      )}
      {Object.values(details).every((value) => value === "") && (
        <div className="d-flex flex-row row m-2 p-2 text-dark">
          <JobLocation onChangeLocation={onChangeLocation} />
          {location.length > 0 && (
            <JobPosition onChangePosition={onChangePosition} />
          )}
          {position.length > 0 && location.length > 0 && (
            <PersonalDetails onChangeDetails={onChangeDetails} />
          )}
        </div>
      )}
    </div>
  );
}

export default ApplyForJob;
