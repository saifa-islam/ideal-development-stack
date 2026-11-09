import React from 'react';
import technologies from '../technologies.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";

const Technology = () => {
    const [selectedTech, setSelectedTech] = React.useState([]);
    
    const addToStack = (tech) => {
        const alreadyAdded = selectedTech.some(
            (item) => item.id === tech.id
        );
    
        if (alreadyAdded) {
            toast.warning(`${tech.name} is already in your stack!`);
            return;
        }
    
        setSelectedTech((prev) => {
            const filteredTech = prev.filter(
                (item) => item.category !== tech.category
            );
    
            return [...filteredTech, tech];
        });
    
        toast.success(`${tech.name} added to your stack!`);
    };

    const removeFromStack = (id) => {
        setSelectedTech(selectedTech.filter((tech) => tech.id !== id));
    };

    return (
        <div>
            
            <h2 className='mt-5 mx-auto px-4 text-2xl font-extrabold text-center md:text-4xl text-left '>Explore the <span className='    bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#9C27B0]
    bg-clip-text text-transparent
    md:bg-gradient-to-r md:from-[#EC4899] md:via-[#A856DA] md:to-[#8B5CF6]'>Technologies</span></h2>
            <p className='mx-auto px-4  text-center text-xs text-gray-500 md:text-left text-sm'>Pick one technology per category to build your ideal stack.</p>
            
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3 gap-6'>

           
        
{technologies.map((tech) => (
    <div
        key={tech.id}
        className="flex flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
    >
        {/* Icon and Badge */}
        <div className="flex items-center justify-between">
            <img
                src={tech.icon}
                alt={tech.name}
                className="h-7 w-7 object-contain"
            />

            {tech.badge && (
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-500">
                    {tech.badge}
                </span>
            )}
        </div>

        {/* Name */}
        <h2 className="mt-4 text-base font-bold text-[#0A0F1D]">
            {tech.name}
        </h2>

        {/* Description */}
        <p className="mt-2 min-h-[60px] text-xs leading-5 text-gray-500">
            {tech.description}
        </p>

        {/* Category, Difficulty and Rating */}
        <div className="mt-3 flex items-center justify-between gap-2 text-[10px]">
            <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
                {tech.category}
            </span>

            <span className="text-gray-500">
                {tech.difficulty}
            </span>

            <span className="font-semibold text-gray-700">
            
            <FaStar className="inline text-yellow-400" />
            {tech.rating}
            </span>
        </div>

        {/* Add Button */}
        <button
            onClick={() => addToStack(tech)}
            disabled={selectedTech.some((item) => item.id === tech.id)}
            className={`mt-4 w-full rounded-lg p-2 text-xs text-white ${
                selectedTech.some((item) => item.id === tech.id)
                    ? "bg-green-600 cursor-not-allowed"
                    : "bg-[#0A0F1D] hover:bg-gray-700"
            }`}
        >
            {selectedTech.some((item) => item.id === tech.id)
                ?  (
                    <>
                        <MdOutlineDone className="inline" /> Added to Stack
                    </>
                )
                : "Add to Stack"}
        </button>
    </div>
))}

     
        </div>
     

        <div className="lg:col-span-3 self-start h-fit rounded-xl border p-4">

<h2 className="font-bold text-xl">Your Stack</h2>

<p className="text-sm text-gray-400 mt-1">
    {selectedTech.length} Technology Selected
</p>

{selectedTech.length === 0 ? (
    <p className="mt-4 text-center text-sm text-gray-400">
        Your stack is empty.
    </p>
) : (
    
    
selectedTech.map((tech) => (
    <div
        key={tech.id}
        className="mt-3 flex items-center justify-between rounded-lg border p-3"
    >
        <div className="flex items-center gap-3">
            <img
                src={tech.icon}
                alt={tech.name}
                className="h-7 w-7 object-contain"
            />

            <div>
                <h3 className="text-sm font-semibold">
                    {tech.name}
                </h3>
                <p className="text-xs text-gray-400">
                    {tech.category}
                </p>
            </div>
        </div>

        <button
            onClick={() => removeFromStack(tech.id)}
            className="text-gray-400 "
        >
            <IoClose />

        </button>
    </div>
))

)}

{selectedTech.length > 0 && (
    <button
        onClick={() => setSelectedTech([])}
        className="mt-6 w-full rounded-lg border border-[#ED8C85] p-2 text-[#D82C20] text-sm font-semibold"
    >
        Remove All
    </button>
)}

</div>
        
        </div>
        <ToastContainer position="top-right" autoClose={2000} />

    </div>
    );
};

export default Technology;