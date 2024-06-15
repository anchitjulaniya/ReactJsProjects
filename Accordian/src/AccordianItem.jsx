// src/Accordion.js

import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="border-b">
            <button
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={onToggle}
            >
                {title}
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <div className="p-4 bg-white">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;

