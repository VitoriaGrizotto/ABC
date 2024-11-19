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
                <h2 className="font-sans text-center mb-7 text-[#717171] text-xl" style={{ position: 'relative', top: '-125px' }}>Novo Projeto</h2>

                    <Input 
                        label="Título do projeto" // Use 'label' to pass text for title
                        name="Título do projeto *"
                        value={inputValues.title}
                        onChange={handleChange}
                        labelClass="text-sm" // Decrease font size for label
                    />
                    
                    <Input
                        label="Área responsável"
                        name="Área responsável *"
                        value={inputValues.area}
                        onChange={handleChange}
                        labelClass="text-sm" // Decrease font size for label
                    />

                    <Input
                        label="Tipo de evento"
                        name="Tipo de evento *"
                        value={inputValues.eventType}
                        onChange={handleChange}
                        labelClass="text-sm" // Decrease font size for label
                    />

                    <label for="descricaoEvento" className="block text-sm font-medium text-gray-700">Descrição do Evento</label>
                    <textarea 
                    id="descricaoEvento"
                    className="p-2 border border-black rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                    rows="4"
                    ></textarea>


                    <button
                        type="submit"
                        className="bg-[#4856EE] text-white rounded-lg p-2 w-[120px] hover:bg-[#3d4bb5] transition absolute bottom-5 right-5"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BoxNewProject;
