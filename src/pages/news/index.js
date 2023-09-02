import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import RootLayout from '../../../Components/Layout/RootLayouts';

const index = () => {
    return (
        <div>
            <h1>News home page</h1>
            <Button type="primary">
                <Link href="/">Home</Link>
            </Button>
        </div>
    );
};

export default index;