import React from 'react';

interface Props {
    name: string
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string; // Pode ser 'text', 'password', etc.
}

const Input: React.FC<Props> = ({ name, value, onChange, placeholder, type = 'text'}) => {
    return (
        <>
            <div className="mb-[10px]">
            <h2 className='mb-[10px] text-lg'>{name}</h2>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="p-2 border border-black rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        </>
    );
};

export default Input;
