import { useEffect } from "react";
import { Footer, FooterContent, Box, H3, NavBar, 
NavList, List, NavLink, FooterCopy, Copy } from "./styled";

export default function footer() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "5rem",
            duration: 2500,
            reset: true
        });
        sr.reveal(".footer-content", {delay: 300, origin: "bottom"});
    }, []);

    return(
        <Footer>
            <FooterContent className="footer-content">
                <Box>
                    <H3>Getting started</H3>
                    <NavBar>
                        <NavList>
                            <List>
                                <NavLink href="#">Release notes</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Upgrade guide</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Browser support</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Dark mode</NavLink>
                            </List>
                        </NavList>
                    </NavBar>
                </Box>
                <Box>
                    <H3>Explore</H3>
                    <NavBar>
                        <NavList>
                            <List>
                                <NavLink href="#">Prototyping</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Design system</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Pricing</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Security</NavLink>
                            </List>
                        </NavList>
                    </NavBar>
                </Box>
                <Box>
                    <H3>Resouses</H3>
                    <NavBar>
                        <NavList>
                            <List>
                                <NavLink href="#">Best practices</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Support</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Developers</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Learn desing</NavLink>
                            </List>
                        </NavList>
                    </NavBar>
                </Box>
                <Box>
                    <H3>Community</H3>
                    <NavBar>
                        <NavList>
                            <List>
                                <NavLink href="#">Discussion Furoms</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Code of conduct</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Contributing</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">API reference</NavLink>
                            </List>
                        </NavList>
                    </NavBar>
                </Box>
            </FooterContent>
            <FooterCopy>
                <Copy>&copy; 2023 All rights reserved by Tahmid Ahmed Hamim</Copy>
            </FooterCopy>
        </Footer>
    )
}