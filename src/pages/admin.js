import React from 'react';
import DashboardLayout from '@/Components/Layout/DashboardLayout';
import RootLayout from '@/Components/Layout/RootLayouts';

const Admin = () => {
    return (
        <div>
            <h1>This my Admin page</h1>
        </div>
    );
};

export default Admin;

Admin.getLayout = function getLayout (page) {
    return (
        <RootLayout>
            <DashboardLayout>{page}</DashboardLayout>
        </RootLayout>
    )
}