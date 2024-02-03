import React, { useState } from "react";
import backtotop from "../assets/images/back-to-top.svg";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

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
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce border-0 flex justify-center items-center p-2 w-[45px] h-[45px] rounded-[100%] bg-white fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300  hover:bg-white hover:shadow-[1px_1px_5px_5px_white] "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <img className="group-hover:animate-spin" src={backtotop} alt="backtotop" />
            </button>
        </div>
    );
};

export default BackToTop;