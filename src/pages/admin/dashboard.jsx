import { Landmark } from "lucide-react";

const InfoCard = ({ departmentName }) => {
    return (
        <div className="w-80 h-50 p-10 flex flex-col justify-center items-center bg-white rounded-3xl m-5">
            <div className="flex flex-col items-center">
                <Landmark className="mb-4" size={40} style={{ strokeWidth: 1.3 }} />
                <h1 className="text-lg font-normal text-center" style={{ color: "black" }}>
                    {departmentName}
                </h1>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <div className="flex flex-wrap justify-between items-start">
            <div className="flex w-full flex-wrap justify-evenly items-start lg:flex-nowrap">
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                ></InfoCard>
                <InfoCard
                    departmentName="Department Of Electrical Engineering"
                ></InfoCard>
                <InfoCard
                    departmentName="Department Of Mechanical Engineering"
                ></InfoCard>
            </div>
            <div className="flex w-full flex-wrap justify-evenly items-start lg:flex-nowrap">
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                ></InfoCard>
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                ></InfoCard>
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                ></InfoCard>
            </div>
        </div>
    );
};

export default AdminDashboard;
