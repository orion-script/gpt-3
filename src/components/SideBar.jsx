import React from 'react';

const SideBar = () => {
    return (
        <div className="absolute w-4/5 bg-orange-600 right-0 top-0 h-full flex flex-col py-10 pl-20">
                <ul className="">
                    <li>Home</li>
                    <li>What is GPT?</li>
                    <li>Open AI</li>
                    <li>Case Studies</li>
                    <li>Library</li>
                </ul>
                <div className="flex flex-col">
                    <button className="">Sign In</button>
                    <button className="">
                        Sign Up
                    </button>
                </div>
        </div>
    );
};

export default SideBar;