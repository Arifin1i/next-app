import { useRouter } from 'next/router';
import React from 'react';

const NewsDetails = () => {
    const router = useRouter()
    return (
        <div>
            <h1>The news details of : {router.query.newsID}</h1>
        </div>
    );
};

export default NewsDetails;