import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from "./pages/Login.tsx";
import {RouteLayout} from "./components/RouteLayout.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <RouteLayout/>,
            children: [
                {
                    path: '/',
                    element: <Login/>,
                }
            ],
        },
    ]);

    return (
        <RouterProvider router={routes}></RouterProvider>
    );
}
export default App;