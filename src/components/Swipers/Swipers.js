import { Button, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const Swipers = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "100vw",
            height: isMobile ? "90vh" : "140vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
    
        box: {
            width: isMobile ? "40vw" : "70vw",
            height: isMobile ? "90vh" : "140vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    
        title: {
            width: "100%",
            fontWeight: 800
        },
    
        cardColumn: {
            width: "100%",
            height: isMobile ? "60vh" : "110vh",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            flexWrap: "wrap",
            justifyContent: "space-between"
        },
    
        card: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: isMobile ? "19.5vw" : "100%",
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
            margin: isMobile ? 0 : "0 auto 0 auto"
        },
    
        cardDescription: {
            width: isMobile ? "15.5vw" : "55vw",
            fontWeight: 300
        },
    
        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isMobile ? "35vw" : "70vw",
            height: "5vh",
            marginTop: isMobile ? "1.5vw" : "5vh",
            padding: 0,
            borderRadius: 5
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