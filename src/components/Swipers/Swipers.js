import { Button, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const Swipers = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
    
        box: {
            width: isDesktop ? "50vw" : "70vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "5vh 0 5vh 0"
        },
    
        title: {
            width: "100%",
            fontWeight: 800,
            marginTop: 0
        },
    
        cardColumn: {
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            flexWrap: "wrap",
            justifyContent: "space-between"
        },
    
        card: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: isDesktop ? "49%" : "100%",
            minHeight: "10vh",
            height: "auto",
            marginBottom: "2vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            boxSizing: "border-box",
            padding: "0.5vw"
        },
    
        cardNumber: {
            width: "4vw",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: isDesktop ? 0 : "0 auto 0 auto"
        },
    
        cardDescription: {
            width: isDesktop ? "15.5vw" : "55vw",
            fontWeight: 300
        },
    
        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isDesktop ? "35vw" : "70vw",
            height: "auto",
            padding: 0,
            borderRadius: 5
        },

        buttonText: {
            margin: "0.5vw 0 0.5vw 0"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <h2 style={styles.title}>• FORMAS DE ATUAÇÃO DO ESCRITÓRIO</h2>

                <div style={styles.cardColumn}>

                    {data.map((item) => {
                        return (
                            <div style={styles.card}>

                                <h1 style={styles.cardNumber}>{item.number}</h1>

                                <h3 style={styles.cardDescription}>{item.text}</h3>

                            </div>
                        );
                    })}

                </div>

                <Button variant="container" style={styles.button}>
                    <h3 style={styles.buttonText}>
                        QUERO MARCAR UM ATENDIMENTO
                    </h3>
                </Button>

            </div>

        </div>
    );
}