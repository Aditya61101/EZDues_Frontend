import { Outlet } from 'react-router-dom';
import AdminNavbar from '@/components/admin/navbar';
import AdminSidebar from '@/components/admin/sidebar';

export const AdminLayout = () => {
    return (
        <div className="h-screen w-screen bg-[#E5E8EC] overflow-hidden">
            <AdminNavbar>
                <AdminSidebar />
            </AdminNavbar>
            <div
                className="main md:absolute md:left-80 mt-16 p-10 overflow-y-auto w-full md:w-[calc(100vw-20rem)]"
                style={{ height: "calc(100vh - 4rem)" }}
            >
                {" "}
                <Outlet />
            </div>
        </div>
    )
}