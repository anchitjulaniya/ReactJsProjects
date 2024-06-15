import AccordionItem from './AccordianItem.jsx'
import { useState } from 'react';
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 border border-gray-300 rounded-md overflow-hidden">
            {[
                { title: 'Section 1', content: 'Content for section 1.' },
                { title: 'Section 2', content: 'Content for section 2.' },
                { title: 'Section 3', content: 'Content for section 3.' },
            ].map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;