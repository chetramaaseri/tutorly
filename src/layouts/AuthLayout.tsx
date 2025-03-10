import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function AuthLayout() {
    return (
        <div>
            <NavBar />
            <main className="bg-white border-gray-200 dark:bg-gray-900">
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayout;