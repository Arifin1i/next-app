import DashboardLayout from '@/Components/Layout/DashboardLayout';

const Dashboard = () => {
    return (
        <div>
            <h1>This is DashBoard</h1>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout (page) {
    return <DashboardLayout>{page}</DashboardLayout>
}