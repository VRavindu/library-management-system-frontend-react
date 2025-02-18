import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from "./pages/Login.tsx";
import {RouteLayout} from "./components/RouteLayout.tsx";
import Signup from "./pages/SignUp.tsx";

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
                }
            ],
        },
    ]);

    return (
        <RouterProvider router={routes}></RouterProvider>
    );
}
export default App;