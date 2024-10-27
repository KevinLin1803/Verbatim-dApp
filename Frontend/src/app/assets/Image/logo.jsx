import Image from 'next/image';
import React from 'react';
import Homepic from '../../assets/Image/logo.png';

function HomePic() {
    return (
        <div>
            <Image
                src={Homepic}
                alt="HomePic"
                className='max-w-full h-full object-cover'
            />
        </div>
    );
}

export default HomePic;
