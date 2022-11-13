import React from "react";
import { Outlet } from "react-router-dom";
import NavbarDoctor from "../../src/components/NavbarDoc";

export default function LayoutDoctor() {
    return (
        <div>
            <NavbarDoctor />
            <Outlet />
        </div>
    );
}
