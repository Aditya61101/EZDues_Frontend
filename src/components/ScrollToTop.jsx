import { useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        if (window.scrollY > 300) setVisible(true);
        else if (window.scrollY <= 300) setVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    window.addEventListener("scroll", toggleVisible);

    return (
        <button
        className={`${visible?"inline":"hidden"} fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 z-50`}
        onClick={scrollToTop}
        >
            <ArrowUp />
        </button>
        
    );
};

export default ScrollToTopButton;
