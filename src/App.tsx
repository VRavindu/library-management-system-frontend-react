import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Login from "./pages/Login.tsx";
import {RouteLayout} from "./components/RouteLayout.tsx";
import Signup from "./pages/SignUp.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ManageBooks from "./pages/ManageBooks.tsx";
import ManageMembers from "./pages/ManageMembers.tsx";
import BorrowBooks from "./pages/BorrowBooks.tsx";
// import {useSelector} from "react-redux";

function App() {
    // const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);

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
                    // element: isAuthenticated ? <Dashboard/> : <Navigate to='/'/>,
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