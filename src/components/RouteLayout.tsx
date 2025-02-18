import {Navigation} from "lucide-react";
import {Outlet} from "react-router-dom";

export function RouteLayout() {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}