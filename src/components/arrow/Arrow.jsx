import { useEffect, useState } from "react";
import { Arrow } from "./styled";
import { BiSolidUpArrowAlt } from "react-icons/bi";

export default function arrow() {
    const [arrow, setArrow] = useState(false);
    
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setArrow(true);
            } 
            else {
                setArrow(false);
            }
        });
    }, []);

    return(
        <>
            {arrow && (
                <Arrow onClick={scrollTop}>
                    <i><BiSolidUpArrowAlt/></i>
                </Arrow>
            )}
        </>
    )
}