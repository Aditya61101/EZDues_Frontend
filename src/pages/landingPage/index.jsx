import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
    <>
        <p>Welcome to EZDues</p>
        <div className=" flex gap-x-2">
            <Link to={"/student/sign-in"}>
            <Button>Log in As Student</Button>
            </Link>
            <Link to={"/admin/sign-in"}>
            <Button>Log in As Admin</Button>
            </Link>
        </div>
    </>
    )
}

export default LandingPage