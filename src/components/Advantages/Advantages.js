import { fontWeight } from "@mui/system"
import data from "./data.json"
import { Button } from "@mui/material"

export const Advantages = () => {
    const styles = {
        main: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "100vw",
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        box: {
            width: "70%",
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },

        titleBox: {
            width: "55%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },

        textArea: {
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start"
        },

        title: {
            width: "100%",
            fontSize: "40px"
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "80%",
            height: "4.5vh",
            borderRadius: 5,
            padding: 0
        },

        cardSection: {
            width: "45%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },

        card: {
            backgroundColor: "#bf996f",
            width: "100%",
            height: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 15
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
            fontSize: "20px",
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
                            <h3>
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