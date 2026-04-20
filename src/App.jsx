import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout.jsx";
import HomePage from "./pages/Home.jsx";
import ProjectPage from "./pages/Projects.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/projects/:slug",
                element: <ProjectPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;