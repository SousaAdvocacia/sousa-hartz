import { Button } from "@mui/material";
import data from "./data.json";

export const Swipers = () => {
    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <h2 style={styles.title}>• FORMAS DE ATUAÇÃO DO ESCRITÓRIO</h2>

                <div style={styles.cardColumn}>

                    {data.map((item) => {
                        return (
                            <div style={styles.card}>

                                <h1 style={styles.cardNumber}>{item.number}</h1>

                                <h4 style={styles.cardDescription}>{item.text}</h4>

                            </div>
                        );
                    })}

                </div>

                <Button variant="container" style={styles.button}>
                    <h3>
                        QUERO MARCAR UM ATENDIMENTO
                    </h3>
                </Button>

            </div>

        </div>
    );
}

const styles = {
    main: {
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "100vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    box: {
        width: "40vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        width: "40vw",
        fontWeight: 800
    },

    cardColumn: {
        width: "40vw",
        height: "60vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    card: {
        backgroundColor: "#ffffff",
        color: "#000000",
        width: "19.5vw",
        height: "10vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },

    cardNumber: {
        width: "4vw",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    cardDescription: {
        width: "15.5vw",
        fontWeight: 300
    },

    button: {
        backgroundColor: "#bf996f",
        color: "#ffffff",
        width: "35vw",
        height: "5vh",
        marginTop: "1.5vw",
        borderRadius: 5
    }
}