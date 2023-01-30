import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", checkScrollTop);

    return (
        <FaArrowCircleUp
            className="fixed animate-bounce w-1/12 bottom-5 left-[80%] md:left-[88%] items-center h-5 justify-center z-[100]
      text-white cursor-pointer opacity-50 duration-300 hover:opacity-100"
            onClick={scrollTop}
            style={{ height: 40, display: showScroll ? "flex" : "none" }}
        />
    );
};

export default ScrollArrow;