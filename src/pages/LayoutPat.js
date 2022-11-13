import React from "react";
import { Outlet } from "react-router-dom";
import NavbarPatient from "../../src/components/NavbarPat";

export default function LayoutPatient() {
    return (
        <div>
            <NavbarPatient />
            <Outlet />
        </div>
    );
}
