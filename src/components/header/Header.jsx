import { useEffect, useRef, useState } from "react";
import { Header, Logo, NavBar, NavList, List, NavLink, Icons } from "./styled";
import logoImg from "../../assets/logo.svg";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>);
    const headerRef = useRef(null);
    const navRef = useRef(null);

    const toggleMenu = () => {
        if(!navRef.current.classList.contains("open")) {
            navRef.current.classList.add("open");
            setMenuIcon(<IoClose/>)
        }
        else {
            navRef.current.classList.remove("open");
            setMenuIcon(<BiMenu/>);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            headerRef.current.classList.toggle("sticky", window.scrollY > 0);
            navRef.current.classList.remove("open");
            setMenuIcon(<BiMenu/>);
        });
    }, []);

    return(
        <>
            <Header ref={headerRef}>
                <Logo href="/">
                    <img src={logoImg} alt="Logo" />
                </Logo>
                <NavBar ref={navRef}>
                    <NavList>
                        <List>
                            <NavLink href="#" className="active">Home</NavLink>
                        </List>
                        <List>
                            <NavLink href="#">About</NavLink>
                        </List>
                        <List>
                            <NavLink href="#">Shop</NavLink>
                        </List>
                        <List>
                            <NavLink href="#">Pages</NavLink>
                        </List>
                        <List>
                            <NavLink href="#">Blog</NavLink>
                        </List>
                        <List>
                            <NavLink href="#">Contact</NavLink>
                        </List>
                    </NavList>
                </NavBar>
                <Icons>
                    <div><BiSearch/></div>
                    <div><BiUser/></div>
                    <div><BiCart/></div>
                    <div id="menu-icon" onClick={toggleMenu}>
                        {menuIcon}
                    </div>
                </Icons>
            </Header>
        </>
    )
}