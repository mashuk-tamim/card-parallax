import React from 'react';

interface pageProps {
	title: string;
	description: string;
	src: string;
	link: string;
	color: string;
}

const page: React.FC<pageProps> = ({
	title,
	description,
	src,
	link,
	color,
}) => {
	console.log(title, description, src, link, color);
    return <div className='h-[100vh] flex justify-center items-center sticky top-0'>
        <div style={{ backgroundColor: color }} className='h-[300px] w-[300px]'>{title}</div>
    </div>;
};

export default page;