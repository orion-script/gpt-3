import React from 'react';
import Logo from "../assets/GPT-3.svg";

const Footer = () => {
    return (
        <div className="bg-FooterBack w-full h-auto md:px-36 pt-24 mt-20">
            <div className="w-11/12 md:w-3/5 text-center m-auto">
                <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-startFirstText to-endFirstText inline-block text-transparent bg-clip-text">Do
                    you want to step in to the future before others</p>
                <p className="pt-10 text-sm">Request Early Access</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full h-auto m-auto mt-20 pl-5 md:pl-0">
                <div className="w-10/12 md:w-3/12">
                    <img src={Logo} alt="" className="w-10/12 md:w-3/5 py-5" />
                    <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
                </div>

                <ul className="py-10 md:py-0">
                        <li className="font-bold text-2xl pb-5">Links</li>
                        <li className="py-2">Overons</li>
                        <li className="py-2">Social Media</li>
                        <li className="py-2">Counters</li>
                        <li className="py-2">Contact</li>
                    </ul>

                <ul  className="pb-10 md:pb-0">
                    <li className="font-bold text-2xl pb-5">Company</li>
                    <li className="py-2">Terms & Conditions</li>
                    <li className="py-2">Privacy Policy</li>
                    <li className="py-2">Contact</li>
                </ul>

                <ul  className="pb-10 md:pb-0">
                    <li className="font-bold text-2xl pb-5">Get in touch</li>
                    <li className="py-2">Crechterwoord K12 <br /> 182 DK Alknjkcb</li>
                    <li className="py-2">085-132567</li>
                    <li className="py-2">info@payme.net</li>
                </ul>
            </div>
            <p className="w-full text-center py-10">© 2023 GPT-3. All rights reserved.</p>

            <div className="text-center mt-10 text-sm typewritter">
                <p className="typewritter">
                    Designed by{" "}
                    <a
                        className="text-indigo-200 text-base font-thin"
                        // target_blank
                        href="https://github.com/Hadestech01/"
                    >
                        HadesCodes
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;