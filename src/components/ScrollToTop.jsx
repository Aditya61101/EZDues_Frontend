import React, { useState } from "react";
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div>
            <button
                className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={scrollToTop}
            >
                <ArrowUp />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
