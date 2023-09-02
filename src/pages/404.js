import { useRouter } from 'next/router';
import React from 'react';

const Error = () => {
    const router =useRouter()
    setTimeout(() => {
        router.push('/')
    }, 3000);
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png" alt="" width="100%" height="100%" />
        </div>
    );
};

export default Error;