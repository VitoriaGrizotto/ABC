"use client";
import React, { useState } from 'react';
import Input from "../FormTools/Input/input";

const BoxNewProject: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [inputValues, setInputValues] = useState({
        title: '',
        area: '',
        eventType: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted values:", inputValues);
        // Handle form submission logic here
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute left-[537px] top-[40px] bg-white p-5 w-[820px] h-[690px] flex flex-col items-center justify-center border border-gray-200 rounded-md shadow-lg">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    aria-label="Close"
                >
                    &times; {/* This is the "X" icon */}
                </button>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <h2 className="text-center mb-[10px]">Novo Projeto</h2>
                    <Input 
                        name='title'
                        placeholder='Título do projeto *'
                        value={inputValues.title}
                        onChange={handleChange}
                    />
                    <Input
                        name='area'
                        placeholder='Área responsável *'
                        value={inputValues.area}
                        onChange={handleChange}
                    />
                    <Input
                        name='eventType'
                        placeholder='Tipo de evento *'
                        value={inputValues.eventType}
                        onChange={handleChange}
                    />
                    <Input
                        name='description'
                        placeholder='Descrição do evento *'
                        value={inputValues.description}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded p-2 w-[70px] hover:bg-blue-600 transition"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BoxNewProject;
