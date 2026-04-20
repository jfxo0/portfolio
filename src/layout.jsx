import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

 function Layout() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Navbar />
            <main className="bg-[url('/background_portfolio.gif')] bg-cover bg-center bg-no-repeat font-itim">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;