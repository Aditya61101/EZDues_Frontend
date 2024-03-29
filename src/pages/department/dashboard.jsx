import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const InfoCard = ({
  title,
  amount = 0,
  color = "black",
  amountPercent,
  numberOfFines,
  numberOfFinesPercent,
}) => {
  return (
    <>
      <div className="w-max min-h-60 p-10 flex flex-col justify-start items-start bg-white rounded-3xl lg:grow m-5">
        <p className="text-md">{title}</p>
        <h1 className="text-4xl font-bold my-4" style={{ color: color }}>
          Rs {parseFloat(amount).toFixed(2)}
        </h1>
        <p className="text-sm h-[1.5em]" style={{ color: color }}>
          {amountPercent ? `(${amountPercent}% of Total)` : ""}
        </p>
        <p className="text-md mt-5">{numberOfFines} Fines in Count</p>
        <p className="text-xs h-[1.5em] text-gray-400 my-1">
          {numberOfFinesPercent ? `(${numberOfFinesPercent}% of Total)` : ""}
        </p>
      </div>
    </>
  );
};

const ActionCard = ({ number, description, url }) => {
  return (
    <Link to={url}>
      <div
        className="relative pb-[calc(30px+2.5rem)] w-full min-h-40 p-10 flex flex-col justify-start items-start bg-white rounded-3xl lg:grow hover:shadow-lg my-5"
        style={{ transition: "box-shadow 0.5s" }}
      >
        <h1 className="text-4xl font-bold" style={{ color: "#538FF8" }}>
          {number}
        </h1>
        <p className="text-md mb-2">{description}</p>
        <div className="rounded-full bg-[#538FF8] text-white p-2 absolute bottom-3 right-3">
          <ChevronRight size={30} color="white" />
        </div>
      </div>
    </Link>
  );
};

const DepartmentDashboard = () => {
  //TODO: Fetch finesData from API
  let finesData = {
    totalFine: 20000,
    settledFine: 5500,
    numberOfFines: 20,
    settledNumberOfFines: 5,
    pendingFines: 3,
    pendingNoDues: 221,
  };

  finesData.unsettledFine = finesData.totalFine - finesData.settledFine;
  finesData.settledFinePercent = (
    (finesData.settledFine / finesData.totalFine) *
    100
  ).toFixed(2);
  finesData.unsettledFinePercent = 100 - finesData.settledFinePercent;
  finesData.settledNumberPercent = (
    (finesData.settledNumberOfFines / finesData.numberOfFines) *
    100
  ).toFixed(2);
  finesData.unsettledNumberPercent = 100 - finesData.settledNumberPercent;

  return (
    <div className="flex flex-wrap justify-between items-start">
      <div className="flex w-full flex-wrap justify-evenly items-start lg:flex-nowrap">
        <InfoCard
          title="Total Fines Amount"
          amount={finesData.totalFine}
          color="#538FF8"
          numberOfFines={finesData.numberOfFines}
        ></InfoCard>
        <InfoCard
          title="Settled Fine"
          amount={finesData.settledFine}
          color="#2BC9AC"
          amountPercent={finesData.settledFinePercent}
          numberOfFines={finesData.settledNumberOfFines}
          numberOfFinesPercent={finesData.settledNumberPercent}
        ></InfoCard>
        <InfoCard
          title="Unsettled Fine"
          amount={finesData.unsettledFine}
          color="#A7AABD"
          amountPercent={finesData.unsettledFinePercent}
          numberOfFines={finesData.unsettledNumberOfFines}
          numberOfFinesPercent={finesData.unsettledNumberPercent}
        ></InfoCard>
      </div>
      <div className="px-5">
        <Pie
          data={{
            labels: ["Settled", "Unsettled"],
            datasets: [
              {
                label: "Settled",
                data: [finesData.settledFine, finesData.unsettledFine],
                backgroundColor: ["#F8B653", "#F36F56"],
                hoverOffset: 4,
              },
            ],
          }}
          style={{
            width: "clamp( 300px, 30vw, 600px)",
            height: "clamp( 300px, 30vw, 600px)",
          }}
          options={{
            maintainAspectRatio: false,
            aspectRatio: 1,
            plugins: {
              legend: {
                position: "right",
              },
            },
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center px-5 w-[350px]">
        <ActionCard
          number={finesData.pendingFines}
          description="Paid Fines Pending Approval"
          url="/department/paid-fines/"
        ></ActionCard>
        <ActionCard
          number={finesData.pendingNoDues}
          description="No Dues Requests Pending Approval"
          url="/department/no-dues/"
        ></ActionCard>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
