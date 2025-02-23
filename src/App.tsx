import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from "./pages/Login.tsx";
import {RouteLayout} from "./components/RouteLayout.tsx";
import Signup from "./pages/SignUp.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ManageBooks from "./pages/ManageBooks.tsx";
import ManageMembers from "./pages/ManageMembers.tsx";
import BorrowBooks from "./pages/BorrowBooks.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <RouteLayout/>,
            children: [
                {
                    path: '/',
                    element: <Login/>,
                },
                {
                    path: 'signup',
                    element: <Signup/>,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard/>,
                },
                {
                    path: 'manage-books',
                    element: <ManageBooks/>,
                },
                {
                    path: 'manage-members',
                    element: <ManageMembers/>
                },
                {
                    path: 'borrow-books',
                    element: <BorrowBooks/>
                }
            ],
        },
    ]);

    return (
        <RouterProvider router={routes}></RouterProvider>
    );
}
export default App;