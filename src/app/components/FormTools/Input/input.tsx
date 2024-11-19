import React from 'react';

interface Props {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string; // Pode ser 'text', 'password', etc.
    labelClass?: string; // Classe opcional para personalizar o estilo do nome do campo
}

const Input: React.FC<Props> = ({ name, value, onChange, placeholder, type = 'text', labelClass = 'text-sm' }) => {
    return (
        <div className="mb-[10px] w-[500px]">
            {/* Título do campo com a classe labelClass para controlar o tamanho da fonte */}
            <h2 className={`mb-[5px] ${labelClass}`}>{name}</h2>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="p-2 border border-black rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
        </div>
    );
};

export default Input;
