import Image from 'next/image';
import React from 'react';

const album = () => {
    return (
        <div>
            {/* <img src="" alt="" /> */}
            <Image  src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" 
            width={500}
            height={500}
            layout= "responsive"
            ></Image>
        </div>
    );
};

export default album;