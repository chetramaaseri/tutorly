import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function RootLayout() {
    return (
        <div>
            <NavBar />
            <main className="bg-white border-gray-200 dark:bg-gray-900">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;