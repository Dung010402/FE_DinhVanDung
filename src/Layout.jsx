import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <div className="flex flex-col flex-1">
                <Link className=" p-6 text-700 text-4xl font-medium" to={`/`}>
                    Home
                </Link>
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
