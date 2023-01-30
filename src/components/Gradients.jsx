import React from 'react';

const Gradients = (props) => {
    return (
        <div className="w-10/12 h-auto bg-gradient-to-r from-startFirstText to-endFirstText m-auto my-10 rounded-lg px-3 py-8 md:px-10 items-center flex-col items-center flex md:flex-row justify-between">
            <div className="text-black">
                <p>Request Early Access to Get Started</p>
                <h3 className="text-base md:text-xl font-bold">Register today & start exploring the endless possiblities.</h3>
            </div>
            <button className="bg-black py-2 rounded-full w-40 content-center mt-5 md:mt-0">Get Started</button>
        </div>
    );
};

export default Gradients;