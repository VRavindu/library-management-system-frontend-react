import {Outlet} from "react-router-dom";

export function RouteLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}