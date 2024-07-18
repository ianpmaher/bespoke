import React from 'react';

interface CardProps {
    variant: string;
    className?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ variant, children, className }) => {

    const baseStyle = "flex flex-col flex-wrap items-center justify-center rounded-xl transition-all duration-200 ease-out object-contain";

    const variantStyle: { [key: string]: string } = {
        primary: "bg-inherit bg-opacity-100 hover:bg-opacity-80 hover:scale-110",
        contacts: " bg-slate-100 p-0 hover:outline hover:outline-blue-400 shadow-2xl w-28 md:h-28 h-24 transition-none",
        pictures: "bg-transparent p-0 md:h-24",
        menu: "bg-transparent p-0 md:h-24",
    };

    return (
        <div className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
            {children}
        </div>
    );
};



export default Card;