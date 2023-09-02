import React from 'react';
import RootLayout from '@/Components/Layout/RootLayouts';

const About = () => {
    return (
        <div>
            <h1>This my About page</h1>
        </div>
    );
};

export default About;

About.getLayout = function getLayout(page)  {
    return <RootLayout>{page}</RootLayout>

}