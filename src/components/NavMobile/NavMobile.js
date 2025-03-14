import { AppBar, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import data from "./data.json";

export const NavMobile = () => {
    const isMobile = useMediaQuery('(min-width:1000px)');

    const [color, setColor] = useState(true)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(false)
        } else {
            setColor(true)
        }
    }

    window.addEventListener("scroll", changeColor);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    const styles = {

        nav: {
            backgroundColor: color ? "rgba(0, 0, 0, 0.8)" : "#000000",
            width: "100vw",
            height: "10vh",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        },

        navbarBox: {
            width: "50%",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        logo: {
            height: "7.5vh"
        },

        menu: {
            width: "auto",
            display: "flex",
            justifyContent: "space-between"
        },

        button: {
            backgroundColor: "none",
            color: "#ffffff",
            width: "auto",
            height: "auto",
            borderRadius: 100,
            padding: 0,
            alignItems: "center",
            justifyContent: "center"
        },

        buttonIcon: {
            width: "4vh",
            height: "4vh",
            margin: "3vw"
        },

        menuItem: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "#ffffff",
            width: "100%",
            height: "5vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxSizing: "border-box",
            borderWidth: "0 0 1vh 0",
            borderColor: "#000000"
        }
    }

    return (
        <div style={styles.main}>
            <AppBar style={styles.nav}>
                <div style={styles.navbarBox}>
                    <img style={styles.logo} src="/logo.png" />
                </div>

                <div style={styles.navbarBox}>
                    <div style={styles.menu}>
                        <Button variant="container" style={styles.button} onClick={() => toggleMenu()}>
                            <img style={styles.buttonIcon} src="/mobile-menu-icon.png" />
                        </Button>
                    </div>
                </div>
                {isOpen ?
                    data.map((item) => (
                        <a style={styles.menuItem} href={item.slug}>
                                <h3>{item.name}</h3>
                        </a>
                    ))
                    :
                    ''}
            </AppBar>


        </div>
    )
}