import { UserRound } from 'lucide-react';
import { Lock } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CreateAdmin = () => {
    return (
        <>
            <h1 className="text-3xl font-medium mb-8 text-blue-500">Create Admin</h1>
            <div className="flex items-center mb-8">
                <UserRound className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-2/5" type="text" placeholder="Username" />
            </div>
            <div className="flex items-center mb-8">
                <Lock className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-2/5" type="password" placeholder="Password" />
            </div>
            <div className="flex justify-end mb-8">
                <NavLink to="/admin/" className="mx-auto lg:mx-0">
                    <Button variant="ezDues" className="text-lg py-6 px-7">
                        Create Admin
                    </Button>
                </NavLink>
            </div>
        </>
    );
};

export default CreateAdmin;
