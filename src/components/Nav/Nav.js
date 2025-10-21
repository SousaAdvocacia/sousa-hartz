import { AppBar } from "@mui/material";
import { useState } from "react";
import data from "./data.json";

export const Nav = () => {

    const [color, setColor] = useState(true)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(false)
        } else {
            setColor(true)
        }
    }

    window.addEventListener("scroll", changeColor);

    const styles = {

        nav: {
            backgroundColor: color ? "rgba(0, 0, 0, 0.8)" : "#000000",
            width: "100vw",
            height: "10vh",
            display: "flex",
            flexDirection: "row"
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

        menuItem: {
            color: "#ffffff",
            textDecoration: "none",
            margin: "0 1vw 0 1vw"
        }
    }

    return (
        <AppBar style={styles.nav}>
            <div style={styles.navbarBox}>
                <img style={styles.logo} src="/logo.png" alt=""/>
            </div>

            <div style={styles.navbarBox}>
                <div style={styles.menu}>
                    {data.map((item) => (
                        <a style={styles.menuItem} href={item.slug}>
                            <h3 style={{ fontWeight: 400 }}>{item.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </AppBar>
    )
}