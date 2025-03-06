import { Wallet } from "lucide-react";
interface PositionsProps {
  jobTitle: string;
  position: string;
  wage: string;
}
function Positions({ jobTitle, position, wage }: PositionsProps) {
  return (
    <div
      className="card text-dark d-flex flex-wrap flex-row m-2 p-2  border-0  "
      style={{
        height: "10rem",
        width: "28rem",
      }}
    >
      <h2 className="card-title fs-4">{jobTitle}</h2>
      <h4 className="card-subtitle fs-5">{position}</h4>
      <p className="card-text fs-6">
        <Wallet size={20} />
        {wage}
      </p>
    </div>
  );
}
export default Positions;
