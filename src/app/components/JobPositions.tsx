"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Positions from "./Positions";
import { RootState } from "../redux/store";
import { setPosition } from "../redux/positionSlice";

type FormValue = { role: string; radioValue: string };
type JobPositionProps = {
  onChangePosition: (value: string) => void;
};

export default function JobPosition({ onChangePosition }: JobPositionProps) {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.position.role);
  const radioValue = useSelector(
    (state: RootState) => state.position.radioValue
  );
  const form = useForm<FormValue>();
  const { handleSubmit, setValue, register } = form;

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputVal = e.target.value;
    setValue("role", inputVal);
    setValue("radioValue", "");
    dispatch(setPosition({ role: inputVal, radioValue: "" }));
  }

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    const radioVal = e.target.value;
    setValue("role", radioVal);
    setValue("radioValue", radioVal);
    dispatch(setPosition({ role: radioVal, radioValue: radioVal }));
  }

  return (
    <div className="text-dark">
      <form
        noValidate
        onSubmit={handleSubmit(() => console.log("Form submitted"))}
      >
        <div className="container mt-5">
          <div className="d-flex align-items-center border p-3">
            <label className="me-2 fw-bold">Roles:</label>
            <input
              type="text"
              value={role}
              placeholder="job, title, position"
              onChange={handleInput}
              className="form-control border-0"
            />
          </div>
          {!role && (
            <div className="container p-3">
              <label>SUGGESTION</label>
              <div className="d-flex flex-row justify-content-evenly">
                <div className="d-flex flex-column border m-3">
                  <input
                    type="radio"
                    value="360 Operator"
                    onChange={handleRadio}
                    checked={radioValue === "360 Operator"}
                    className="form-check-input"
                  />
                  <Positions
                    jobTitle="360 Operator"
                    position="Operate and maintain 360 excavator for construction projects"
                    wage="From $30 per hour"
                  />
                </div>

                <div className="d-flex flex-column border m-3">
                  <input
                    type="radio"
                    value="Site Manager"
                    onChange={handleRadio}
                    checked={radioValue === "Site Manager"}
                    className="form-check-input"
                  />
                  <Positions
                    jobTitle="Site Manager"
                    position="Manage project plans, budgets and schedules throughout project lifecycle"
                    wage="From $32 per hour"
                  />
                </div>
              </div>
              <div className="d-flex flex-row justify-content-evenly">
                <div className="d-flex flex-column border m-3">
                  <input
                    type="radio"
                    value="Project Manager"
                    onChange={handleRadio}
                    checked={radioValue === "Project Manager"}
                    className="form-check-input"
                  />
                  <Positions
                    jobTitle="Project Manager"
                    position="Manage construction projects and ensure adherence to plans"
                    wage="From $42 per hour"
                  />
                </div>

                <div className="d-flex flex-column border m-3">
                  <input
                    type="radio"
                    value="Steel Fixer"
                    onChange={handleRadio}
                    checked={radioValue === "Steel Fixer"}
                    className="form-check-input"
                  />
                  <Positions
                    jobTitle="Steel Fixer"
                    position="Install steel reinforcement bars in concrete structures"
                    wage="From $22 per hour"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
