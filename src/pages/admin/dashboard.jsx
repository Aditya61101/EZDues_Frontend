import { Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/admin" className="mx-auto lg:mx-0">
                <Button variant="ezDues" className="text-lg py-6 px-7">
                    + Add Department
                </Button>
            </NavLink>
            <div className="flex w-full flex-wrap justify-evenly items-start lg:flex-nowrap">
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                />
                <InfoCard
                    departmentName="Department Of Electrical Engineering"
                />
                <InfoCard
                    departmentName="Department Of Mechanical Engineering"
                />
            </div>
            <div className="flex w-full flex-wrap justify-evenly items-start lg:flex-nowrap">
                <InfoCard
                    departmentName="Department Of Metallurgical Engineering"
                />
                <InfoCard
                    departmentName="Department Of Mathematics and Computing"
                />
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                />
            </div>
            <div className="flex w-full flex-wrap justify-evenly items-start lg:flex-nowrap">
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                />
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                />
                <InfoCard
                    departmentName="Department Of Computer Science And Engineering"
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
