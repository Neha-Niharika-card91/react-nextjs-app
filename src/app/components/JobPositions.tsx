"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Positions from "./Positions";
import { RootState } from "../redux/store";
import { setPosition } from "../redux/positionSlice";

type FormValue = { role: string; radioValue: { [key: string]: string } };
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
    setValue("radioValue", {});
    dispatch(setPosition({ role: inputVal, radioValue: {} }));
  }

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedJob = JSON.parse(e.target.value);
    const job =
      selectedJob.jobTitle +
      " , " +
      selectedJob.position +
      " , " +
      selectedJob.wage;
    console.log(job);
    setValue("role", job);
    setValue("radioValue", selectedJob);
    dispatch(setPosition({ role: job, radioValue: selectedJob }));
  }

  const jobSuggestions = [
    {
      jobTitle: "360 Operator",
      position: "Operate and maintain 360 excavator for construction projects",
      wage: "From $30 per hour",
    },
    {
      jobTitle: "Site Manager",
      position:
        "Manage project plans, budgets, and schedules throughout project lifecycle",
      wage: "From $32 per hour",
    },
    {
      jobTitle: "Project Manager",
      position: "Manage construction projects and ensure adherence to plans",
      wage: "From $42 per hour",
    },
    {
      jobTitle: "Steel Fixer",
      position: "Install steel reinforcement bars in concrete structures",
      wage: "From $22 per hour",
    },
  ];

  return (
    <div className="text-dark">
      <form
        noValidate
        onSubmit={handleSubmit(() => console.log("Form submitted"))}
      >
        <div className="container mt-5">
          <div className="d-flex align-items-center border p-3">
            <label className="me-2 fw-bold fs-3">Roles:</label>
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
              <label className="fs-6 ">Suggestions</label>
              <div className="d-flex flex-wrap justify-content-evenly">
                {jobSuggestions.map((job) => (
                  <div
                    key={job.jobTitle}
                    className="d-flex flex-column border m-3 p-2"
                  >
                    <input
                      type="radio"
                      value={JSON.stringify(job)}
                      onChange={handleRadio}
                      checked={radioValue?.jobTitle === job.jobTitle}
                      className="form-check-input "
                    />
                    <Positions
                      jobTitle={job.jobTitle}
                      position={job.position}
                      wage={job.wage}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
