import data from "./data.json"
import { Button, useMediaQuery } from "@mui/material"

export const Advantages = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "100vw",
            height: isMobile ? "auto" : "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        box: {
            width: isMobile ? "70%" : "100%",
            height: "auto",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "4vh"
        },

        titleBox: {
            width: isMobile ? "55%" : "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },

        textArea: {
            width: isMobile ? "50%" : "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start"
        },

        title: {
            width: "100%",
            fontSize: "40px",
            textAlign: isMobile ? "left" : "center"
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "80%",
            height: "auto",
            borderRadius: 5,
            padding: 0,
            alignSelf: isMobile ? "start" : "center"
        },

        buttonText: {
            margin: "0.5vw"
        },

        cardSection: {
            width: isMobile ? "45%" : "80%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },

        card: {
            backgroundColor: "#bf996f",
            width: "100%",
            height: "auto",
            minHeight: "15vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 15,
            margin: "2vh 0 2vh 0",
            padding: "1vh 0 1vh 0"
        },

        icon: {
            width: "4vw",
            height: "4vw",
            margin: "auto"
        },

        description: {
            color: "#ffffff",
            width: "70%",
            marginRight: "auto",
            fontWeight: 500
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.titleBox}>

                    <div style={styles.textArea}>

                        <h1 style={styles.title}>Por que escolher nosso escritório?</h1>

                        <Button variant="container" style={styles.button}>
                            <h3 style={styles.buttonText}>
                                Entre em contato
                            </h3>
                        </Button>

                    </div>

                </div>

                <div style={styles.cardSection}>

                    {data.map((item) => {
                        return (
                            <div style={styles.card}>

                                <img style={styles.icon} src="/checkmark.png" />

                                <h3 style={styles.description}>{item.description}</h3>

                            </div>
                        )
                    })}

                </div>

            </div>

        </div>
    )
}